var Summary = ({data}) => {

  var summary = data.overview;
  if (data.overview.length > 75) {
    summary = data.overview.substring(0, 76) + '...';
  }
  console.log('this is data:', data);

  // Note that the image in return is hardcoded for now
  return (
    <div className="summary">
      <img src="http://sites.msdwt.k12.in.us/jfeeney/wp-content/uploads/sites/15/2014/07/worldwide-travel-nurse-advantages.jpg" />
      <h2>{data.location + ' by ' + data.User.name}</h2>
      <p>{summary}</p>
    </div>
  );

};
