var LandingView = () => (
  <div className='landing'>

    <div className='navOptions'>
      <button><Link to='/signup'>'Link Test 1'</Link></button>
      <button><Link to='/login'>'Link Test 2'</Link></button>
    </div>

    <div className="itineraries">
      <ItineraryView />
    </div>
  </div>
);