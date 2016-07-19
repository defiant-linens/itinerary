'use strict';

// Awkward importing of dependencies
var Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Home = ReactRouter.Home,
    Link = ReactRouter.Link;

ReactDOM.render(React.createElement(
    Router,
    { history: hashHistory },
    React.createElement(
        Route,
        { path: '/', component: App },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(Route, { path: 'itineraries', component: ItineraryView, itineraries: window.testData }),
        React.createElement(Route, { path: 'submit', component: SubmitView })
    )
), document.body);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBSSxTQUFTLFlBQVksTUFBekI7QUFBQSxJQUNJLGNBQWMsWUFBWSxXQUQ5QjtBQUFBLElBRUksUUFBUSxZQUFZLEtBRnhCO0FBQUEsSUFHSSxhQUFhLFlBQVksVUFIN0I7QUFBQSxJQUlJLE9BQU8sWUFBWSxJQUp2QjtBQUFBLElBS0ksT0FBTyxZQUFZLElBTHZCOztBQU9BLFNBQVMsTUFBVCxDQUNJO0FBQUMsVUFBRDtBQUFBLE1BQVEsU0FBUyxXQUFqQjtBQUNBO0FBQUMsYUFBRDtBQUFBLFVBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsR0FBM0I7QUFDQSw0QkFBQyxVQUFELElBQVksV0FBVyxJQUF2QixHQURBO0FBRUEsNEJBQUMsS0FBRCxJQUFPLE1BQUssYUFBWixFQUEwQixXQUFXLGFBQXJDLEVBQW9ELGFBQWEsT0FBTyxRQUF4RSxHQUZBO0FBR0EsNEJBQUMsS0FBRCxJQUFPLE1BQUssUUFBWixFQUFxQixXQUFXLFVBQWhDO0FBSEE7QUFEQSxDQURKLEVBUUcsU0FBUyxJQVJaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXdrd2FyZCBpbXBvcnRpbmcgb2YgZGVwZW5kZW5jaWVzXG52YXIgUm91dGVyID0gUmVhY3RSb3V0ZXIuUm91dGVyLFxuICAgIGhhc2hIaXN0b3J5ID0gUmVhY3RSb3V0ZXIuaGFzaEhpc3RvcnksXG4gICAgUm91dGUgPSBSZWFjdFJvdXRlci5Sb3V0ZSxcbiAgICBJbmRleFJvdXRlID0gUmVhY3RSb3V0ZXIuSW5kZXhSb3V0ZSxcbiAgICBIb21lID0gUmVhY3RSb3V0ZXIuSG9tZSxcbiAgICBMaW5rID0gUmVhY3RSb3V0ZXIuTGluaztcblxuUmVhY3RET00ucmVuZGVyKChcbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxuICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD0naXRpbmVyYXJpZXMnIGNvbXBvbmVudD17SXRpbmVyYXJ5Vmlld30gaXRpbmVyYXJpZXM9e3dpbmRvdy50ZXN0RGF0YX0vPlxuICAgIDxSb3V0ZSBwYXRoPSdzdWJtaXQnIGNvbXBvbmVudD17U3VibWl0Vmlld30gLz5cbiAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuYm9keSk7XG4iXX0=