var App = props => (
  <div className='container'>
    <div className='header'>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/landing' className='navbar-brand logo'>Wonder Wander <i className='fa fa-paper-plane-o' aria-hidden='true'></i></Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  </div>
);