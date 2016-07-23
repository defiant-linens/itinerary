// Awkward importing of dependencies
var Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    IndexRedirect = ReactRouter.IndexRedirect,
    Home = ReactRouter.Home,
    Link = ReactRouter.Link;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <IndexRedirect to="/signup" />
      <Route path='signup' component={SignupView} />
      <Route path='login' component={LoginView} />
      <Route path='itineraries' component={ItineraryView} itineraries={window.testData}/>
      <Route path='submit' component={SubmitView} />
    </Route>
  </Router>
), document.body);
