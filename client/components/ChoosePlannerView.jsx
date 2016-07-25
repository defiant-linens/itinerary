class ChoosePlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: 'vincent',
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
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.saveItinerary = event => {
      event.preventDefault();
      console.log(event);
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
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <h2>Where will your travels take you?</h2>
          <div className='row'>
            <label>
              Destination:
              <div className="input-group">
                <input type='text' value={this.state.location} onChange={this.handleInputChange} id="location"></input>
              </div>
            </label>
            <p></p>
            <label>
              Start Date:
              <input type='date' value={this.state.start} onChange={this.handleInputChange} id="startDate"></input>
            </label>
            <p></p>
            <label>
              End Date:
              <input type='date' value={this.state.end} onChange={this.handleInputChange} id="endDate"></input>
            </label>
          </div>
        </form>
        <p></p>
        <div className='planner-prefs'>
          <Link to='/' className="btn btn-success" onClick={this.saveItinerary}>Blank Itinerary</Link><span>   </span>
          <Link to='/' className="btn btn-success" onClick={this.saveItinerary}>Preference-Based Itinerary</Link><span>   </span>
          <Link to='/' className="btn btn-success" onClick={this.saveItinerary}>Complete Itinerary</Link>
        </div>
      </div>
    );
  }

}
