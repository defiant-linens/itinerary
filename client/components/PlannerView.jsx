class PlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // Hard code for now, need to make a get request to find location, days associated with the itinerary ID
      location: 'San Francisco',
      days: 3,
      events: // We'll need a get request here (?) to find all events associated with the itineraryID 
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
        .then(res => {
          console.log('Successful clientside POST-request');
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);
  }

  render() {
    return (
      <div>
        <h4>Your trip to {this.state.location}.</h4>
        // Loop through DayView, passing in as props the day number and events associated with that day
        <DayView />
      </div>
    );
  }

}


// Need to: 
// 1. Make a get request w/ itinerary ID; get number of days
// 2. Make that number of day views
