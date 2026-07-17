import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setmovieRating] = useState(0);
  return (
    <div>
      <StarRating color="green" maxRating={10} onSetRating={setmovieRating} />
      <p>This movies has a Rating of {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} />
    <Test />
  </React.StrictMode>,
);
