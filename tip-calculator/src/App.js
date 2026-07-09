import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill("");
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div className="container">
      <h1 className="heading">💰 Tip Calculator</h1>

      <div className="card">
        <Price bill={bill} setBill={setBill}>
          How much was the bill?
        </Price>

        <Rating percentage={yourTip} setPercentage={setYourTip}>
          How did you like the service?
        </Rating>

        <Rating percentage={friendTip} setPercentage={setFriendTip}>
          How did your friend like the service?
        </Rating>

        <Calculations bill={bill} yourTip={yourTip} friendTip={friendTip} />

        <Reset handleReset={handleReset} />
      </div>
    </div>
  );
}

function Price({ children, bill, setBill }) {
  return (
    <div className="input-group">
      <label>{children}</label>

      <input
        className="bill-input"
        type="number"
        placeholder="Enter Bill Amount"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Rating({ children, percentage, setPercentage }) {
  return (
    <div className="input-group">
      <label>{children}</label>

      <select
        className="tip-select"
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={0}>😐 No Tip (0%)</option>
        <option value={5}>🙂 Okay (5%)</option>
        <option value={10}>😊 Good (10%)</option>
        <option value={15}>😄 Great (15%)</option>
        <option value={20}>😍 Excellent (20%)</option>
        <option value={25}>🤩 Outstanding (25%)</option>
        <option value={30}>🔥 Amazing (30%)</option>
        <option value={40}>💯 Perfect (40%)</option>
        <option value={50}>👑 Legendary (50%)</option>
      </select>
    </div>
  );
}

function Calculations({ bill, yourTip, friendTip }) {
  const averageTip = (yourTip + friendTip) / 2;
  const tipAmount = (bill * averageTip) / 100;
  const total = Number(bill) + tipAmount;

  return (
    <div className="result-card">
      <h2>Bill Summary</h2>

      <div className="result-row">
        <span>Bill Amount</span>
        <strong>₹ {bill || 0}</strong>
      </div>

      <div className="result-row">
        <span>Your Tip</span>
        <strong>{yourTip}%</strong>
      </div>

      <div className="result-row">
        <span>Friend's Tip</span>
        <strong>{friendTip}%</strong>
      </div>

      <div className="result-row">
        <span>Average Tip</span>
        <strong>{averageTip}%</strong>
      </div>

      <div className="result-row">
        <span>Tip Amount</span>
        <strong>₹ {tipAmount.toFixed(2)}</strong>
      </div>

      <hr />

      <div className="result-row total">
        <span>Total Payable</span>
        <strong>₹ {total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

function Reset({ handleReset }) {
  return (
    <button className="reset-btn" onClick={handleReset}>
      🔄 Reset Calculator
    </button>
  );
}

export default App;
