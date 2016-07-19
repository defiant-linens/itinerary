'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitView = function (_React$Component) {
  _inherits(SubmitView, _React$Component);

  function SubmitView(props) {
    _classCallCheck(this, SubmitView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitView).call(this, props));

    _this.state = {
      name: '',
      location: '',
      days: 0,
      overview: '',
      event1: '',
      event2: '',
      event3: ''
    };

    _this.serverRequest = function ajax(url, data) {
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
        _this2.setState('itineraries', json);
      }).catch(function (err) {
        console.log(err);
      });
    }.bind(_this);

    _this.saveItinerary = function (event) {
      event.preventDefault();
      console.log(event);
      _this.serverRequest('http://localhost:3000/classes/itineraries', event);
    };
    return _this;
  }

  _createClass(SubmitView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.saveItinerary },
          React.createElement(
            'label',
            null,
            'Name:',
            React.createElement('input', { type: 'text', value: this.state.name, onChange: this.handleNameChange })
          ),
          React.createElement(
            'label',
            null,
            'Location:',
            React.createElement('input', { type: 'text', value: this.state.location, onChange: this.handleLocationChange })
          ),
          React.createElement(
            'label',
            null,
            'Number of Days:',
            React.createElement('input', { type: 'text', value: this.state.days, onChange: this.handleDaysChange })
          ),
          React.createElement(
            'label',
            null,
            'Overview:',
            React.createElement('textarea', { type: 'text', value: this.state.overview, onChange: this.handleOverviewChange })
          ),
          React.createElement(DaySubmitView, null),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return SubmitView;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1N1Ym1pdFZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7QUFFSixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxnQkFBVSxFQUZDO0FBR1gsWUFBTSxDQUhLO0FBSVgsZ0JBQVUsRUFKQztBQUtYLGNBQVEsRUFMRztBQU1YLGNBQVEsRUFORztBQU9YLGNBQVE7QUFQRyxLQUFiOztBQVVBLFVBQUssYUFBTCxHQUFxQixTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCO0FBQUE7OztBQUU1QyxVQUFJLFNBQVMsU0FBUyxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLE1BQTFDO0FBQ0EsWUFBTSxHQUFOLEVBQVc7QUFDVCxpQkFBUztBQUNQLG9CQUFVLGtCQURIO0FBRVAsMEJBQWdCO0FBRlQsU0FEQTtBQUtULGdCQUFRLE1BTEM7QUFNVCxjQUFNLEtBQUssU0FBTCxDQUFlLElBQWY7QUFORyxPQUFYLEVBT0csSUFQSCxFQVFHLElBUkgsQ0FRUSxlQUFPO0FBQ1gsZUFBTyxJQUFJLElBQUosRUFBUDtBQUNELE9BVkgsRUFXRyxJQVhILENBV1EsZ0JBQVE7QUFDWixnQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBLGVBQUssUUFBTCxDQUFjLGFBQWQsRUFBNkIsSUFBN0I7QUFDRCxPQWRILEVBZUcsS0FmSCxDQWVTLGVBQU87QUFDWixnQkFBUSxHQUFSLENBQVksR0FBWjtBQUNELE9BakJIO0FBa0JELEtBckJvQixDQXFCbkIsSUFyQm1CLE9BQXJCOztBQXVCQSxVQUFLLGFBQUwsR0FBcUIsaUJBQVM7QUFDNUIsWUFBTSxjQUFOO0FBQ0EsY0FBUSxHQUFSLENBQVksS0FBWjtBQUNBLFlBQUssYUFBTCxDQUFtQiwyQ0FBbkIsRUFBZ0UsS0FBaEU7QUFDRCxLQUpEO0FBcENpQjtBQXlDbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBSyxhQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBckMsRUFBMkMsVUFBVSxLQUFLLGdCQUExRDtBQUZGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQXJDLEVBQStDLFVBQVUsS0FBSyxvQkFBOUQ7QUFGRixXQU5GO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFyQyxFQUEyQyxVQUFVLEtBQUssZ0JBQTFEO0FBRkYsV0FYRjtBQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDhDQUFVLE1BQUssTUFBZixFQUFzQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQXhDLEVBQWtELFVBQVUsS0FBSyxvQkFBakU7QUFGRixXQWhCRjtBQXFCRSw4QkFBQyxhQUFELE9BckJGO0FBc0JFLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBdEJGO0FBREYsT0FERjtBQTRCRDs7OztFQTFFc0IsTUFBTSxTIiwiZmlsZSI6IlN1Ym1pdFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTdWJtaXRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgIGRheXM6IDAsXG4gICAgICBvdmVydmlldzogJycsXG4gICAgICBldmVudDE6ICcnLFxuICAgICAgZXZlbnQyOiAnJyxcbiAgICAgIGV2ZW50MzogJydcbiAgICB9O1xuXG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gZnVuY3Rpb24gYWpheCh1cmwsIGRhdGEpIHtcbiAgICAgIC8vIElmIHNlY29uZCBwYXJhbWV0ZXIgaXMgZW1wdHkgZnVuY3Rpb24gcGVyZm9ybXMgYSBHRVQgcmVxdWVzdFxuICAgICAgdmFyIG1ldGhvZCA9IGRhdGEgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogJ1BPU1QnO1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9LCB0aGlzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCdpdGluZXJhcmllcycsIGpzb24pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNhdmVJdGluZXJhcnkgPSBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xhc3Nlcy9pdGluZXJhcmllcycsIGV2ZW50KTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zYXZlSXRpbmVyYXJ5fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIExvY2F0aW9uOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLmxvY2F0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTnVtYmVyIG9mIERheXM6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUuZGF5c30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGF5c0NoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgT3ZlcnZpZXc6XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUub3ZlcnZpZXd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU92ZXJ2aWV3Q2hhbmdlfT48L3RleHRhcmVhPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8RGF5U3VibWl0VmlldyAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuIl19