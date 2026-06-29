import "./App.css";
const movieData = [
  {
    id: 1,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    poster: "https://picsum.photos/id/237/400/500",
    genres: [
      { name: "Sci-Fi", color: "#4FC3F7" },
      { name: "Drama", color: "#FFB74D" },
      { name: "Adventure", color: "#81C784" },
    ],
    streaming: true,
    awardWinner: true,
  },
  {
    id: 2,
    title: "The Batman",
    director: "Matt Reeves",
    year: 2022,
    rating: 7.9,
    poster: "https://picsum.photos/id/1025/400/500",
    genres: [
      { name: "Action", color: "#EF5350" },
      { name: "Crime", color: "#9575CD" },
    ],
    streaming: false,
    awardWinner: false,
  },
  {
    id: 3,
    title: "Soul",
    director: "Pete Docter",
    year: 2020,
    rating: 8.1,
    poster: "https://picsum.photos/id/1062/400/500",
    genres: [
      { name: "Animation", color: "#4DB6AC" },
      { name: "Comedy", color: "#FFD54F" },
      { name: "Family", color: "#AED581" },
    ],
    streaming: true,
    awardWinner: true,
  },
];
function App() {
  return <Main />;
}

function Main() {
  return (
    <div className="container">
      {movieData.map((data) => (
        <Movie key={data.title} data={data} />
      ))}
    </div>
  );
}

function Movie({ data }) {
  return (
    <div className={`${data.rating >= 8 ? "card" : "card low-rating"}`}>
      <Poster img={data.poster} alt={data.title} />
      <MovieInfo
        title={data.title}
        director={data.director}
        year={data.year}
        rating={data.rating}
        streaming={data.streaming}
        awardWinner={data.awardWinner}
      />
      <Genre genrelist={data.genres} />
    </div>
  );
}

function Poster({ img, title }) {
  return <img src={img} alt={title} className="poster" />;
}

function getStars(rating) {
  if (rating >= 8.5) return "⭐⭐⭐⭐⭐";

  if (rating >= 8) return "⭐⭐⭐⭐";

  if (rating >= 7) return "⭐⭐⭐";

  return "⭐⭐";
}

function MovieInfo({ title, director, year, rating, streaming, awardWinner }) {
  return (
    <div className="data">
      <h2>
        {title}
        {awardWinner ? " 🏆" : ""}
      </h2>
      <p>
        <p>Director: {director}</p>
        <p>Year: {year}</p>

        <span className={`${streaming ? "streaming" : "coming-soon"}`}>
          {streaming ? "Now Streaming" : "Coming Soon"}
        </span>
        <p className="rating">
          Rating : {getStars(rating)} {rating}
        </p>
      </p>
    </div>
  );
}
function Genre({ genrelist }) {
  return (
    <ul className="genre-list">
      {genrelist.map((list) => (
        <Genrelist key={list.name} data={list} />
      ))}
    </ul>
  );
}

function Genrelist({ data }) {
  return (
    <li style={{ background: data.color }} className="genre">
      {data.name}
    </li>
  );
}

export default App;
