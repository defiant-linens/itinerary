// FIX: Hard coded the test data instead of passing in w/ props
var ItineraryView = ({itineraries}) => (
  <div className="itineraries">
    {window.testData.itineraries.map(itinerary => <Summary data={itinerary} />)}
  </div>
);