function StudentViewer({ student }) {
  if (!student) {
    return (
      <div className="student-card">
        <h2>No Student Found</h2>
      </div>
    );
  }

  const progress = (student.completedLessons / student.totalLessons) * 100;

  return (
    <article className="student-card">
      {/* Header */}
      <div className="student-header">
        <img
          src={student.avatar}
          alt={student.name}
          className="student-avatar"
        />

        <div>
          <h2>{student.name}</h2>

          <p>
            {student.course} • {student.instructor}
          </p>
        </div>
      </div>

      {/* Basic Information */}
      <div className="student-info">
        <div className="info-box">
          <span>Course</span>
          <strong>{student.course}</strong>
        </div>

        <div className="info-box">
          <span>Instructor</span>
          <strong>{student.instructor}</strong>
        </div>

        <div className="info-box">
          <span>Rating</span>
          <strong>
            {student.rating === 0 ? "Not Rated" : `${student.rating}/5`}
          </strong>
        </div>

        <div className="info-box">
          <span>Duration</span>
          <strong>{student.duration} hrs</strong>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <div className="progress-header">
          <span>Course Progress</span>

          <strong>
            {student.completedLessons}/{student.totalLessons}
          </strong>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>Skills</h3>

        <div className="skills">
          {student.skills.map((skill) => (
            <span
              key={skill.name}
              className="skill"
              style={{
                backgroundColor: skill.color,
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="section">
        <h3>Projects</h3>

        <ul className="projects">
          {student.projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>

      {/* Status */}
      <div className="student-status">
        <span>{student.enrolled ? "✓ Enrolled" : "Not Enrolled"}</span>

        <span>
          {student.certificate
            ? "🏆 Certificate Earned"
            : "Certificate Pending"}
        </span>

        {student.favourite && <span>⭐ Favourite</span>}
      </div>
    </article>
  );
}

export default StudentViewer;
