function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-wrapper">
      <p className="progress-text">
        Trip {current} / {total}
      </p>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${Math.round(percentage)}%` }}
        ></div>
      </div>

      <p className="progress-percent">{Math.round(percentage)}%</p>
    </div>
  );
}
export default ProgressBar;
