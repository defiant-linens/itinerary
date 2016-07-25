var DayView = (props) => {
  return (
    <div>
      <h6>Day {props.day}</h6>

      <div>
        {_.range(0, 3).map((eventID) => 
          <EventView eventID={eventID} events={props.events} day={props.day}/>
        )}
      </div>

    </div>
  );
}