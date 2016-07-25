'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIX: Hard coded the test data instead of passing in w/ props

var ItineraryView = function (_React$Component) {
  _inherits(ItineraryView, _React$Component);

  function ItineraryView(props) {
    _classCallCheck(this, ItineraryView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItineraryView).call(this, props));
    // Equivalent to ES5's React.Component.call(this, props)


    _this.state = {
      itineraries: []
    };
    return _this;
  }

  _createClass(ItineraryView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.serverRequest = function ajax(url, data) {
        var _this2 = this;

        // If second parameter is empty function performs a GET request
        var method = data === undefined ? 'GET' : 'POST';
        fetch(url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin',
          method: method,
          body: JSON.stringify(data)
        }, this).then(function (res) {
          return res.json();
        }).then(function (json) {
          console.log(json);
          _this2.setState({ itineraries: json });
        }).catch(function (err) {
          console.log(err);
        });
      }.bind(this)('http://localhost:3000/classes/itineraries');
    }
  }, {
    key: 'render',
    value: function render() {
      return(
        // Add search functionality here (filter itineraries)
        React.createElement(
          'div',
          { className: 'itineraries' },
          this.state.itineraries.map(function (itinerary) {
            return React.createElement(ExpandedItineraryView, { itinerary: itinerary, usable: false });
          })
        )
      );
    }
  }]);

  return ItineraryView;
}(React.Component);

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0aW5lcmFyeVZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNNLGE7OztBQUVKLHlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpR0FFWCxLQUZXOzs7O0FBSWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsbUJBQWE7QUFERixLQUFiO0FBSmlCO0FBT2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLLGFBQUwsR0FBcUIsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QjtBQUFBOzs7QUFFNUMsWUFBSSxTQUFTLFNBQVMsU0FBVCxHQUFxQixLQUFyQixHQUE2QixNQUExQztBQUNBLGNBQU0sR0FBTixFQUFXO0FBQ1QsbUJBQVM7QUFDUCxzQkFBVSxrQkFESDtBQUVQLDRCQUFnQjtBQUZULFdBREE7QUFLVCx1QkFBYSxhQUxKO0FBTVQsa0JBQVEsTUFOQztBQU9ULGdCQUFNLEtBQUssU0FBTCxDQUFlLElBQWY7QUFQRyxTQUFYLEVBUUcsSUFSSCxFQVNHLElBVEgsQ0FTUSxlQUFPO0FBQ1gsaUJBQU8sSUFBSSxJQUFKLEVBQVA7QUFDRCxTQVhILEVBWUcsSUFaSCxDQVlRLGdCQUFRO0FBQ1osa0JBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxpQkFBSyxRQUFMLENBQWMsRUFBQyxhQUFhLElBQWQsRUFBZDtBQUNELFNBZkgsRUFnQkcsS0FoQkgsQ0FnQlMsZUFBTztBQUNaLGtCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0QsU0FsQkg7QUFtQkQsT0F0Qm9CLENBc0JuQixJQXRCbUIsQ0FzQmQsSUF0QmMsRUFzQlIsMkNBdEJRLENBQXJCO0FBdUJEOzs7NkJBQ1E7QUFDUCxZOztBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNHLGVBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsR0FBdkIsQ0FBMkI7QUFBQSxtQkFBYSxvQkFBQyxxQkFBRCxJQUF1QixXQUFXLFNBQWxDLEVBQTZDLFFBQVEsS0FBckQsR0FBYjtBQUFBLFdBQTNCO0FBREg7QUFGRjtBQU1EOzs7O0VBM0N5QixNQUFNLFM7O0FBNENqQyIsImZpbGUiOiJJdGluZXJhcnlWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRklYOiBIYXJkIGNvZGVkIHRoZSB0ZXN0IGRhdGEgaW5zdGVhZCBvZiBwYXNzaW5nIGluIHcvIHByb3BzXG5jbGFzcyBJdGluZXJhcnlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIC8vIEVxdWl2YWxlbnQgdG8gRVM1J3MgUmVhY3QuQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpXG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0aW5lcmFyaWVzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSBmdW5jdGlvbiBhamF4KHVybCwgZGF0YSkge1xuICAgICAgLy8gSWYgc2Vjb25kIHBhcmFtZXRlciBpcyBlbXB0eSBmdW5jdGlvbiBwZXJmb3JtcyBhIEdFVCByZXF1ZXN0XG4gICAgICB2YXIgbWV0aG9kID0gZGF0YSA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiAnUE9TVCc7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9LCB0aGlzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGluZXJhcmllczoganNvbn0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGFzc2VzL2l0aW5lcmFyaWVzJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAvLyBBZGQgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgaGVyZSAoZmlsdGVyIGl0aW5lcmFyaWVzKVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGluZXJhcmllc1wiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5pdGluZXJhcmllcy5tYXAoaXRpbmVyYXJ5ID0+IDxFeHBhbmRlZEl0aW5lcmFyeVZpZXcgaXRpbmVyYXJ5PXtpdGluZXJhcnl9IHVzYWJsZT17ZmFsc2V9Lz4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==