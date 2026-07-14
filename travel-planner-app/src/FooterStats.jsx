function FooterStats({ trips }) {
  const totalTrips = trips.length;

  const completedTrips = trips.filter((trip) => trip.completed).length;

  const bookedTrips = trips.filter((trip) => trip.booked).length;

  const favouriteTrips = trips.filter((trip) => trip.favourite).length;

  const remainingTrips = totalTrips - completedTrips;

  return (
    <footer className="footer">
      <div>
        <h3>{totalTrips}</h3>
        <p>Total Trips</p>
      </div>

      <div>
        <h3>{completedTrips}</h3>
        <p>Completed</p>
      </div>

      <div>
        <h3>{bookedTrips}</h3>
        <p>Booked</p>
      </div>

      <div>
        <h3>{favouriteTrips}</h3>
        <p>Favourite</p>
      </div>

      <div>
        <h3>{remainingTrips}</h3>
        <p>Remaining</p>
      </div>
    </footer>
  );
}

export default FooterStats;
