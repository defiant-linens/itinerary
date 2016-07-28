// Awkward importing of dependencies
var Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    IndexRedirect = ReactRouter.IndexRedirect,
    Home = ReactRouter.Home,
    Link = ReactRouter.Link;

var requireAuth = function() {
  if (!window.user) {
    window.location.hash='login';
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <IndexRedirect to="/landing" />
      <Route path='signup' component={SignupView} />
      <Route path='login' component={LoginView} />
      <Route path='landing' component={LandingView} />
      <Route path='choose-planner' component={ChoosePlannerView} onEnter={requireAuth} />
      <Route path='itineraries' component={ItineraryView} onEnter={requireAuth} />
      <Route path='user-itineraries' component={UserItineraryView} onEnter={requireAuth} />
    </Route>
  </Router>
), document.body);
