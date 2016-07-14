var ItineraryView = ({itineraries}) => (
  <div className="itineraries">
    {itineraries.map(itinerary => <Summary data={itinerary} />)}
  </div>
);
