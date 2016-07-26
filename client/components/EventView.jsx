var EventView = (props) => {

  if (props.events.length > 0) {

    // The day (d) is index 1, event (e) is index 0
    var d = props.day;
    var e = props.eventID;
    var index = 3 * (d - 1) + e;
    var event = props.events[index];
    var categoryArray = event.categories.split(', ');

    var renderTags = <div className="panel panel-success">
      <div className="panel-heading">
        <h5 class="panel-title"><a className="white-text" href={event.url}>{event.name}</a></h5>
      </div>
      <div className="panel-body">
        <div>
          <p><img src={event.image} className="thumbnail"/></p>
        </div>
        <div>
          <p><img src={event.rating}/></p>
        </div>
        <div>
          <p><strong>Address: </strong> {event.address}</p>
        </div>
        <div>
          <p><strong>Review: </strong> {event.snippet}</p>
        </div>
        <div>
          <p><strong>Categories: </strong>{categoryArray.map(category => <span className="label label-success category-right">{category}</span>)}</p>
        </div>
      </div>
    </div>;

  } else {
    var renderTags = null;
  }

  return (
    <div>
      {renderTags}
    </div>
  );
}

