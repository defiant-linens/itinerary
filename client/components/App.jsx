var App = props => (
  <div>
    <h1>Wonder Wander</h1>
    <ul>
      <li><Link to='/itineraries'>'Itineraries'</Link></li>
      <li><Link to='/submit'>'Create new itinerary'</Link></li>
      <li><Link to='/login'>'Login'</Link></li>
    </ul>
    {props.children}
  </div>
);

