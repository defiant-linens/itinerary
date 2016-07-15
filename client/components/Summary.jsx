var Summary = ({data}) => (
  <div className="summary">
    <img src={data.img} />
    <h2>{data.location}</h2>
    <p>{data.summary}</p>
  </div>
);
