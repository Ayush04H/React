import { useState } from "react";
import "./App.css";

function App() {
  const moods = ["😴 Sleep Time", "😊 Feeling Good", "🤩 Super Excited"];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }

  function handleNext() {
    setStep((s) => (s < 3 ? s + 1 : s));
  }

  function handleOpen() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      <Open handleOpen={handleOpen} />
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

function Open({ handleOpen }) {
  return (
    <button className="close" onClick={handleOpen}>
      ❌
    </button>
  );
}

function Card({ step, message, handleNext, handlePrev }) {
  return (
    <div className="steps">
      <Numbers step={step} />
      <Message message={message} step={step} />
      <div className="buttons">
        <Previous handlePrev={handlePrev} />
        <Next handleNext={handleNext} />
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
