import { useState } from "react";
import "./App.css";
const moods = [
  "😴 Sleep Time",
  "😊 Feeling Good",
  "🤩 Super Excited",
  "🥳 Party Time",
  "😎 Vacation Mode",
  "📚 Study Mode",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }

  function handleNext() {
    setStep((s) => (s < moods.length ? s + 1 : s));
  }

  function handleOpen() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      <Open handleOpen={handleOpen} isOpen={isOpen} />
      {isOpen && (
        <Card
          step={step}
          message={moods}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </>
  );
}

function Open({ handleOpen, isOpen }) {
  return (
    <button className="close" onClick={handleOpen}>
      {isOpen ? "❌" : "➕"}
    </button>
  );
}

function Card({ step, message, handleNext, handlePrev }) {
  return (
    <div className="steps">
      <Numbers step={step} totalSteps={moods.length} />
      <Message message={message} step={step} />
      <div className="buttons">
        <Previous handlePrev={handlePrev} />
        <Next handleNext={handleNext} />
      </div>
    </div>
  );
}

function Numbers({ step, totalSteps }) {
  return (
    <div className="numbers">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className={step >= index + 1 ? "active" : ""}>
          {index + 1}
        </div>
      ))}
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

function Previous({ handlePrev }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
      onClick={handlePrev}
    >
      Previous
    </button>
  );
}

function Next({ handleNext }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
      onClick={handleNext}
    >
      Next
    </button>
  );
}

export default App;
