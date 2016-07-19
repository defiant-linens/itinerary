// Awkward importing of dependencies
var Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Home = ReactRouter.Home,
    Link = ReactRouter.Link;

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='itineraries' component={ItineraryView} itineraries={window.testData}/>
    <Route path='submit' component={SubmitView} />
    </Route>
    </Router>
), document.body);
