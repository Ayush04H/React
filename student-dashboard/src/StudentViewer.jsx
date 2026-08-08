function StudentViewer({ current_student }) {
  return (
    <div className="student-viewer">
      <StudentCard current_student={current_student} />
    </div>
  );
}
function StudentCard({ current_student }) {
  return (
    <div className="card">
      <StudentImage src={current_student.avatar} alt={current_student.name} />
      <StudentInfo current_student={current_student} />
    </div>
  );
}
function StudentImage({ src, alt }) {
  return <img src={src} alt={alt} className="student-image"></img>;
}

function StudentInfo({ current_student }) {
  return (
    <div className="info">
      <h2>Name - {current_student.name}</h2>
      <p>{current_student.course}</p>
      <p>{current_student.instructor}</p>
    </div>
  );
}
export default StudentViewer;
