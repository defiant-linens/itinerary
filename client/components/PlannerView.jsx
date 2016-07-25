class PlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'San Francisco',
      numDays: 3,
      events: [],
      yelpEvents: []
    };

    this.serverRequest = function ajax(url, data, callback) {
      // If second parameter is empty function performs a GET request
      console.log('serverRequest');
      var method = data === undefined ? 'GET' : 'POST';
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        method: method,
        body: JSON.stringify(data)
      }, this)
        .then(res => {
          console.log('Successful clientside POST-request');
          return res.json();
        })
        .then(json => {
          console.log(json);

          callback(json);

          return json;
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);


    // Function that saves all events in itinerary to database on button click
    this.saveItinerary = event => {
      console.log(this);
      event.preventDefault();

      var eventsToSave = _.map(this.state.events, (e, index) => {
        var eventToSave = {
          day: (Math.floor(index / 3) + 1),
          location: this.state.location,
          name: e.name,
          slot: (index % 3),
          image: e.image_url,
          url: e.url,
          snippet: e.snippet_text,
          review: e.rating
        };
        
        // Convert categories into a string
        eventToSave['categories'] = _.map(e['categories'], function(cat) {
          return cat[0];
        }).join(', ');

        return eventToSave;
      });

      var data = {
        id: window.newItinerary,
        events: eventsToSave
      };

      this.serverRequest('http://localhost:3000/classes/save', data);
    };
  }

  componentWillMount() {
    var getEvents = () => {
      console.log('fromItinId', window.fromItinId);

      // Get events saved events from the database
      if (window.fromItinId) {
        this.serverRequest(
          'http://localhost:3000/classes/itineraryEvents',
          {id: window.fromItinId},
          function(data) {
            var newState = {
              events: data
            };
            that.setState(newState);
            console.log(that.state.events);
            window.fromItinId = undefined;
          }
        );
      }

      // Get events from yelp
      else {
        this.serverRequest(
          'http://localhost:3000/classes/events',
          {location: that.state.location},
          function(data) {

            // Make the events from yelp nice
            var formattedYelp = _.map(data.eventsFromYelp, function(yelpEvent) {
              var formatted = {
                name: yelpEvent['name'],
                image: yelpEvent['image_url'],
                url: yelpEvent['url'],
                snippet: yelpEvent['snippet_text'],
                review: yelpEvent['rating']
              };

              formatted['categories'] = _.map(yelpEvent['categories'], function(cat) {
                return cat[0];
              }).join(', ');

              return formatted;
            });

            console.log(data.eventsFromYelp);
            console.log(formattedYelp);

            var newState = {
              events: data.eventsFromYelp, 
              yelpEvents: data.eventsFromYelp
            };
            that.setState(newState);
          }
        );
      }
    };

    var that = this;
    // Get itinerary 
    this.serverRequest(
      'http://localhost:3000/classes/itinerary', 
      {id: window.newItinerary},
      function(data) {
        console.log(data);
        var newState = {
          location: data.location,
          numDays: data.numDays
        };
        that.setState(newState);
        getEvents();
      }
    );

  }

  render() {
    console.log(this.state.events);
    return (
      <div>
        <h4>Your trip to {this.state.location}:</h4>

        <div>
        {_.range(1, this.state.numDays + 1).map((day) => {
            return (<DayView day={day} events={this.state.events}/>);
          }
        )}
        </div>

        <button onClick={this.saveItinerary}>Save Itinerary</button>
      </div>
    );
  }

}
