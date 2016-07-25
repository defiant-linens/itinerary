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
      <IndexRedirect to="/landing" />
      <Route path='signup' component={SignupView} />
      <Route path='login' component={LoginView} />
      <Route path='landing' component={LandingView} />
      <Route path='choose-planner' component={ChoosePlannerView} />
      <Route path='planner' component={PlannerView} />
      <Route path='itineraries' component={ItineraryView} />
      <Route path='user-itineraries' component={UserItineraryView} />
    </Route>
  </Router>
), document.body);
