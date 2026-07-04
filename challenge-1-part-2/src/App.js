import "./App.css";

function App() {
  const moods = ["😴 Sleep Time", "😊 Feeling Good", "🤩 Super Excited"];
  const step = 1;
  return (
    <div>
      <Card step={step} message={moods} />
    </div>
  );
}

function Card({ step, message }) {
  return (
    <div className="steps">
      <Numbers step={step} />
      <Message message={message} step={step} />
      <div className="buttons">
        <Previous />
        <Next />
      </div>
    </div>
  );
}

function Numbers({ step }) {
  return (
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>
  );
}

function Message({ message, step }) {
  return (
    <p className="message">
      Level {step} : {message[step - 1]}
    </p>
  );
}

function Previous() {
  return (
    <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
      Previous
    </button>
  );
}

function Next() {
  return (
    <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
      Next
    </button>
  );
}

export default App;
