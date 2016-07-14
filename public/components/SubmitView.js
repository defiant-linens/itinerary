'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitView = function (_React$Component) {
  _inherits(SubmitView, _React$Component);

  function SubmitView() {
    _classCallCheck(this, SubmitView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitView).apply(this, arguments));
  }

  _createClass(SubmitView, [{
    key: 'render',


    // onSubmit(e) {
    //   console.log(e);
    // }

    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            'Name:',
            React.createElement('input', { type: 'text' })
          ),
          React.createElement(
            'label',
            null,
            'Location:',
            React.createElement('input', { type: 'text' })
          ),
          React.createElement(
            'label',
            null,
            'Number of Days:',
            React.createElement('input', { type: 'text' })
          ),
          React.createElement(
            'label',
            null,
            'Overview:',
            React.createElement('textarea', { type: 'text' })
          ),
          React.createElement(DaySubmitView, null),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return SubmitView;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1N1Ym1pdFZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFNSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVo7QUFGRixXQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVo7QUFGRixXQU5GO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFFRSwyQ0FBTyxNQUFLLE1BQVo7QUFGRixXQVhGO0FBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBRUUsOENBQVUsTUFBSyxNQUFmO0FBRkYsV0FoQkY7QUFxQkUsOEJBQUMsYUFBRCxPQXJCRjtBQXVCRSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQXZCRjtBQURGLE9BREY7QUE2QkQ7Ozs7RUFwQ3NCLE1BQU0sUyIsImZpbGUiOiJTdWJtaXRWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3VibWl0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gb25TdWJtaXQoZSkge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpO1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBMb2NhdGlvbjogIFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE51bWJlciBvZiBEYXlzOiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBPdmVydmlldzogXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCc+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPERheVN1Ym1pdFZpZXcgLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdfQ==