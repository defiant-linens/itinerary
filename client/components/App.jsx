var App = props => (
  <nav>
    <div className='nav-wrapper'>
      <div className='row blue lighten-2 z-depth-1'>
        <div className='col s4'>
          <a className='logo'><Link to='/landing'>Wonder Wander <i className='fa fa-paper-plane-o' aria-hidden='true'></i></Link></a>
        </div>
        <div className='col s8'>
          <div className='right'>
            <ul>
              <li><Link to='/itineraries'>Itineraries</Link></li>
              <li><Link to='/submit'>Create new itinerary</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
            </ul>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </nav>
);
