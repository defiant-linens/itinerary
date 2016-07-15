class App extends React.component {

  constructor(props) {
    super(props);

    this.state = {
      itineraries: props
    };
  }

  componentDidMount() {
    this.getData('/itineraries');
  }

  ajax(url, data) {
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
      });
  }
  render() {
    return (
      <div>
        <ItineraryView itineraries={this.state.itineraries} ajax={this.ajax.bind(this)}/>
      </div>
    );
  }
}
