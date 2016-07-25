class PlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'San Francisco',
      days: 3,
      events: [] // We'll need a get request here (?) to find all events associated with the itineraryID 
    };

    this.serverRequest = function ajax(url, data) {
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
      }, this)
        .then(json => {
          console.log(json);
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.serverRequest = function () {
      var newState = {
        location: 'Boston', //json.location
        numDays: 4, // json.numDays
        events: [] // Get array in callback
      }
      this.setState(newState);
    }

    this.saveItinerary = function () {
      // Save events added by user to the events table in the server w/ associated itineraryID (?)
    }
  }

  componentDidMount() {
    this.serverRequest('http://localhost:3000/classes/itinerary', {itineraryID: window.newItinerary});
  }

  render() {
    return (
      <div>
        <h4>Your trip to {this.state.location}.</h4>

        <div>
        {_.range(1, this.state.numDays + 1).map((day) => {
            // Code here to get event array for that day; pass into DayView as prop
            return (<DayView day={day}/>);
          }
        )}
        </div>

        <button onClick={this.saveItinerary}>Save Itinerary</button>
      </div>
    );
  }

}
