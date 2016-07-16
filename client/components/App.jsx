// Awkward importing of dependencies
var Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Home = ReactRouter.Home,
    Link = ReactRouter.Link;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.itineraries);
  }

  render() {
    return (
      <div>
        <h1>Wonder Wander</h1>
        <ul>
          <li><Link to='/itineraries'>'Itineraries'</Link></li>
          <li><Link to='/submit'>'Create new itinerary'</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='itineraries' component={ItineraryView} itineraries={window.testData}/>
      <Route path='submit' component={SubmitView} />
    </Route>
  </Router>
), document.body);
