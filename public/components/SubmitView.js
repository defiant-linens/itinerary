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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1N1Ym1pdFZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7QUFFSixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxnQkFBVSxFQUZDO0FBR1gsaUJBQVcsRUFIQTtBQUlYLGVBQVMsRUFKRTtBQUtYLGVBQVMsQ0FMRTtBQU1YLGdCQUFVLEVBTkM7QUFPWCxjQUFRLEVBUEc7QUFRWCxjQUFRLEVBUkc7QUFTWCxjQUFRO0FBVEcsS0FBYjs7QUFZQSxVQUFLLGFBQUwsR0FBcUIsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QjtBQUM1QztBQUNBLFVBQUksU0FBUyxTQUFTLFNBQVQsR0FBcUIsS0FBckIsR0FBNkIsTUFBMUM7QUFDQSxZQUFNLEdBQU4sRUFBVztBQUNULGlCQUFTO0FBQ1Asb0JBQVUsa0JBREg7QUFFUCwwQkFBZ0I7QUFGVCxTQURBO0FBS1QsZ0JBQVEsTUFMQztBQU1ULGNBQU0sS0FBSyxTQUFMLENBQWUsSUFBZjtBQU5HLE9BQVgsRUFPRyxJQVBILEVBUUcsSUFSSCxDQVFRLGVBQU87QUFDWCxnQkFBUSxHQUFSLENBQVksb0NBQVo7QUFDRCxPQVZILEVBV0csS0FYSCxDQVdTLGVBQU87QUFDWixnQkFBUSxHQUFSLENBQVksR0FBWjtBQUNELE9BYkg7QUFjRCxLQWpCb0IsQ0FpQm5CLElBakJtQixPQUFyQjs7QUFtQkEsVUFBSyxhQUFMLEdBQXFCLGlCQUFTO0FBQzVCLFlBQU0sY0FBTjtBQUNBLGNBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxVQUFJLE9BQU87QUFDVCxjQUFNLE1BQUssS0FBTCxDQUFXLElBRFI7QUFFVCxrQkFBVSxNQUFLLEtBQUwsQ0FBVyxRQUZaO0FBR1QsbUJBQVcsTUFBSyxLQUFMLENBQVcsU0FIYjtBQUlULGlCQUFTLE1BQUssS0FBTCxDQUFXLE9BSlg7QUFLVCxpQkFBUyxTQUFTLE1BQUssS0FBTCxDQUFXLE9BQXBCLEVBQTZCLEVBQTdCLENBTEE7QUFNVCxrQkFBVSxNQUFLLEtBQUwsQ0FBVztBQU5aLE9BQVg7QUFRQSxZQUFLLGFBQUwsQ0FBbUIsMkNBQW5CLEVBQWdFLElBQWhFO0FBQ0QsS0FaRDs7QUFjQSxVQUFLLGlCQUFMLEdBQXlCLGlCQUFTO0FBQ2hDLGNBQVEsR0FBUixDQUFZLE1BQU0sTUFBTixDQUFhLEVBQXpCO0FBQ0EsVUFBSSxXQUFXLEVBQWY7QUFDQSxlQUFTLE1BQU0sTUFBTixDQUFhLEVBQXRCLElBQTRCLE1BQU0sTUFBTixDQUFhLEtBQXpDO0FBQ0EsWUFBSyxRQUFMLENBQWMsUUFBZDtBQUNELEtBTEQ7QUFoRGlCO0FBc0RsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLLGFBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFyQyxFQUEyQyxVQUFVLEtBQUssaUJBQTFELEVBQTZFLElBQUcsTUFBaEY7QUFGRixXQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUFyQyxFQUErQyxVQUFVLEtBQUssaUJBQTlELEVBQWlGLElBQUcsVUFBcEY7QUFGRixXQU5GO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFyQyxFQUE0QyxVQUFVLEtBQUssaUJBQTNELEVBQThFLElBQUcsV0FBakY7QUFGRixXQVhGO0FBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBRUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBSyxLQUFMLENBQVcsR0FBckMsRUFBMEMsVUFBVSxLQUFLLGlCQUF6RCxFQUE0RSxJQUFHLFNBQS9FO0FBRkYsV0FoQkY7QUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxPQUFyQyxFQUE4QyxVQUFVLEtBQUssaUJBQTdELEVBQWdGLElBQUcsU0FBbkY7QUFGRixXQXJCRjtBQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDhDQUFVLE1BQUssTUFBZixFQUFzQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQXhDLEVBQWtELFVBQVUsS0FBSyxpQkFBakUsRUFBb0YsSUFBRyxVQUF2RjtBQUZGLFdBMUJGO0FBK0JFLDhCQUFDLGFBQUQsT0EvQkY7QUFnQ0UseUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFoQ0Y7QUFERixPQURGO0FBc0NEOzs7O0VBakdzQixNQUFNLFMiLCJmaWxlIjoiU3VibWl0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN1Ym1pdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgc3RhcnREYXRlOiAnJyxcbiAgICAgIGVuZERhdGU6ICcnLFxuICAgICAgbnVtRGF5czogMCxcbiAgICAgIG92ZXJ2aWV3OiAnJyxcbiAgICAgIGV2ZW50MTogJycsXG4gICAgICBldmVudDI6ICcnLFxuICAgICAgZXZlbnQzOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSBmdW5jdGlvbiBhamF4KHVybCwgZGF0YSkge1xuICAgICAgLy8gSWYgc2Vjb25kIHBhcmFtZXRlciBpcyBlbXB0eSBmdW5jdGlvbiBwZXJmb3JtcyBhIEdFVCByZXF1ZXN0XG4gICAgICB2YXIgbWV0aG9kID0gZGF0YSA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiAnUE9TVCc7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0sIHRoaXMpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWwgY2xpZW50c2lkZSBQT1NULXJlcXVlc3QnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlSXRpbmVyYXJ5ID0gZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICB1c2VyOiB0aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uLFxuICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0aGlzLnN0YXRlLmVuZERhdGUsXG4gICAgICAgIG51bURheXM6IHBhcnNlSW50KHRoaXMuc3RhdGUubnVtRGF5cywgMTApLFxuICAgICAgICBvdmVydmlldzogdGhpcy5zdGF0ZS5vdmVydmlld1xuICAgICAgfTtcbiAgICAgIHRoaXMuc2VydmVyUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NsYXNzZXMvaXRpbmVyYXJpZXMnLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgIG5ld1N0YXRlW2V2ZW50LnRhcmdldC5pZF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zYXZlSXRpbmVyYXJ5fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cInVzZXJcIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBMb2NhdGlvbjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGlkPVwibG9jYXRpb25cIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBTdGFydCBEYXRlOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gaWQ9XCJzdGFydERhdGVcIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFbmQgRGF0ZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyB2YWx1ZT17dGhpcy5zdGF0ZS5lbmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cImVuZERhdGVcIj48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOdW1iZXIgb2YgRGF5czpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5udW1EYXlzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gaWQ9XCJudW1EYXlzXCI+PC9pbnB1dD5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgT3ZlcnZpZXc6XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUub3ZlcnZpZXd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBpZD1cIm92ZXJ2aWV3XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPERheVN1Ym1pdFZpZXcgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0Jz48L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==