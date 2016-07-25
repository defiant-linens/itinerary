var DayView = (props) => {
  return (
    <div>
      <h6>Day {props.day}</h6>

      <div>
        {props.events.map((itineraryEvent) => 
          <EventView itineraryEvent={itineraryEvent}/>
        )}
      </div>

    </div>
  );
}