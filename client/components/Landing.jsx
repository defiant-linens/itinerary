var LandingView = () => (
  <div className='landing'>

    <div className='navOptions'>
      <button><Link to='/choose-planner'>'Create Itinerary'</Link></button>
      <button><Link to='/itineraries'>'View My Itineraries'</Link></button>
    </div>

    <div className="itineraries">
      <ItineraryView />
    </div>
  </div>
);