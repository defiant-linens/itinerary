class ExpandedItineraryView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      expand: false
    };

    this.serverRequest = function ajax(url, data, callback) {
      // If second parameter is empty function performs a GET request
      console.log('serverRequest');
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
          console.log(json);

          callback(json);

          return json;
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.saveItinerary = (event, itinerary) => {
      window.fromItinId = itinerary.id;
      this.props.saveItinerary(event);
    };

    this.toggleExpand = () => {
      this.setState({expand: !this.state.expand})
    }
  }

  componentWillMount() {
    var getEvents = () => {
      console.log('itinerary', this.props.itinerary);
      this.serverRequest(
        '/classes/itineraryEvents',
        {id: this.props.itinerary.id},
        function(data) {
          console.log()
          var newState = {
            events: data
          };
          that.setState(newState);
          console.log(that.state.events);
        }
      );
    };

    var that = this;
    // Get itinerary 
    // this.serverRequest(
    //   'http://localhost:3000/classes/itinerary', 
    //   {id: window.newItinerary},
    //   function(data) {
    //     console.log(data);
    //     var newState = {
    //       location: data.location,
    //       numDays: data.numDays
    //     };
    //     that.setState(newState);
    //     getEvents();
    //   }
    // );

    getEvents();
  }

  render() {
    return (
      <div>
        <Summary data={this.props.itinerary} />
        {
          this.props.usable ?
          <div className="btn btn-success" onClick={(event) => this.saveItinerary(event, this.props.itinerary)}>Use this Itinerary</div>
          : null
        }

        { this.props.usable ? <span>&nbsp;</span> : null }
        
        <div className="btn btn-success" onClick={this.toggleExpand}>Expand View</div>

        {
          this.state.expand ?
          <div>
            {_.range(1, this.props.itinerary.numDays + 1).map((day) => {
                return (<DayView day={day} events={this.state.events}/>);
              }
            )}
          </div>
          : null
        }

      </div>

    )
  }

}
