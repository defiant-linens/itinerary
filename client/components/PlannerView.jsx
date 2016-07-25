class PlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'San Francisco',
      numDays: 3,
      events: [] // We'll need a get request here (?) to find all events associated with the itineraryID
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

    this.saveItinerary = event => {
      event.preventDefault();
      
      var data = {
        id: 1,
        events: [{
          day: 1,
          location: 'Berlin',
          name: 'Hot Dog House',
          slot: 1,
          image: 'http://sites.msdwt.k12.in.us/jfeeney/wp-content/uploads/sites/15/2014/07/worldwide-travel-nurse-advantages.jpg',
          url: 'http://www.yelp.com/biz/chefs-dog-house-newington',
          snippet: 'Great',
          categories: 'Restaurants',
          review: 4.5
        }]
      };

      this.serverRequest('http://localhost:3000/classes/save', data);
    };
  }

  componentWillMount() {
    var getEvents = () => {
      console.log('fromItinId', window.fromItinId);
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
            // window.fromItinId = undefined;
          }
        );
      }
      else {
        this.serverRequest(
          'http://localhost:3000/classes/events',
          {location: that.state.location},
          function(data) {
            var newState = {
              events: data.eventsFromYelp
            };
            that.setState(newState);
            console.log(that.state.events);
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
            return (<DayView day={day} yelpEvents={this.state.events}/>);
          }
        )}
        </div>

        <button onClick={this.saveItinerary}>Save Itinerary</button>
      </div>
    );
  }

}
