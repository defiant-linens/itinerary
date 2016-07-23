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
      return (
        // Add search functionality here (filter itineraries)
        React.createElement(
          'div',
          { className: 'itineraries' },
          this.state.itineraries.map(function (itinerary) {
            return React.createElement(Summary, { data: itinerary });
          })
        )
      );
    }
  }]);

  return ItineraryView;
}(React.Component);

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0aW5lcmFyeVZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNLGE7OztBQUVKLHlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpR0FFWCxLQUZXO0FBQ2pCOzs7QUFHQSxVQUFLLEtBQUwsR0FBYTtBQUNYLG1CQUFhO0FBREYsS0FBYjtBQUppQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBSyxhQUFMLEdBQXFCLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUI7QUFBQTs7QUFDNUM7QUFDQSxZQUFJLFNBQVMsU0FBUyxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLE1BQTFDO0FBQ0EsY0FBTSxHQUFOLEVBQVc7QUFDVCxtQkFBUztBQUNQLHNCQUFVLGtCQURIO0FBRVAsNEJBQWdCO0FBRlQsV0FEQTtBQUtULGtCQUFRLE1BTEM7QUFNVCxnQkFBTSxLQUFLLFNBQUwsQ0FBZSxJQUFmO0FBTkcsU0FBWCxFQU9HLElBUEgsRUFRRyxJQVJILENBUVEsZUFBTztBQUNYLGlCQUFPLElBQUksSUFBSixFQUFQO0FBQ0QsU0FWSCxFQVdHLElBWEgsQ0FXUSxnQkFBUTtBQUNaLGtCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxJQUFkLEVBQWQ7QUFDRCxTQWRILEVBZUcsS0FmSCxDQWVTLGVBQU87QUFDWixrQkFBUSxHQUFSLENBQVksR0FBWjtBQUNELFNBakJIO0FBa0JELE9BckJvQixDQXFCbkIsSUFyQm1CLENBcUJkLElBckJjLEVBcUJSLDJDQXJCUSxDQUFyQjtBQXNCRDs7OzZCQUNRO0FBQ1A7QUFDRTtBQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNHLGVBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsR0FBdkIsQ0FBMkI7QUFBQSxtQkFBYSxvQkFBQyxPQUFELElBQVMsTUFBTSxTQUFmLEdBQWI7QUFBQSxXQUEzQjtBQURIO0FBRkY7QUFNRDs7OztFQTFDeUIsTUFBTSxTOztBQTJDakMiLCJmaWxlIjoiSXRpbmVyYXJ5Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZJWDogSGFyZCBjb2RlZCB0aGUgdGVzdCBkYXRhIGluc3RlYWQgb2YgcGFzc2luZyBpbiB3LyBwcm9wc1xuY2xhc3MgSXRpbmVyYXJ5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAvLyBFcXVpdmFsZW50IHRvIEVTNSdzIFJlYWN0LkNvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKVxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGluZXJhcmllczogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gZnVuY3Rpb24gYWpheCh1cmwsIGRhdGEpIHtcbiAgICAgIC8vIElmIHNlY29uZCBwYXJhbWV0ZXIgaXMgZW1wdHkgZnVuY3Rpb24gcGVyZm9ybXMgYSBHRVQgcmVxdWVzdFxuICAgICAgdmFyIG1ldGhvZCA9IGRhdGEgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogJ1BPU1QnO1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9LCB0aGlzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGluZXJhcmllczoganNvbn0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGFzc2VzL2l0aW5lcmFyaWVzJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAvLyBBZGQgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgaGVyZSAoZmlsdGVyIGl0aW5lcmFyaWVzKVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGluZXJhcmllc1wiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5pdGluZXJhcmllcy5tYXAoaXRpbmVyYXJ5ID0+IDxTdW1tYXJ5IGRhdGE9e2l0aW5lcmFyeX0gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==