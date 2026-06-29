import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlerPrevious() {
    //alert("Previous");
    setstep(step > 1 ? step - 1 : step);
  }

  function handlerNext() {
    //alert("Next");
    setstep(step < 3 ? step + 1 : step);
  }

  function close() {
    setisOpen(!isOpen);
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
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlerPrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlerNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
