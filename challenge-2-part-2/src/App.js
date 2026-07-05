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
  const [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    setstep((s) => (s > 1 ? s - 1 : s));
  }
  function handleNext() {
    setstep((s) => (s < tasks.length ? s + 1 : s));
  }
  function handleToggle() {
    setIsOpen((s) => !s);
  }

  function handleReset() {
    setstep((s) => 1);
  }
  return (
    <div className="dashboard">
      <Reset handleReset={handleReset} />
      <h2>Productivity Dashboard</h2>
      <ToggleButton handleToggle={handleToggle} isOpen={isOpen} />
      {isOpen && (
        <TaskBoard
          tasks={tasks}
          step={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
}

function Reset({ handleReset }) {
  return (
    <button onClick={handleReset} className="reset-btn">
      🔄
    </button>
  );
}
function ToggleButton({ handleToggle, isOpen }) {
  return (
    <button onClick={handleToggle} className="toggleeffect">
      {isOpen ? "❌" : "➕"}
    </button>
  );
}

function TaskBoard({ tasks, step, handleNext, handlePrev }) {
  return (
    <div className="task-board">
      <ProgressBar step={step} total={tasks.length} />
      <TaskList tasks={tasks} step={step} />
      <Controls handleNext={handleNext} handlePrev={handlePrev} />
      <FooterStats step={step} len={tasks.length} />
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
      <TaskCard task={task} step={step} />
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

function TaskCard({ task, step }) {
  return (
    <div
      className={`card ${task.priority === "High" ? "high-priority" : ""} ${task.completed ? "completed" : ""}`}
    >
      <TaskInfo task={task} />
      <TaskCounter step={step} len={tasks.length} />
      <TagList taglist={task.tags} />
      <Status status={task.completed} />
      <Priority priority={task.priority} />
    </div>
  );
}

function starcalculator(completion) {
  if (completion === 100) {
    return "⭐⭐⭐⭐⭐";
  } else if (completion >= 75) {
    return "⭐⭐⭐⭐";
  } else if (completion >= 50) {
    return "⭐⭐⭐";
  } else if (completion >= 25) {
    return "⭐⭐";
  } else {
    return "⭐";
  }
}

function TaskInfo({ task }) {
  const completion = (task.spentHours / task.estimatedHours) * 100;
  return (
    <div className="task-info">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Spent {task.spentHours}/{task.estimatedHours} hrs
      </p>
      <p>{task.spentHours === task.estimatedHours && "🏆 Finished Early"}</p>
      <p>{starcalculator(completion)}</p>
    </div>
  );
}

function TagList({ taglist }) {
  return taglist.map((tag) => (
    <div className="tags">
      <Tag tag={tag} />
    </div>
  ));
}

function Tag({ tag }) {
  return (
    <div className="tag" style={{ background: tag.color }}>
      {tag.name}
    </div>
  );
}

function prioritybadge(priority) {
  if (priority === "High") {
    return "🔴 High";
  } else if (priority === "Medium") {
    return "🟡 Medium";
  } else {
    return "🟢 Low";
  }
}

function priorityclass(priority) {
  if (priority === "High") {
    return "high";
  } else if (priority === "Medium") {
    return "medium";
  } else {
    return "low";
  }
}

function Priority({ priority }) {
  return (
    <div className={`badge ${priorityclass(priority)}`}>
      {prioritybadge(priority)}
    </div>
  );
}

function Status({ status }) {
  return (
    <div
      className={`status ${status ? "status-completed" : "status-progress"}`}
    >
      {status ? "✅ Completed" : "⌛ In Progress"}
    </div>
  );
}

function TaskCounter({ step, len }) {
  return (
    <p>
      Step {step}/{len}
    </p>
  );
}

function FooterStats({ step, len }) {
  return (
    <footer className="footer-stats">
      <p>Total Task {len}</p> <p>Completed {step} </p>
      <p>Remaining {len - step}</p>
    </footer>
  );
}

export default App;
