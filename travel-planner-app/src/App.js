import "./App.css";
import TravelDashboard from "./TravelDashboard";
const trips = [
  {
    id: 1,

    destination: "Paris",

    country: "France",

    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900",

    days: 6,

    budget: 1850,

    spent: 980,

    completed: false,

    favourite: true,

    visaRequired: true,

    booked: true,

    weather: "Sunny",

    transport: "Flight",

    activities: [
      { name: "Eiffel Tower", color: "#2563eb" },
      { name: "Louvre", color: "#e11d48" },
      { name: "Cafe Tour", color: "#16a34a" },
    ],

    hotels: ["Hotel Le Bristol", "Pullman Paris"],
  },

  {
    id: 2,

    destination: "Tokyo",

    country: "Japan",

    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900",

    days: 8,

    budget: 3200,

    spent: 3200,

    completed: true,

    favourite: false,

    visaRequired: false,

    booked: true,

    weather: "Cloudy",

    transport: "Flight",

    activities: [
      { name: "Shibuya", color: "#9333ea" },
      { name: "Mount Fuji", color: "#f97316" },
      { name: "Anime Tour", color: "#06b6d4" },
    ],

    hotels: ["APA Hotel", "Hilton Tokyo"],
  },

  {
    id: 3,

    destination: "Swiss Alps",

    country: "Switzerland",

    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",

    days: 5,

    budget: 2500,

    spent: 1100,

    completed: false,

    favourite: true,

    visaRequired: true,

    booked: false,

    weather: "Snow",

    transport: "Train",

    activities: [
      { name: "Skiing", color: "#2563eb" },
      { name: "Cable Car", color: "#0f766e" },
    ],

    hotels: ["Alpine Resort", "Snow Peak Lodge"],
  },

  {
    id: 4,

    destination: "Bali",

    country: "Indonesia",

    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",

    days: 7,

    budget: 1700,

    spent: 650,

    completed: false,

    favourite: false,

    visaRequired: false,

    booked: false,

    weather: "Tropical",

    transport: "Flight",

    activities: [
      { name: "Beach", color: "#06b6d4" },
      { name: "Temple", color: "#dc2626" },
      { name: "Surfing", color: "#16a34a" },
    ],

    hotels: ["Bali Resort", "Ocean Paradise"],
  },
];
function App() {
  return (
    <div>
      <TravelDashboard trips={trips} />
    </div>
  );
}

export default App;
