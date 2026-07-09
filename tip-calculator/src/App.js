import { use, useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Price>
        <span>How much was the Bill ?</span>
      </Price>
      <Rating>
        <span>How Did You Liked the Service ?</span>
      </Rating>
    </div>
  );
}

function Price({ children }) {
  const [price, setprice] = useState(null);
  return (
    <div>
      {children}
      <input
        type="text"
        value={price}
        onChange={(e) => setprice(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Rating({ children }) {
  const [percentage, setpercentage] = useState(0);
  return (
    <div>
      {children}

      <select
        value={percentage}
        onChange={(e) => setpercentage(Number(e.target.value))}
      >
        <option value={0} key={0}>
          No Tip
        </option>
        <option value={10} key={10}>
          10 % Tip
        </option>
      </select>
    </div>
  );
}

export default App;
