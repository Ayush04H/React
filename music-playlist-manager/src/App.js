import "./App.css";
const playlists = [
  {
    id: 1,
    name: "Workout Mix",
    creator: "Ayush",
    cover: "High quality workout playlist cover",
    songs: 48,
    duration: 172,
    liked: true,
    downloaded: true,
    explicit: false,
    userRating: 4,
    genres: [
      { name: "Pop", color: "#ff006e" },
      { name: "Workout", color: "#3a86ff" },
    ],
    artists: ["Dua Lipa", "Imagine Dragons", "The Weeknd"],
  },

  {
    id: 2,
    name: "Late Night Vibes",
    creator: "Spotify",
    cover: "Night city neon playlist cover",
    songs: 36,
    duration: 145,
    liked: true,
    downloaded: false,
    explicit: true,
    userRating: 5,
    genres: [
      { name: "R&B", color: "#8338ec" },
      { name: "Chill", color: "#06d6a0" },
    ],
    artists: ["SZA", "Drake", "Frank Ocean"],
  },

  {
    id: 3,
    name: "Road Trip",
    creator: "Rahul",
    cover: "Mountain highway playlist cover",
    songs: 62,
    duration: 230,
    liked: false,
    downloaded: true,
    explicit: false,
    userRating: 4,
    genres: [
      { name: "Rock", color: "#ef476f" },
      { name: "Country", color: "#ffd166" },
    ],
    artists: ["Eagles", "Bon Jovi", "Fleetwood Mac"],
  },

  {
    id: 4,
    name: "Coding Sessions",
    creator: "Ayush",
    cover: "Minimal coding desk playlist cover",
    songs: 54,
    duration: 210,
    liked: true,
    downloaded: true,
    explicit: false,
    userRating: 5,
    genres: [
      { name: "Lo-Fi", color: "#118ab2" },
      { name: "Focus", color: "#073b4c" },
    ],
    artists: ["Idealism", "Jinsang", "Nymano"],
  },

  {
    id: 5,
    name: "Party Hits",
    creator: "Spotify",
    cover: "Colorful party lights playlist cover",
    songs: 80,
    duration: 285,
    liked: true,
    downloaded: false,
    explicit: true,
    userRating: 4,
    genres: [
      { name: "Dance", color: "#ff9f1c" },
      { name: "EDM", color: "#2ec4b6" },
    ],
    artists: ["David Guetta", "Martin Garrix", "Calvin Harris"],
  },

  {
    id: 6,
    name: "Sunday Morning",
    creator: "Emma",
    cover: "Coffee mug and sunrise playlist cover",
    songs: 27,
    duration: 95,
    liked: false,
    downloaded: false,
    explicit: false,
    userRating: 3,
    genres: [
      { name: "Acoustic", color: "#8ecae6" },
      { name: "Indie", color: "#219ebc" },
    ],
    artists: ["Ed Sheeran", "Vance Joy", "Passenger"],
  },

  {
    id: 7,
    name: "Bollywood Beats",
    creator: "Arjun",
    cover: "Bollywood music poster playlist cover",
    songs: 72,
    duration: 260,
    liked: true,
    downloaded: true,
    explicit: false,
    userRating: 5,
    genres: [
      { name: "Bollywood", color: "#ff595e" },
      { name: "Pop", color: "#1982c4" },
    ],
    artists: ["Arijit Singh", "Shreya Ghoshal", "Badshah"],
  },

  {
    id: 8,
    name: "Classical Essentials",
    creator: "Spotify",
    cover: "Classical orchestra playlist cover",
    songs: 42,
    duration: 190,
    liked: false,
    downloaded: true,
    explicit: false,
    userRating: 4,
    genres: [
      { name: "Classical", color: "#6d597a" },
      { name: "Instrumental", color: "#355070" },
    ],
    artists: ["Mozart", "Beethoven", "Chopin"],
  },

  {
    id: 9,
    name: "Hip Hop Central",
    creator: "Alex",
    cover: "Urban graffiti playlist cover",
    songs: 65,
    duration: 240,
    liked: true,
    downloaded: false,
    explicit: true,
    userRating: 4,
    genres: [
      { name: "Hip Hop", color: "#d62828" },
      { name: "Rap", color: "#f77f00" },
    ],
    artists: ["Kendrick Lamar", "J. Cole", "Travis Scott"],
  },

  {
    id: 10,
    name: "Rainy Day",
    creator: "Ayush",
    cover: "Rain window playlist cover",
    songs: 31,
    duration: 120,
    liked: false,
    downloaded: false,
    explicit: false,
    userRating: 3,
    genres: [
      { name: "Ambient", color: "#577590" },
      { name: "Piano", color: "#43aa8b" },
    ],
    artists: ["Yiruma", "Ludovico Einaudi", "Ólafur Arnalds"],
  },

  {
    id: 11,
    name: "90s Throwback",
    creator: "Neha",
    cover: "Retro cassette playlist cover",
    songs: 58,
    duration: 205,
    liked: true,
    downloaded: true,
    explicit: false,
    userRating: 5,
    genres: [
      { name: "90s", color: "#ffbe0b" },
      { name: "Classic Pop", color: "#fb5607" },
    ],
    artists: ["Backstreet Boys", "Britney Spears", "NSYNC"],
  },

  {
    id: 12,
    name: "Jazz Lounge",
    creator: "Spotify",
    cover: "Elegant jazz club playlist cover",
    songs: 38,
    duration: 155,
    liked: false,
    downloaded: true,
    explicit: false,
    userRating: 4,
    genres: [
      { name: "Jazz", color: "#7b2cbf" },
      { name: "Blues", color: "#9d4edd" },
    ],
    artists: ["Miles Davis", "John Coltrane", "Norah Jones"],
  },

  {
    id: 13,
    name: "Festival Anthems",
    creator: "DJ Max",
    cover: "Festival crowd playlist cover",
    songs: 70,
    duration: 275,
    liked: true,
    downloaded: false,
    explicit: true,
    userRating: 5,
    genres: [
      { name: "EDM", color: "#00bbf9" },
      { name: "House", color: "#00f5d4" },
    ],
    artists: ["Avicii", "Kygo", "Zedd"],
  },

  {
    id: 14,
    name: "Sleep Sounds",
    creator: "Nature",
    cover: "Moon and forest playlist cover",
    songs: 20,
    duration: 480,
    liked: false,
    downloaded: true,
    explicit: false,
    userRating: 4,
    genres: [
      { name: "Sleep", color: "#4361ee" },
      { name: "Nature", color: "#4cc9f0" },
    ],
    artists: ["Ocean Waves", "Rain Sounds", "Forest Ambience"],
  },

  {
    id: 15,
    name: "Top Hits 2026",
    creator: "Spotify",
    cover: "Modern chart hits playlist cover",
    songs: 50,
    duration: 180,
    liked: true,
    downloaded: false,
    explicit: true,
    userRating: 5,
    genres: [
      { name: "Pop", color: "#ff006e" },
      { name: "Trending", color: "#8338ec" },
    ],
    artists: ["Olivia Rodrigo", "Taylor Swift", "Sabrina Carpenter"],
  },
];
function App() {
  return (
    <div>
      Music PlayList Manager
      <ProgressBar />;
      <PlayListViewer />;
    </div>
  );
}

function ProgressBar() {}
function PlayListViewer() {
  return (
    <div>
      <PlaylistCard />
    </div>
  );
}
function PlaylistCard() {}
export default App;
