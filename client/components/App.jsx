var App = props => (
  <div>
    <h1>Wonder Wander</h1>
    <ul>
      <li><Link to='/submit'>'Create new itinerary'</Link></li>
      <li><Link to='/login'>'Login'</Link></li>
      <li><Link to='/signup'>'Sign up'</Link></li>
      <li><Link to='/landing'>'Landing'</Link></li>
    </ul>
    {props.children}
  </div>
);

