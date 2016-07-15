"use strict";

var ItineraryView = function ItineraryView(_ref) {
  var itineraries = _ref.itineraries;
  return React.createElement(
    "div",
    { className: "itineraries" },
    itineraries.map(function (itinerary) {
      return React.createElement(Summary, { data: itinerary });
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0aW5lcmFyeVZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0I7QUFBQSxNQUFFLFdBQUYsUUFBRSxXQUFGO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0csZ0JBQVksR0FBWixDQUFnQjtBQUFBLGFBQWEsb0JBQUMsT0FBRCxJQUFTLE1BQU0sU0FBZixHQUFiO0FBQUEsS0FBaEI7QUFESCxHQURrQjtBQUFBLENBQXBCIiwiZmlsZSI6Ikl0aW5lcmFyeVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRpbmVyYXJ5VmlldyA9ICh7aXRpbmVyYXJpZXN9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRpbmVyYXJpZXNcIj5cbiAgICB7aXRpbmVyYXJpZXMubWFwKGl0aW5lcmFyeSA9PiA8U3VtbWFyeSBkYXRhPXtpdGluZXJhcnl9IC8+KX1cbiAgPC9kaXY+XG4pO1xuIl19