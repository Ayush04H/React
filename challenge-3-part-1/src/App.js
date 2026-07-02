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
    <div
      className={`card ${data.playTime < 100 ? "low-playtime" : ""} ${data.completed ? "completed" : ""}`}
    >
      <GameCover cover={data.cover} alt={data.title} />
      <GameInfo data={data} />
    </div>
  );
}

function GameInfo({ data }) {
  function playtime(playTime) {
    if (playTime < 50) {
      return "😴";
    } else if (playTime > 50 && playTime <= 100) {
      return "🙂";
    } else if (playTime > 100 && playTime <= 200) {
      return "🔥";
    } else {
      return "👑";
    }
  }
  return (
    <div className="info">
      <span
        className={`status ${data.installed ? "installed" : "not-installed"}`}
      >
        {data.installed ? "Installed" : "Not Installed"}
      </span>
      <h2>
        {data.title} {data.favorite ? "⭐🌟" : ""}
      </h2>
      <div>Developed By : {data.developer}</div>
      <div>Release Year : {data.releaseYear}</div>
      <div>
        Levels Cleared : {data.achievements.unlocked} /{" "}
        {data.achievements.total}{" "}
        {data.achievements.unlocked === data.achievements.total &&
          "🏆 Perfect Game"}
      </div>
      <div>
        Played {data.playTime} hrs {playtime(data.playTime)}
      </div>
      <div>
        <GenreList genres={data.genres} />
      </div>
      <div>
        <PlatformList platform={data.platforms} />
      </div>
    </div>
  );
}

function GenreList({ genres }) {
  console.log(genres);
  return (
    <div className="genre-list">
      {genres.map((data) => (
        <Genre data={data} />
      ))}
    </div>
  );
}

function Genre({ data }) {
  return (
    <div style={{ background: data.color }} className="genre">
      {data.name}
    </div>
  );
}

function PlatformList({ platform }) {
  return (
    <div className="platform-list">
      {platform.map((data) => (
        <Platform data={data} />
      ))}
    </div>
  );
}

function Platform({ data }) {
  return (
    <div className="platform">
      {data.name} {data.icon}
    </div>
  );
}

function GameCover({ cover, alt }) {
  return <img src={cover} alt={alt} className="cover"></img>;
}

export default App;
