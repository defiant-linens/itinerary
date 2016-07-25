class SignupView extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.serverRequest = function ajax(url, data) {
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
      }, this)
        .then(res => {
          console.log('Successful clientside POST-request');
          if (res.status === 201) {
            console.log('redirecting');
            window.location.hash = 'landing';
          }
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.handleInputChange = event => {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    };

    this.submitLogin = event => {
      event.preventDefault();
      console.log(event);
      var data = {
        username: this.state.username,
        password: this.state.password
      };
      this.serverRequest('http://localhost:3000/classes/signup', data);
    };

  }

  render() {
    return (
      <div>
        Sign up
        <form onSubmit={this.submitLogin}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" onChange={this.handleInputChange} />
          <label htmlFor="password">Password:</label>
          <input id="password" type="text" onChange={this.handleInputChange} />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  };
}
