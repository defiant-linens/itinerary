class SubmitView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      days: 0,
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
          return res.json();
        })
        .then(json => {
          console.log(json);
          this.setState('itineraries', json);
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.saveItinerary = event => {
      event.preventDefault();
      console.log(event);
      this.serverRequest('http://localhost:3000/classes/itineraries', event);
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.saveItinerary}>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
          </label>

          <label>
            Location:
            <input type='text' value={this.state.location} onChange={this.handleLocationChange}></input>
          </label>

          <label>
            Number of Days:
            <input type='text' value={this.state.days} onChange={this.handleDaysChange}></input>
          </label>

          <label>
            Overview:
            <textarea type='text' value={this.state.overview} onChange={this.handleOverviewChange}></textarea>
          </label>

          <DaySubmitView />
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }

}
