import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Data = [
  {
    name: "Doe",
    intro: "Frontend Developer who loves React and JavaScript.",
    skills: [
      { name: "HTML", color: "#e34c26", level: "beginner" },
      { name: "CSS", color: "#264de4", level: "intermediate" },
      { name: "JavaScript", color: "#f7df1e", level: "advanced" },
      { name: "React", color: "#61dafb", level: "advanced" },
    ],
    avatar: "https://i.pravatar.cc/400?img=12",
    active: true,
  },
  {
    name: "John",
    intro: "Backend Developer passionate about Java and Spring Boot.",
    skills: [
      { name: "Java", color: "#f89820", level: "advanced" },
      { name: "Spring Boot", color: "#6db33f", level: "advanced" },
      { name: "MySQL", color: "#00758f", level: "intermediate" },
      { name: "Git", color: "#f1502f", level: "advanced" },
    ],
    avatar: "https://i.pravatar.cc/400?img=31",
    active: true,
  },
  {
    name: "Sarah",
    intro: "Full Stack Developer who enjoys building modern web apps.",
    skills: [
      { name: "Node.js", color: "#83cd29", level: "advanced" },
      { name: "Express", color: "#999999", level: "intermediate" },
      { name: "MongoDB", color: "#4db33d", level: "advanced" },
      { name: "React", color: "#61dafb", level: "advanced" },
    ],
    avatar: "https://i.pravatar.cc/400?img=47",
    active: false,
  },
];
function App() {
  return Data.map((data) => <Main key={data.name} data={data} />);
}

const Main = ({ data }) => {
  return (
    <div className={`card ${!data.active ? "card-not-active" : ""}`}>
      <Avatar path={data.avatar} name={data.name} />
      <div className="data">
        <Intro name={data.name} intro={data.intro} />
        <Skillist skillist={data.skills} />
      </div>
    </div>
  );
};

const Avatar = ({ path, name }) => {
  return <img src={path} alt={name} className="avatar" />;
};

const Intro = ({ name, intro }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{intro}</p>
    </>
  );
};

const Skillist = ({ skillist }) => {
  return (
    <ul className="skill-list">
      {skillist.map((skill) => {
        return <Skill skill={skill} />;
      })}
    </ul>
  );
};

const Skill = ({ skill }) => {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      {skill.name}
      {skill.level === "advanced" && " 💪"}
      {skill.level === "intermediate" && " 👍"}
      {skill.level === "beginner" && " 🌱"}
    </li>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
