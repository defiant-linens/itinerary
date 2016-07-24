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
      startDate: '',
      endDate: '',
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
        startDate: _this.state.startDate,
        endDate: _this.state.endDate,
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
            'Start Date:',
            React.createElement('input', { type: 'date', value: this.state.start, onChange: this.handleInputChange, id: 'startDate' })
          ),
          React.createElement(
            'label',
            null,
            'End Date:',
            React.createElement('input', { type: 'date', value: this.state.end, onChange: this.handleInputChange, id: 'endDate' })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1N1Ym1pdFZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7QUFFSixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxnQkFBVSxFQUZDO0FBR1gsaUJBQVcsRUFIQTtBQUlYLGVBQVMsRUFKRTtBQUtYLGVBQVMsQ0FMRTtBQU1YLGdCQUFVLEVBTkM7QUFPWCxjQUFRLEVBUEc7QUFRWCxjQUFRLEVBUkc7QUFTWCxjQUFRO0FBVEcsS0FBYjs7QUFZQSxVQUFLLGFBQUwsR0FBcUIsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5Qjs7QUFFNUMsVUFBSSxTQUFTLFNBQVMsU0FBVCxHQUFxQixLQUFyQixHQUE2QixNQUExQztBQUNBLFlBQU0sR0FBTixFQUFXO0FBQ1QsaUJBQVM7QUFDUCxvQkFBVSxrQkFESDtBQUVQLDBCQUFnQjtBQUZULFNBREE7QUFLVCxnQkFBUSxNQUxDO0FBTVQsY0FBTSxLQUFLLFNBQUwsQ0FBZSxJQUFmO0FBTkcsT0FBWCxFQU9HLElBUEgsRUFRRyxJQVJILENBUVEsZUFBTztBQUNYLGdCQUFRLEdBQVIsQ0FBWSxvQ0FBWjtBQUNELE9BVkgsRUFXRyxLQVhILENBV1MsZUFBTztBQUNaLGdCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0QsT0FiSDtBQWNELEtBakJvQixDQWlCbkIsSUFqQm1CLE9BQXJCOztBQW1CQSxVQUFLLGFBQUwsR0FBcUIsaUJBQVM7QUFDNUIsWUFBTSxjQUFOO0FBQ0EsY0FBUSxHQUFSLENBQVksS0FBWjtBQUNBLFVBQUksT0FBTztBQUNULGNBQU0sTUFBSyxLQUFMLENBQVcsSUFEUjtBQUVULGtCQUFVLE1BQUssS0FBTCxDQUFXLFFBRlo7QUFHVCxtQkFBVyxNQUFLLEtBQUwsQ0FBVyxTQUhiO0FBSVQsaUJBQVMsTUFBSyxLQUFMLENBQVcsT0FKWDtBQUtULGlCQUFTLFNBQVMsTUFBSyxLQUFMLENBQVcsT0FBcEIsRUFBNkIsRUFBN0IsQ0FMQTtBQU1ULGtCQUFVLE1BQUssS0FBTCxDQUFXO0FBTlosT0FBWDtBQVFBLFlBQUssYUFBTCxDQUFtQiwyQ0FBbkIsRUFBZ0UsSUFBaEU7QUFDRCxLQVpEOztBQWNBLFVBQUssaUJBQUwsR0FBeUIsaUJBQVM7QUFDaEMsY0FBUSxHQUFSLENBQVksTUFBTSxNQUFOLENBQWEsRUFBekI7QUFDQSxVQUFJLFdBQVcsRUFBZjtBQUNBLGVBQVMsTUFBTSxNQUFOLENBQWEsRUFBdEIsSUFBNEIsTUFBTSxNQUFOLENBQWEsS0FBekM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxRQUFkO0FBQ0QsS0FMRDtBQWhEaUI7QUFzRGxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUssYUFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLElBQXJDLEVBQTJDLFVBQVUsS0FBSyxpQkFBMUQsRUFBNkUsSUFBRyxNQUFoRjtBQUZGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQXJDLEVBQStDLFVBQVUsS0FBSyxpQkFBOUQsRUFBaUYsSUFBRyxVQUFwRjtBQUZGLFdBTkY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLEtBQXJDLEVBQTRDLFVBQVUsS0FBSyxpQkFBM0QsRUFBOEUsSUFBRyxXQUFqRjtBQUZGLFdBWEY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxHQUFyQyxFQUEwQyxVQUFVLEtBQUssaUJBQXpELEVBQTRFLElBQUcsU0FBL0U7QUFGRixXQWhCRjtBQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLE9BQXJDLEVBQThDLFVBQVUsS0FBSyxpQkFBN0QsRUFBZ0YsSUFBRyxTQUFuRjtBQUZGLFdBckJGO0FBMEJFO0FBQUE7QUFBQTtBQUFBO0FBRUUsOENBQVUsTUFBSyxNQUFmLEVBQXNCLE9BQU8sS0FBSyxLQUFMLENBQVcsUUFBeEMsRUFBa0QsVUFBVSxLQUFLLGlCQUFqRSxFQUFvRixJQUFHLFVBQXZGO0FBRkYsV0ExQkY7QUErQkUsOEJBQUMsYUFBRCxPQS9CRjtBQWdDRSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQWhDRjtBQURGLE9BREY7QUFzQ0Q7Ozs7RUFqR3NCLE1BQU0sUyIsImZpbGUiOiJTdWJtaXRWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3VibWl0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogJycsXG4gICAgICBsb2NhdGlvbjogJycsXG4gICAgICBzdGFydERhdGU6ICcnLFxuICAgICAgZW5kRGF0ZTogJycsXG4gICAgICBudW1EYXlzOiAwLFxuICAgICAgb3ZlcnZpZXc6ICcnLFxuICAgICAgZXZlbnQxOiAnJyxcbiAgICAgIGV2ZW50MjogJycsXG4gICAgICBldmVudDM6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuc2VydmVyUmVxdWVzdCA9IGZ1bmN0aW9uIGFqYXgodXJsLCBkYXRhKSB7XG4gICAgICAvLyBJZiBzZWNvbmQgcGFyYW1ldGVyIGlzIGVtcHR5IGZ1bmN0aW9uIHBlcmZvcm1zIGEgR0VUIHJlcXVlc3RcbiAgICAgIHZhciBtZXRob2QgPSBkYXRhID09PSB1bmRlZmluZWQgPyAnR0VUJyA6ICdQT1NUJztcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgfSwgdGhpcylcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBjbGllbnRzaWRlIFBPU1QtcmVxdWVzdCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNhdmVJdGluZXJhcnkgPSBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIHVzZXI6IHRoaXMuc3RhdGUudXNlcixcbiAgICAgICAgbG9jYXRpb246IHRoaXMuc3RhdGUubG9jYXRpb24sXG4gICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRoaXMuc3RhdGUuZW5kRGF0ZSxcbiAgICAgICAgbnVtRGF5czogcGFyc2VJbnQodGhpcy5zdGF0ZS5udW1EYXlzLCAxMCksXG4gICAgICAgIG92ZXJ2aWV3OiB0aGlzLnN0YXRlLm92ZXJ2aWV3XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xhc3Nlcy9pdGluZXJhcmllcycsIGRhdGEpO1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgbmV3U3RhdGVbZXZlbnQudGFyZ2V0LmlkXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNhdmVJdGluZXJhcnl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudXNlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwidXNlclwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIExvY2F0aW9uOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLmxvY2F0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gaWQ9XCJsb2NhdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFN0YXJ0IERhdGU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cInN0YXJ0RGF0ZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEVuZCBEYXRlOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIHZhbHVlPXt0aGlzLnN0YXRlLmVuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwiZW5kRGF0ZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE51bWJlciBvZiBEYXlzOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLm51bURheXN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cIm51bURheXNcIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBPdmVydmlldzpcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5vdmVydmlld30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwib3ZlcnZpZXdcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8RGF5U3VibWl0VmlldyAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuIl19