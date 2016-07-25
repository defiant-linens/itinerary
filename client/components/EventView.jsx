var EventView = (props) => {
  console.log('this are the events', props.yelpEvents)
  if (props.yelpEvents.length > 0) {
    var d = props.day;
    var e = props.eventID;
    var index = 3 * (d - 1) + e;
    var event = props.yelpEvents[index];

    var renderTags = <div className="panel panel-success">
      <div className="panel-heading">
        <h5 class="panel-title"><a className="white-text" href={event.url}>{event.name}</a></h5>
      </div>
      <div className="panel-body">
        <div>
          <p><img src={event.image_url} className="thumbnail"/></p>
        </div>
        <div>
          <p><img src={event.rating_img_url}/></p>
        </div>
        <div>
          <p><strong>Address: </strong> {event.location.display_address[0]}, {event.location.display_address[1]}</p>
        </div>
        <div>
          <p><strong>Review: </strong> {event.snippet_text}</p>
        </div>
        <div>
          <p><strong>Categories: </strong>{event.categories.map(category => <span className="label label-success category-right">{category[0]}</span>)}</p>
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

