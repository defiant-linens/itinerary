class SubmitView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      location: '',
      numDays: 0,
      overview: '',
      event1: '',
      event2: '',
      event3: ''
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
        <form onSubmit={this.saveItinerary}>
          <label>
            Name:
            <input type='text' value={this.state.user} onChange={this.handleInputChange} id="user"></input>
          </label>

          <label>
            Location:
            <input type='text' value={this.state.location} onChange={this.handleInputChange} id="location"></input>
          </label>

          <label>
            Start Date:
            <input type='date' value={this.state.start} onChange={this.handleInputChange} id="start"></input>
          </label>

          <label>
            End Date:
            <input type='date' value={this.state.end} onChange={this.handleInputChange} id="end"></input>
          </label>

          <label>
            Number of Days:
            <input type='text' value={this.state.numDays} onChange={this.handleInputChange} id="numDays"></input>
          </label>

          <label>
            Overview:
            <textarea type='text' value={this.state.overview} onChange={this.handleInputChange} id="overview"></textarea>
          </label>

          <DaySubmitView />
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }

}
