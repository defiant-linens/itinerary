class ChoosePlannerView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: 'Leah',
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
      console.log(event.target.id);
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
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
            Number of Days:
            <input type='text' value={this.state.numDays} onChange={this.handleInputChange} id="numDays"></input>
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
          <button onClick={this.saveItinerary}><Link to='/'>Blank Itinerary</Link></button>
          <button onClick={this.saveItinerary}><Link to='/'>Preference-Based Itinerary</Link></button>
          <button onClick={this.saveItinerary}><Link to='/'>Complete Itinerary</Link></button>
        </div>

      </div>
    );
  }

}
