import "./App.css";

const gameData = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    developer: "CD Projekt Red",
    releaseYear: 2020,
    cover: "https://picsum.photos/id/1015/500/650",

    installed: true,
    favorite: true,
    completed: false,

    playTime: 148,

    achievements: {
      unlocked: 42,
      total: 50,
    },

    genres: [
      { name: "RPG", color: "#ef5350" },
      { name: "Open World", color: "#5c6bc0" },
      { name: "Sci-Fi", color: "#26c6da" },
    ],

    platforms: [
      { name: "Windows", icon: "🪟" },
      { name: "Steam Deck", icon: "🎮" },
    ],
  },

  {
    id: 2,
    title: "Hades",
    developer: "Supergiant Games",
    releaseYear: 2020,
    cover: "https://picsum.photos/id/1011/500/650",

    installed: false,
    favorite: false,
    completed: true,

    playTime: 245,

    achievements: {
      unlocked: 49,
      total: 49,
    },

    genres: [
      { name: "Roguelike", color: "#ffa726" },
      { name: "Action", color: "#66bb6a" },
    ],

    platforms: [{ name: "Windows", icon: "🪟" }],
  },

  {
    id: 3,
    title: "Stardew Valley",
    developer: "ConcernedApe",
    releaseYear: 2016,
    cover: "https://picsum.photos/id/1025/500/650",

    installed: true,
    favorite: false,
    completed: false,

    playTime: 82,

    achievements: {
      unlocked: 18,
      total: 40,
    },

    genres: [
      { name: "Farming", color: "#8bc34a" },
      { name: "Simulation", color: "#29b6f6" },
      { name: "Indie", color: "#ab47bc" },
    ],

    platforms: [
      { name: "Windows", icon: "🪟" },
      { name: "Mac", icon: "🍎" },
    ],
  },

  {
    id: 4,
    title: "Elden Ring",
    developer: "FromSoftware",
    releaseYear: 2022,
    cover: "https://picsum.photos/id/1040/500/650",

    installed: true,
    favorite: true,
    completed: true,

    playTime: 312,

    achievements: {
      unlocked: 42,
      total: 42,
    },

    genres: [
      { name: "Soulslike", color: "#5c6bc0" },
      { name: "Fantasy", color: "#8d6e63" },
    ],

    platforms: [
      { name: "Windows", icon: "🪟" },
      { name: "Steam Deck", icon: "🎮" },
    ],
  },
];
function App() {
  return (
    <div className="container">
      <Gamelist />
    </div>
  );
}

function Gamelist() {
  return (
    <div>
      {gameData.map((data) => (
        <GameCard key={data.title} data={data} />
      ))}
    </div>
  );
}

function GameCard({ data }) {
  return (
    <div className="card">
      <GameCover cover={data.cover} alt={data.title} />
      <GameInfo
        achievements={data.achievements}
        title={data.title}
        installed={data.installed}
        developer={data.developer}
        releaseYear={data.releaseYear}
      />
    </div>
  );
}

function GameInfo({ achievements, title, installed, developer, releaseYear }) {
  return (
    <div className="info">
      <span className={`status ${installed ? "installed" : "not-installed"}`}>
        {installed ? "Installed" : "Not Installed"}
      </span>
      <h2>{title}</h2>
      <div>Developed By : {developer}</div>
      <div>Release Year : {releaseYear}</div>
      <div>
        Levels Cleared : {achievements.unlocked} / {achievements.total}
      </div>
    </div>
  );
}

function GameCover({ cover, alt }) {
  return <img src={cover} alt={alt} className="cover"></img>;
}
export default App;
