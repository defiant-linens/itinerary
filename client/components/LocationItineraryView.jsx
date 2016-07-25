// FIX: Hard coded the test data instead of passing in w/ props
class LocationItineraryView extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
      itineraries: []
    };

    this.postLocationItineraries = function ajax(url, data) {
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(data)
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
    }.bind(this);
  }

  componentDidMount() {
    this.serverRequest = this.postLocationItineraries('http://localhost:3000/classes/locationItineraries', {location: this.props.location});
  }

  componentWillReceiveProps(nextProps) {
    console.log('props received', nextProps.location, this.props.location);
    if (nextProps.location !== this.props.location) {
      this.setState({ location: nextProps.location });
      console.log('posting');
      this.postLocationItineraries('http://localhost:3000/classes/locationItineraries', {location: nextProps.location});
    }
  }

  render() {
    return (
      // Add search functionality here (filter itineraries)
      <div className="itineraries">
        {this.state.itineraries.map(itinerary => { 
          return (
            <div>
              <Summary data={itinerary} />
              <div className="btn btn-success">Use this Itinerary</div>
            </div>
          )})}
      </div>
    );
  }
};
