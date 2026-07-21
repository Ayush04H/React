import Button from "./Button";
function Controls({ playlists, setstep }) {
  function handleNext() {
    setstep((s) => (playlists.length - 1 > s ? s + 1 : s));
  }
  function handlePrevious() {
    setstep((s) => (s > 0 ? s - 1 : s));
  }
  function handleReset() {
    setstep(0);
  }
  return (
    <div className="controls">
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}
export default Controls;
