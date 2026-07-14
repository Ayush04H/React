function TripCard({ data }) {
  function budgetStatus(spend, budget) {
    return spent > budget && "over-budget";
  }
  function progressColor(completed) {
    return completed && "completed";
  }
  const spent = data.spent;
  const budget = data.budget;
  return (
    <div
      className={`card ${budgetStatus(spent, budget)} ${progressColor(data.completed)} ${!data.booked && "not-booked"}`}
    >
      <TripImage image={data.image} alt={data.destination} />
      <TripInfo data={data} />
      <BudgetInfo data={data} />
      <ActivityList activities={data.activities} />
      <HotelList hotels={data.hotels} />
    </div>
  );
}

function TripImage({ image, alt }) {
  return <img className="image" src={image} alt={alt}></img>;
}
function TripInfo({ data }) {
  function weatherIcon(data) {
    if (data === "Sunny") {
      return "☀";
    } else if (data === "Cloudy") {
      return "☁";
    } else if (data === "Snow") {
      return "❄";
    } else {
      return "🌧";
    }
  }

  function transportIcon(data) {
    if (data === "Flight") {
      return "✈";
    } else if (data === "Train") {
      return "🚄";
    } else {
      return "🚗";
    }
  }
  return (
    <div className="info">
      <h2>{data.destination}</h2>
      <p>{weatherIcon(data.weather)}</p>
      <p>{transportIcon(data.transport)}</p>
    </div>
  );
}

function ActivityList({ activities }) {
  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Activity key={activity.name} activity={activity} />
      ))}
    </div>
  );
}

function Activity({ activity }) {
  return (
    <div style={{ backgroundColor: activity.color }} className="activity">
      {activity.name}
    </div>
  );
}

function HotelList({ hotels }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <Hotel key={hotel} hotel={hotel} />
      ))}
    </div>
  );
}

function Hotel({ hotel }) {
  return (
    <div style={{ color: "grey" }} className="hotel">
      {hotel}
    </div>
  );
}

function BudgetInfo({ data }) {
  const spent = data.spent;
  const budget = data.budget;
  return (
    <div>
      Spend {spent} of {budget}
    </div>
  );
}
export default TripCard;
