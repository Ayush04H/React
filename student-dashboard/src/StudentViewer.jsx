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
      <Image src={current_student.avatar} alt={current_student.name} />
    </div>
  );
}
function Image({ src, alt }) {
  return <img src={src} alt={alt} className="student-image"></img>;
}
export default StudentViewer;
