import "./App.css";
const seriesData = [
  {
    id: 1,
    title: "Stranger Things",
    year: 2016,
    seasons: 4,
    episodes: 34,

    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",

    rating: 8.7,

    netflixOriginal: true,

    finished: false,

    myList: true,

    watchedEpisodes: 34,

    genres: [
      { name: "Sci-Fi", color: "#3b82f6" },
      { name: "Drama", color: "#ef4444" },
      { name: "Mystery", color: "#8b5cf6" },
    ],

    cast: [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "David Harbour",
      "Winona Ryder",
    ],

    languages: [
      { language: "English", icon: "🇺🇸" },
      { language: "Spanish", icon: "🇪🇸" },
    ],
  },

  {
    id: 2,
    title: "Breaking Bad",
    year: 2008,
    seasons: 5,
    episodes: 62,

    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",

    rating: 9.5,

    netflixOriginal: false,

    finished: true,

    myList: false,

    watchedEpisodes: 62,

    genres: [
      { name: "Crime", color: "#22c55e" },
      { name: "Drama", color: "#ef4444" },
    ],

    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],

    languages: [{ language: "English", icon: "🇺🇸" }],
  },

  {
    id: 3,
    title: "Dark",
    year: 2017,
    seasons: 3,
    episodes: 26,

    poster: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",

    rating: 8.8,

    netflixOriginal: true,

    finished: true,

    myList: true,

    watchedEpisodes: 18,

    genres: [
      { name: "Sci-Fi", color: "#3b82f6" },
      { name: "Thriller", color: "#f59e0b" },
      { name: "Mystery", color: "#8b5cf6" },
    ],

    cast: ["Louis Hofmann", "Lisa Vicari", "Andreas Pietschmann"],

    languages: [
      { language: "German", icon: "🇩🇪" },
      { language: "English", icon: "🇺🇸" },
    ],
  },
];
function App() {
  return (
    <div>
      <Netflix />
    </div>
  );
}

function Netflix() {
  return (
    <div className="netflix">
      <h1>NETFLIX</h1>
      <div className="container">
        <SeriesList />
      </div>
    </div>
  );
}

function SeriesList() {
  return seriesData.map((data) => <SeriesCard data={data} key={data.id} />);
}

function SeriesCard({ data }) {
  return (
    <div className={`card ${!data.myList ? "low-interest" : ""}`}>
      <Poster poster={data.poster} title={data.title} />
      <SeriesInfo data={data} key={data.title} />
    </div>
  );
}

function Poster({ poster, title }) {
  return <img src={poster} alt={title} className="poster" />;
}

function SeriesInfo({ data }) {
  function ratingcolor(rating) {
    if (rating > 9) {
      return "gold";
    } else if (rating >= 8) {
      return "green";
    } else if (rating >= 7) {
      return "orange";
    } else {
      return "red";
    }
  }
  return (
    <div className="info">
      <h2>{data.title}</h2>
      <p>
        {data.seasons} Season - {data.episodes} Episode
      </p>
      <GenreList genreslist={data.genres} />
      <CastList castlist={data.cast} />
      <LanguageList languagelist={data.languages} />
      <Progress progress={data.watchedEpisodes} total={data.episodes} />
      <div className="badge-container">
        <StatusBadge finished={data.finished} />
        <NetflixOriginal netflixOriginal={data.netflixOriginal} />
        <MyList myList={data.myList} />
      </div>
      <p className={`rating ${ratingcolor(data.rating)}`}>
        ⭐ {data.rating} {data.rating > 9 ? "🔥 Masterpiece" : ""}
      </p>
    </div>
  );
}

function GenreList({ genreslist }) {
  return (
    <ul className="genre-list">
      {genreslist.map((genre) => (
        <Genre genre={genre} key={genre.name} />
      ))}
    </ul>
  );
}

function Genre({ genre }) {
  return (
    <li className="genre" style={{ background: genre.color }}>
      {genre.name}
    </li>
  );
}

function CastList({ castlist }) {
  return (
    <ul className="cast-list">
      {castlist.map((cast) => (
        <Cast cast={cast} key={cast} />
      ))}
    </ul>
  );
}

function Cast({ cast }) {
  return <li className="cast">{cast}</li>;
}

function LanguageList({ languagelist }) {
  return (
    <ul className="language-list">
      {languagelist.map((language) => (
        <Language language={language} key={language.language} />
      ))}
    </ul>
  );
}

function Language({ language }) {
  return (
    <li className="language">
      {language.icon} {language.language}
    </li>
  );
}

function Progress({ progress, total }) {
  return (
    <p>
      Episode Watched {progress}/{total}{" "}
      {progress === total ? "🏆 Fully Watched" : ""}
    </p>
  );
}

function StatusBadge({ finished }) {
  return (
    <div
      className={`badge ${finished ? "green completed" : "orange watching"}`}
    >
      {finished ? "Completed" : "Watching"}
    </div>
  );
}

function NetflixOriginal({ netflixOriginal }) {
  return (
    <div className={`${netflixOriginal ? "badge red bgcolor" : ""}`}>
      {netflixOriginal ? "netflixOriginal" : ""}
    </div>
  );
}

function MyList({ myList }) {
  return (
    <div className={`${myList ? "mylist badge" : ""}`}>
      {myList ? "❤️ In My List" : ""}
    </div>
  );
}

export default App;
