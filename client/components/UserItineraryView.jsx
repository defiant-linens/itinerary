// FIX: Hard coded the test data instead of passing in w/ props
class UserItineraryView extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
      itineraries: []
    };
  }

  componentDidMount() {
    this.serverRequest = function ajax(url, data) {
      // If second parameter is empty function performs a GET request
      var method = data === undefined ? 'GET' : 'POST';
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify({user: window.user})
      }, this)
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
          this.setState({itineraries: json});
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this)('http://localhost:3000/classes/userItineraries');
  }
  render() {
    return (
      // Add search functionality here (filter itineraries)
      <div className="itineraries">
        {this.state.itineraries.map(itinerary => <Summary data={itinerary} />)}
      </div>
    );
  }
};
