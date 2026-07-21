import StarRating from "./StartRating";

function PlaylistCard({ playlists, step }) {
  const data = playlists[step];
  return (
    <div className="card">
      <Image src={data.cover} alt={data.name} />
      <PlaylistInfo data={data} />
    </div>
  );
}
function Image({ src, alt }) {
  return <img src={src} alt={alt} className="cover"></img>;
}
function PlaylistInfo({ data }) {
  return (
    <div className="info">
      <h2>{data.name}</h2>
      <p>Creator : {data.creator}</p>
      <p>
        <div>Songs : {data.songs}</div>
        <div>Hours Played : {data.duration}</div>
        <StarRating maxRating={5} defaultRating={data.userRating} />
        <StatusBadges duration={data.duration} />
      </p>
    </div>
  );
}
function StatusBadges({ duration }) {
  function durationstatus(duration) {
    if (duration >= 200) {
      return "🔴 Long";
    } else if (duration >= 100) {
      return "🟡 Medium";
    } else {
      return "🟢 Short";
    }
  }
  return <div className="badge">{durationstatus(duration)}</div>;
}
export default PlaylistCard;
