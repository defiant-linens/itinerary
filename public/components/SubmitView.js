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
      user: '',
      location: '',
      numDays: 0,
      overview: '',
      event1: '',
      event2: '',
      event3: ''
    };

    _this.serverRequest = function ajax(url, data) {
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
        console.log('Successful clientside POST-request');
      }).catch(function (err) {
        console.log(err);
      });
    }.bind(_this);

    _this.saveItinerary = function (event) {
      event.preventDefault();
      console.log(event);
      var data = {
        user: _this.state.user,
        location: _this.state.location,
        numDays: parseInt(_this.state.numDays, 10),
        overview: _this.state.overview
      };
      _this.serverRequest('http://localhost:3000/classes/itineraries', data);
    };

    _this.handleInputChange = function (event) {
      console.log(event.target.id);
      var newState = {};
      newState[event.target.id] = event.target.value;
      _this.setState(newState);
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
            React.createElement('input', { type: 'text', value: this.state.user, onChange: this.handleInputChange, id: 'user' })
          ),
          React.createElement(
            'label',
            null,
            'Location:',
            React.createElement('input', { type: 'text', value: this.state.location, onChange: this.handleInputChange, id: 'location' })
          ),
          React.createElement(
            'label',
            null,
            'Number of Days:',
            React.createElement('input', { type: 'text', value: this.state.numDays, onChange: this.handleInputChange, id: 'numDays' })
          ),
          React.createElement(
            'label',
            null,
            'Overview:',
            React.createElement('textarea', { type: 'text', value: this.state.overview, onChange: this.handleInputChange, id: 'overview' })
          ),
          React.createElement(DaySubmitView, null),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return SubmitView;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1N1Ym1pdFZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7QUFFSixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxnQkFBVSxFQUZDO0FBR1gsZUFBUyxDQUhFO0FBSVgsZ0JBQVUsRUFKQztBQUtYLGNBQVEsRUFMRztBQU1YLGNBQVEsRUFORztBQU9YLGNBQVE7QUFQRyxLQUFiOztBQVVBLFVBQUssYUFBTCxHQUFxQixTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCOztBQUU1QyxVQUFJLFNBQVMsU0FBUyxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLE1BQTFDO0FBQ0EsWUFBTSxHQUFOLEVBQVc7QUFDVCxpQkFBUztBQUNQLG9CQUFVLGtCQURIO0FBRVAsMEJBQWdCO0FBRlQsU0FEQTtBQUtULGdCQUFRLE1BTEM7QUFNVCxjQUFNLEtBQUssU0FBTCxDQUFlLElBQWY7QUFORyxPQUFYLEVBT0csSUFQSCxFQVFHLElBUkgsQ0FRUSxlQUFPO0FBQ1gsZ0JBQVEsR0FBUixDQUFZLG9DQUFaO0FBQ0QsT0FWSCxFQVdHLEtBWEgsQ0FXUyxlQUFPO0FBQ1osZ0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDRCxPQWJIO0FBY0QsS0FqQm9CLENBaUJuQixJQWpCbUIsT0FBckI7O0FBbUJBLFVBQUssYUFBTCxHQUFxQixpQkFBUztBQUM1QixZQUFNLGNBQU47QUFDQSxjQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsVUFBSSxPQUFPO0FBQ1QsY0FBTSxNQUFLLEtBQUwsQ0FBVyxJQURSO0FBRVQsa0JBQVUsTUFBSyxLQUFMLENBQVcsUUFGWjtBQUdULGlCQUFTLFNBQVMsTUFBSyxLQUFMLENBQVcsT0FBcEIsRUFBNkIsRUFBN0IsQ0FIQTtBQUlULGtCQUFVLE1BQUssS0FBTCxDQUFXO0FBSlosT0FBWDtBQU1BLFlBQUssYUFBTCxDQUFtQiwyQ0FBbkIsRUFBZ0UsSUFBaEU7QUFDRCxLQVZEOztBQVlBLFVBQUssaUJBQUwsR0FBeUIsaUJBQVM7QUFDaEMsY0FBUSxHQUFSLENBQVksTUFBTSxNQUFOLENBQWEsRUFBekI7QUFDQSxVQUFJLFdBQVcsRUFBZjtBQUNBLGVBQVMsTUFBTSxNQUFOLENBQWEsRUFBdEIsSUFBNEIsTUFBTSxNQUFOLENBQWEsS0FBekM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxRQUFkO0FBQ0QsS0FMRDtBQTVDaUI7QUFrRGxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUssYUFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLElBQXJDLEVBQTJDLFVBQVUsS0FBSyxpQkFBMUQsRUFBNkUsSUFBRyxNQUFoRjtBQUZGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQXJDLEVBQStDLFVBQVUsS0FBSyxpQkFBOUQsRUFBaUYsSUFBRyxVQUFwRjtBQUZGLFdBTkY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLE9BQXJDLEVBQThDLFVBQVUsS0FBSyxpQkFBN0QsRUFBZ0YsSUFBRyxTQUFuRjtBQUZGLFdBWEY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFRSw4Q0FBVSxNQUFLLE1BQWYsRUFBc0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUF4QyxFQUFrRCxVQUFVLEtBQUssaUJBQWpFLEVBQW9GLElBQUcsVUFBdkY7QUFGRixXQWhCRjtBQXFCRSw4QkFBQyxhQUFELE9BckJGO0FBc0JFLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBdEJGO0FBREYsT0FERjtBQTRCRDs7OztFQW5Gc0IsTUFBTSxTIiwiZmlsZSI6IlN1Ym1pdFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTdWJtaXRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiAnJyxcbiAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgIG51bURheXM6IDAsXG4gICAgICBvdmVydmlldzogJycsXG4gICAgICBldmVudDE6ICcnLFxuICAgICAgZXZlbnQyOiAnJyxcbiAgICAgIGV2ZW50MzogJydcbiAgICB9O1xuXG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gZnVuY3Rpb24gYWpheCh1cmwsIGRhdGEpIHtcbiAgICAgIC8vIElmIHNlY29uZCBwYXJhbWV0ZXIgaXMgZW1wdHkgZnVuY3Rpb24gcGVyZm9ybXMgYSBHRVQgcmVxdWVzdFxuICAgICAgdmFyIG1ldGhvZCA9IGRhdGEgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogJ1BPU1QnO1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9LCB0aGlzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIGNsaWVudHNpZGUgUE9TVC1yZXF1ZXN0Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2F2ZUl0aW5lcmFyeSA9IGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdXNlcjogdGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICBsb2NhdGlvbjogdGhpcy5zdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbnVtRGF5czogcGFyc2VJbnQodGhpcy5zdGF0ZS5udW1EYXlzLCAxMCksXG4gICAgICAgIG92ZXJ2aWV3OiB0aGlzLnN0YXRlLm92ZXJ2aWV3XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xhc3Nlcy9pdGluZXJhcmllcycsIGRhdGEpO1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgbmV3U3RhdGVbZXZlbnQudGFyZ2V0LmlkXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNhdmVJdGluZXJhcnl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudXNlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwidXNlclwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIExvY2F0aW9uOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLmxvY2F0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gaWQ9XCJsb2NhdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE51bWJlciBvZiBEYXlzOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLm51bURheXN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cIm51bURheXNcIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBPdmVydmlldzpcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5vdmVydmlld30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwib3ZlcnZpZXdcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8RGF5U3VibWl0VmlldyAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuIl19