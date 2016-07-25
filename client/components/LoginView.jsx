class LoginView extends React.Component {

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
          console.log('Successful clientside POST-request', res);
          if(url === 'http://localhost:3000/classes/login' && res.status === 201) {
            window.user = this.state.username;
            console.log('redirecting');
            window.location.hash = 'landing';
          }
        })
        .catch(err => {
          console.log(err);
        });
    }.bind(this);

    this.handleInputChange = event => {
      console.log(event.target.id);
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
      this.serverRequest('http://localhost:3000/classes/login', data);
    };

    this.logout = event => {
      console.log('logging out');
      this.serverRequest('http://localhost:3000/classes/logout');
    }

  }

  render() {
    return (
      <div>
        Log in
        <form onSubmit={this.submitLogin}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" onChange={this.handleInputChange} />
          <label htmlFor="password">Password:</label>
          <input id="password" type="text" onChange={this.handleInputChange} />
          <input type="submit" value="Save" />
        </form>
        <p onClick={this.logout}>Logout</p>
      </div>
    );
  };
}
