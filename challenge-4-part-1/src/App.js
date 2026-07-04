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
    <div className="card">
      <Poster poster={data.poster} title={data.title} />
      <SeriesInfo data={data} key={data.title} />
    </div>
  );
}

function Poster({ poster, title }) {
  return <img src={poster} alt={title} className="poster" />;
}

function SeriesInfo({ data }) {
  return (
    <div className="info">
      <h2>{data.title}</h2>
      <p>
        {data.seasons} Season - {data.episodes} Episode
      </p>
      <GenreList genreslist={data.genres} />
      <CastList castlist={data.cast} />
      <LanguageList languagelist={data.languages} />
      <p className="rating">Rating {data.rating}</p>
    </div>
  );
}

function GenreList({ genreslist }) {
  return (
    <div className="genre-list">
      {genreslist.map((genre) => (
        <Genre genre={genre} key={genre.name} />
      ))}
    </div>
  );
}

function Genre({ genre }) {
  return (
    <div className="genre" style={{ background: genre.color }}>
      {genre.name}
    </div>
  );
}

function CastList({ castlist }) {
  return (
    <div className="cast-list">
      {castlist.map((cast) => (
        <Cast cast={cast} />
      ))}
    </div>
  );
}

function Cast({ cast }) {
  return <div className="cast">{cast}</div>;
}

function LanguageList({ languagelist }) {
  return (
    <div className="language-list">
      {languagelist.map((language) => (
        <Language language={language} key={language.language} />
      ))}
    </div>
  );
}

function Language({ language }) {
  return (
    <div className="language">
      {language.icon} {language.language}
    </div>
  );
}

export default App;
