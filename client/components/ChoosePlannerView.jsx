class ChoosePlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: window.user,
      location: '',
      startDate: '',
      endDate: '',
      numDays: 0,
      overview: 'hardcode',
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
          return res.json();
        })
        .then(json => {
          window.newItinerary = json.id;
          window.location.hash = '#/planner';
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.saveItinerary = event => {
      event.preventDefault();
      var data = {
        user: this.state.user,
        location: this.state.location,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        numDays: parseInt(this.state.numDays, 10),
        overview: this.state.overview
      };
      this.serverRequest('http://localhost:3000/classes/itineraries', data);
    };

    this.handleInputChange = event => {
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

    this.getDateDiff = () => {
      var start = this.state.startDate;
      var end = this.state.endDate;

      if (start && end) {
        var startDate = new Date(start.slice(0,4), start.slice(5,7), start.slice(8,10), 0, 0, 0, 0);
        var endDate = new Date(end.slice(0,4), end.slice(5,7), end.slice(8,10), 0, 0, 0, 0);
        var numDays = 1 + (endDate.getTime() - startDate.getTime())/(1000 * 60 * 60 * 24);
      }

      return (numDays && numDays > 0) ? numDays : 0;
    };
  }

  render() {
    return (
      <div>

        <form className='itinerary-prefs'> 
          <h2>Where do you want to go?</h2>

          <label>
            Destination:
            <input type='text' value={this.state.location} onChange={this.handleInputChange} id="location"></input>
          </label>

          <label>
            Start Date:
            <input type='date' value={this.state.start} onChange={this.handleInputChange} id="startDate"></input>
          </label>

          <label>
            End Date:
            <input type='date' value={this.state.end} onChange={this.handleInputChange} id="endDate"></input>
          </label>

        </form>

        <div className='planner-prefs'>
          <button><Link to='/planner' onClick={this.saveItinerary}>Blank Itinerary</Link></button>
          <button><Link to='/planner' onClick={this.saveItinerary}>Preference-Based Itinerary</Link></button>
          <button><Link to='/planner' onClick={this.saveItinerary}>Complete Itinerary</Link></button>
        </div>

      </div>
    );
  }

}
