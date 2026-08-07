function StudentViewer({ current_student }) {
  return (
    <div className="student-viewer">
      <StudentCard current_student={current_student} />
    </div>
  );
}
function StudentCard({ current_student }) {
  return <div className="card">{current_student.name}</div>;
}
export default StudentViewer;
