let PlannerView = (props) => {
  if (props.events.length > 0) {
    return (
      <div>
        <div>
          <h4>Your trip to {props.location}.</h4>
          <button className="btn btn-success" onClick={props.saveItinerary}>Save Itinerary</button>
        </div>
        <div>
          <select onChange={props.handleChange} id="selected">
            {props.yelpEvents.map(event => {
               return <option>{event.name}</option>;
             })}
          </select>
          <select onChange={props.handleChange} id="day">
            {_.range(1, props.numDays + 1).map(day => {
               return <option>{day}</option>;
             })}
          </select>
          <select onChange={props.handleChange} id="slot">
            {_.range(1, 4).map(slot => {
               return <option>{slot}</option>;
             })}
          </select>

          <button onClick={props.swap}>Swap</button>
        </div>        
        <div>
          {_.range(1, props.numDays + 1).map((day) => {
            return (<DayView day={day} events={props.events}/>);
          })}
        </div>
      </div>
    );
  } else {
    return (
      <h1> Create an Itinerary </h1>
    )
  }
}
