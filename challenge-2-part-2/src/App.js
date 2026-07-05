import { useState } from "react";
import "./App.css";
const tasks = [
  {
    id: 1,
    title: "Build Netflix Dashboard",
    description: "Finish the React dashboard with reusable components.",
    priority: "High",
    completed: false,
    estimatedHours: 12,
    spentHours: 8,

    tags: [
      {
        name: "React",
        color: "#61dafb",
      },
      {
        name: "Frontend",
        color: "#f59e0b",
      },
      {
        name: "UI",
        color: "#10b981",
      },
    ],
  },

  {
    id: 2,
    title: "Solve LeetCode",
    description: "Finish 5 Medium Array questions.",
    priority: "Medium",
    completed: true,
    estimatedHours: 4,
    spentHours: 4,

    tags: [
      {
        name: "DSA",
        color: "#ef4444",
      },
      {
        name: "Arrays",
        color: "#8b5cf6",
      },
    ],
  },

  {
    id: 3,
    title: "Gym Workout",
    description: "Chest and Triceps training.",
    priority: "Low",
    completed: false,
    estimatedHours: 2,
    spentHours: 1,

    tags: [
      {
        name: "Fitness",
        color: "#22c55e",
      },
      {
        name: "Health",
        color: "#06b6d4",
      },
    ],
  },

  {
    id: 4,
    title: "Read React Docs",
    description: "Read about useState and event handling.",
    priority: "High",
    completed: false,
    estimatedHours: 5,
    spentHours: 2,

    tags: [
      {
        name: "React",
        color: "#61dafb",
      },
      {
        name: "Learning",
        color: "#ec4899",
      },
    ],
  },
];
function App() {
  const [step, setstep] = useState(1);
  function handlePrev() {
    setstep((s) => (s > 1 ? s - 1 : s));
  }
  function handleNext() {
    setstep((s) => (s < tasks.length ? s + 1 : s));
  }
  return (
    <div className="dashboard">
      <h2>Productivity Dashboard</h2>
      <TaskBoard
        tasks={tasks}
        step={step}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

function TaskBoard({ tasks, step, handleNext, handlePrev }) {
  return (
    <div className="task-board">
      <ProgressBar step={step} total={tasks.length} />
      <TaskList tasks={tasks} step={step} />
      <Controls handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${percent}%` }}></div>
    </div>
  );
}

function TaskList({ tasks, step }) {
  const task = tasks[step - 1];
  return (
    <div className="task-list">
      <TaskCard task={task} />
    </div>
  );
}

function Controls({ handleNext, handlePrev }) {
  return (
    <div className="controls">
      <Previous handlePrev={handlePrev} />
      <Next handleNext={handleNext} />
    </div>
  );
}

function Previous({ handlePrev }) {
  return (
    <div className="button">
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
}

function Next({ handleNext }) {
  return (
    <div className="button">
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <div className="card">
      <TaskInfo task={task} />
    </div>
  );
}

function TaskInfo({ task }) {
  return (
    <div className="task-info">
      <h3>{task.title}</h3>
    </div>
  );
}

export default App;
