var DayView = (props) => {
  return (
    <div>
      <h6>Day {props.day}</h6>

      <div>
        {_.range(0, 3).map((eventID) => 
          <EventView eventID={eventID} yelpEvents={props.yelpEvents} day={props.day}/>
        )}
      </div>

    </div>
  );
}