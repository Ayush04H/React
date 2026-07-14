import { useState } from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import TripCard from "./TripCard";

function TravelDashboard({ trips }) {
  const [current, setcurrent] = useState(1);
  function handleprevious() {
    setcurrent((s) => (s > 1 ? s - 1 : s));
  }
  function handlenext() {
    setcurrent((s) => (trips.length > s ? s + 1 : s));
  }

  function handleReset() {
    setcurrent((s) => 1);
  }

  return (
    <div className="dashboard">
      <h1>Travel Dashboard</h1>
      <Reset handleReset={handleReset} />
      <ProgressBar current={current} total={trips.length} />
      <TripViewer current={current} trips={trips} />
      <Control handleprevious={handleprevious} handlenext={handlenext} />
    </div>
  );
}
function TripViewer({ current, trips }) {
  const data = trips[current - 1];
  return (
    <div>
      <TripCard data={data} />
    </div>
  );
}

function Control({ handleprevious, handlenext }) {
  return (
    <div className="controls">
      <Button onClick={handleprevious}>Previous</Button>
      <Button onClick={handlenext}>Next</Button>
    </div>
  );
}

function Reset({ handleReset }) {
  return <Button onClick={handleReset}>Reset</Button>;
}

export default TravelDashboard;
