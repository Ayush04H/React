function TripCard({ data }) {
  return (
    <div className="card">
      <TripImage image={data.image} alt={data.destination} />
      <TripInfo data={data} />
    </div>
  );
}

function TripImage({ image, alt }) {
  return <img className="image" src={image} alt={alt}></img>;
}
function TripInfo({ data }) {
  return (
    <div className="info">
      <h2>{data.destination}</h2>
    </div>
  );
}
export default TripCard;
