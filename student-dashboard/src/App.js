import { useState } from "react";
import "./App.css";
import StudentViewer from "./StudentViewer";
import Controls from "./Controls";
const initialStudents = [
  {
    id: 1,

    name: "Jhandu Kumar",

    avatar: "https://i.pravatar.cc/300?img=11",

    course: "React",

    instructor: "Jonas",

    completedLessons: 18,

    totalLessons: 30,

    enrolled: true,

    certificate: false,

    favourite: true,

    rating: 4,

    duration: 42,

    skills: [
      { name: "Components", color: "#38bdf8" },
      { name: "Props", color: "#22c55e" },
      { name: "State", color: "#f97316" },
    ],

    projects: ["Netflix Dashboard", "Travel Planner", "Playlist Manager"],
  },

  {
    id: 2,

    name: "Sarah Wilson",

    avatar: "https://i.pravatar.cc/300?img=25",

    course: "JavaScript",

    instructor: "Jonas",

    completedLessons: 30,

    totalLessons: 30,

    enrolled: true,

    certificate: true,

    favourite: false,

    rating: 5,

    duration: 65,

    skills: [
      { name: "Functions", color: "#e11d48" },
      { name: "Arrays", color: "#8b5cf6" },
      { name: "Objects", color: "#f59e0b" },
    ],

    projects: ["Guess Game", "Pig Game", "Bankist"],
  },

  {
    id: 3,

    name: "Alex Morgan",

    avatar: "https://i.pravatar.cc/300?img=31",

    course: "HTML & CSS",

    instructor: "Kevin Powell",

    completedLessons: 12,

    totalLessons: 20,

    enrolled: true,

    certificate: false,

    favourite: false,

    rating: 3,

    duration: 18,

    skills: [
      { name: "Flexbox", color: "#0ea5e9" },
      { name: "Grid", color: "#14b8a6" },
    ],

    projects: ["Portfolio", "Landing Page"],
  },
];
function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
function Dashboard() {
  const [curr, setcurr] = useState(1);
  const current_student = initialStudents[curr - 1];
  return (
    <div className="dashboard">
      <StudentViewer current_student={current_student} />
      <Controls
        setcurr={setcurr}
        curr={curr}
        initialStudents={initialStudents}
      />
    </div>
  );
}

export default App;
