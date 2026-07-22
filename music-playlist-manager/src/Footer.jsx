function Footer({ playlists }) {
  const total = playlists.length;
  const liked = playlists.filter((playlist) => playlist.liked).length;
  const downloaded = playlists.filter((playlist) => playlist.downloaded).length;
  return (
    <div className="footer">
      <div>Total : {total}</div>
      <div>💖: {liked}</div>
      <div>⬇️: {downloaded}</div>
    </div>
  );
}
export default Footer;
