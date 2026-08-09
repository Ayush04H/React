import Button from "./Button";

function Controls({ curr, total, onNext, onPrevious }) {
  return (
    <div className="controls">
      <Button onClick={onPrevious}>← Previous</Button>

      <span className="counter">
        Student {curr} of {total}
      </span>

      <Button onClick={onNext}>Next →</Button>
    </div>
  );
}

export default Controls;
