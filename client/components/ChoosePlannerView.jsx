class ChoosePlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: window.user,
      location: '',
      startDate: '',
      endDate: '',
      numDays: 0,
      showList: false,
      listLocation: '',
      yelpEvents: [],
      events: [],
      day: '1',
      slot: '1',
      selected: '',
      itineraryId: null
    };
  }

  handleInputChange(event) {
    var targetID = event.target.id;
    var targetValue = event.target.value;

    var newState = {};
    newState[targetID] = targetValue;

    // Calculate the number of days in the itinerary
    this.setState(newState, function() {
      if (targetID === 'startDate' || targetID === 'endDate') {
        this.setState({numDays: this.getDateDiff()});
      }        
    });
  };


  getDateDiff() {
    var start = this.state.startDate;
    var end = this.state.endDate;
    var dayInMilliseconds = 1000 * 60 * 60 * 24
    if (start && end) {
      var startDate = new Date(start);
      var endDate = new Date(end);
      //If the start and end dates are the same day
      //It still implies that the user will be in the city for 1 day
      var numDays = 1 + (endDate.getTime() - startDate.getTime()) / dayInMilliseconds;
    }

    return (numDays && numDays > 0) ? numDays : 0;
  };

  serverRequest(url, data, callback) {
    // If second parameter is empty function performs a GET request
    var method = data === undefined ? 'GET' : 'POST';
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: method,
      body: JSON.stringify(data)
    })
    .then(res => {
      console.log('Successful clientside POST-request');
      return res.json();
    })
    .then(json => {
      callback(json);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getItinerary() {
    console.log('getting itinerary')
    this.serverRequest(
      '/classes/events',
      { location: this.state.location },
      this.formatYelpData.bind(this)
    );
  }

  swap() {
    var day = parseInt(this.state.day, 10) - 1;
    var slot = parseInt(this.state.slot, 10) - 1;

    var index = 3 * day + slot;
    var target = _.find(this.state.events, event => {
      return event.name === this.state.selected;
    });
    var targetIdx = _.findIndex(this.state.events, event => {
      return event.name === this.state.selected;
    });
    var newEvents = this.state.events.slice();
    var temp = newEvents[index];
    newEvents[index] = target;
    newEvents[targetIdx] = temp;
    this.setState({events: newEvents});
  };

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  };

  formatYelpData(data) {
    // Make the events from yelp nice
    var formattedYelp = _.map(data.eventsFromYelp, function(yelpEvent) {
      var formatted = {
        name: yelpEvent['name'],
        image: yelpEvent['image_url'],
        url: yelpEvent['url'],
        snippet: yelpEvent['snippet_text'],
        rating: yelpEvent['rating_img_url'],
        address: yelpEvent['location']['display_address'][0] + ', ' + yelpEvent['location']['display_address'][1]
      };

      formatted['categories'] = _.map(yelpEvent['categories'], function(cat) {
        return cat[0];
      }).join(', ');

      return formatted;
    });

        
    var newState = {
      events: formattedYelp, 
      yelpEvents: formattedYelp,
      selected: formattedYelp[0].name
    };
      
    this.setState(newState);
    window.fromItinId = undefined;
  }

  saveItinerary() {
    console.log('in the intinerary save');
    event.preventDefault();

    var eventsToSave = _.map(this.state.events, (e, index) => {
      var eventToSave = {
        day: (Math.floor(index / 3) + 1),
        location: this.state.location,
        name: e.name,
        slot: (index % 3),
        image: e.image,
        url: e.url,
        snippet: e.snippet,
        categories: e.categories,
        address: e.address
      };
      return eventToSave;
    });

    var data = {
      id: this.state.itineraryId,
      events: eventsToSave,
      user: this.state.user,
      location: this.state.location,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      numDays: this.state.numDays
    };
    this.serverRequest('/classes/itineraries', data, (json) => {
      this.setState({
        itineraryId: json.id
      })
    });
  }

  render() {
    return (
      <div>
        <div className="container centerText">
          <form>
            <h2>Where will your travels take you?</h2>
            <div className='row'>
              <label>
                Destination:
                <div className="input-group">
                  <input type='text' value={this.state.location} onChange={this.handleInputChange.bind(this)} id="location"></input>
                </div>
              </label>
              <p></p>
              <label>
                Start Date:
                <input type='date' value={this.state.start} onChange={this.handleInputChange.bind(this)} id="startDate"></input>
              </label>
              <p></p>
              <label>
                End Date:
                <input type='date' value={this.state.end} onChange={this.handleInputChange.bind(this)} id="endDate"></input>
              </label>
            </div>
          </form>
          <p></p>
          <div className='planner-prefs'>
            <button className="btn btn-success" onClick={this.getItinerary.bind(this)}>Blank Itinerary</button>
            <button className="btn btn-success" onClick={this.getItinerary.bind(this)}>Preference-Based Itinerary</button>
          </div>
        </div>
        <div>
          <PlannerView 
            location={this.state.location} 
            numDays={this.state.numDays} 
            yelpEvents={this.state.yelpEvents} 
            events={this.state.events} 
            swap={this.swap.bind(this)}
            handleChange={this.handleChange.bind(this)}
            saveItinerary={this.saveItinerary.bind(this)}
          />
        </div>
      </div>
    );
  }

}
