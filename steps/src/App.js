import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  //New phase more on Child and Parent Relationship
  const [step, setstep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlerPrevious() {
    //alert("Previous");
    setstep((s) => (s > 1 ? s - 1 : s));
  }

  function handlerNext() {
    //alert("Next");
    setstep((s) => (s < 3 ? s + 1 : s));
  }

  function close() {
    setisOpen((is) => !is);
  }
  return (
    <>
      <button className="close" onClick={close}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} :{messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#ffffff"
              bgColor="#7950f2"
              onClick={handlerPrevious}
              text="previous"
              emoji="⬅️"
            />
            <Button
              textColor="#ffffff"
              bgColor="#7950f2"
              onClick={handlerNext}
              text="next"
              emoji="➡️"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, text, emoji }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <span>{emoji}</span>
      {text}
    </button>
  );
}

export default App;
