"use strict";

// FIX: Hard coded the test data instead of passing in w/ props
var ItineraryView = function ItineraryView(_ref) {
  var itineraries = _ref.itineraries;
  return React.createElement(
    "div",
    { className: "itineraries" },
    window.testData.itineraries.map(function (itinerary) {
      return React.createElement(Summary, { data: itinerary });
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0aW5lcmFyeVZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLElBQUksZ0JBQWdCLFNBQWhCLGFBQWdCO0FBQUEsTUFBRSxXQUFGLFFBQUUsV0FBRjtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVUsYUFBZjtBQUNHLFdBQU8sUUFBUCxDQUFnQixXQUFoQixDQUE0QixHQUE1QixDQUFnQztBQUFBLGFBQWEsb0JBQUMsT0FBRCxJQUFTLE1BQU0sU0FBZixHQUFiO0FBQUEsS0FBaEM7QUFESCxHQURrQjtBQUFBLENBQXBCIiwiZmlsZSI6Ikl0aW5lcmFyeVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGSVg6IEhhcmQgY29kZWQgdGhlIHRlc3QgZGF0YSBpbnN0ZWFkIG9mIHBhc3NpbmcgaW4gdy8gcHJvcHNcbnZhciBJdGluZXJhcnlWaWV3ID0gKHtpdGluZXJhcmllc30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGluZXJhcmllc1wiPlxuICAgIHt3aW5kb3cudGVzdERhdGEuaXRpbmVyYXJpZXMubWFwKGl0aW5lcmFyeSA9PiA8U3VtbWFyeSBkYXRhPXtpdGluZXJhcnl9IC8+KX1cbiAgPC9kaXY+XG4pOyJdfQ==