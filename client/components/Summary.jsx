var Summary = ({data}) => {
  // Note that the image in return is hardcoded for now
  return (
    <div className="summary">
      <img src="http://sites.msdwt.k12.in.us/jfeeney/wp-content/uploads/sites/15/2014/07/worldwide-travel-nurse-advantages.jpg" />
      <h2>{data.location + ' by ' + data.User.name}</h2>
    </div>
  );
};
