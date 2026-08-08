import Button from "./Button";

function Controls({ setcurr, curr, initialStudents }) {
  function handlenext() {
    setcurr((s) => (initialStudents.length > s ? s + 1 : s));
  }
  function handleprevious() {
    setcurr((s) => (s > 1 ? s - 1 : s));
  }
  function handlereset() {
    setcurr((s) => 1);
  }
  return (
    <div className="controls">
      <Button onClick={handleprevious}>Previous</Button>
      <Button onClick={handlereset}>Reset</Button>
      <Button onClick={handlenext}>Next</Button>
    </div>
  );
}
export default Controls;
