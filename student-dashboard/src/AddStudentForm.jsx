import { useState } from "react";
import Button from "./Button";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  const [avatar] = useState(`https://i.pravatar.cc/300?u=${Date.now()}`);

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !course.trim() || !instructor.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Complete student object
    // Only name, course and instructor come from the form.
    // Everything else is dummy/default data.
    const newStudent = {
      id: Date.now(),

      name: name.trim(),

      avatar,

      course: course.trim(),

      instructor: instructor.trim(),

      completedLessons: 0,

      totalLessons: 30,

      enrolled: true,

      certificate: false,

      favourite: false,

      rating: 0,

      duration: 30,

      skills: [
        { name: "Basics", color: "#38bdf8" },
        { name: "Practice", color: "#22c55e" },
        { name: "Projects", color: "#f97316" },
      ],

      projects: ["Starter Project", "Practice Project", "Final Project"],
    };

    onAddStudent(newStudent);

    // Clear form
    setName("");
    setCourse("");
    setInstructor("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <div className="form-grid">
        {/* Student Name */}
        <div className="form-group">
          <label htmlFor="student-name">Student Name</label>

          <input
            id="student-name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label htmlFor="course">Course</label>

          <input
            id="course"
            type="text"
            placeholder="e.g. React"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        {/* Instructor */}
        <div className="form-group">
          <label htmlFor="instructor">Instructor</label>

          <input
            id="instructor"
            type="text"
            placeholder="e.g. Jonas"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit">Add Student</Button>
    </form>
  );
}

export default AddStudentForm;
