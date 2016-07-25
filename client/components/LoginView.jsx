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
          window.user = this.state.username;
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
      <div className="container">
        <form className="form-login" onSubmit={this.submitLogin}>
          <h2>Login</h2>
          <input id="username" className="form-control" type="text" onChange={this.handleInputChange} placeholder="Username"/>
          <input id="password" className="form-control" type="password" onChange={this.handleInputChange} placeholder="Password"/>
          <button className="btn btn-success btn-block" type="submit" value="Save">Login</button>
        </form>
      </div>
    );
  };
}
