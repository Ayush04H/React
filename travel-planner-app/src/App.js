import { useState } from "react";
import "./App.css";
import TravelDashboard from "./TravelDashboard";
import Button from "./Button";
import FooterStats from "./FooterStats";
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
  {
    id: 5,
    destination: "New York",
    country: "USA",
    image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=900",
    days: 5,
    budget: 2800,
    spent: 2100,
    completed: false,
    favourite: true,
    visaRequired: true,
    booked: true,
    weather: "Cold",
    transport: "Flight",
    activities: [
      { name: "Times Square", color: "#2563eb" },
      { name: "Central Park", color: "#16a34a" },
      { name: "Broadway", color: "#9333ea" },
    ],
    hotels: ["The Plaza", "Hilton Midtown"],
  },

  {
    id: 6,
    destination: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    days: 4,
    budget: 2200,
    spent: 900,
    completed: false,
    favourite: false,
    visaRequired: false,
    booked: true,
    weather: "Hot",
    transport: "Flight",
    activities: [
      { name: "Burj Khalifa", color: "#f59e0b" },
      { name: "Desert Safari", color: "#dc2626" },
      { name: "Dubai Mall", color: "#2563eb" },
    ],
    hotels: ["Atlantis", "JW Marriott"],
  },

  {
    id: 7,
    destination: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900",
    days: 6,
    budget: 3100,
    spent: 3100,
    completed: true,
    favourite: true,
    visaRequired: true,
    booked: true,
    weather: "Rainy",
    transport: "Flight",
    activities: [
      { name: "Big Ben", color: "#2563eb" },
      { name: "London Eye", color: "#ec4899" },
      { name: "Buckingham", color: "#16a34a" },
    ],
    hotels: ["Park Plaza", "The Savoy"],
  },

  {
    id: 8,
    destination: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900",
    days: 5,
    budget: 2000,
    spent: 1400,
    completed: false,
    favourite: false,
    visaRequired: true,
    booked: false,
    weather: "Sunny",
    transport: "Train",
    activities: [
      { name: "Colosseum", color: "#9333ea" },
      { name: "Trevi Fountain", color: "#2563eb" },
    ],
    hotels: ["Roma Hotel", "Imperial Inn"],
  },

  {
    id: 9,
    destination: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900",
    days: 9,
    budget: 4200,
    spent: 2600,
    completed: false,
    favourite: true,
    visaRequired: true,
    booked: true,
    weather: "Windy",
    transport: "Flight",
    activities: [
      { name: "Opera House", color: "#06b6d4" },
      { name: "Bondi Beach", color: "#16a34a" },
      { name: "Harbour Bridge", color: "#dc2626" },
    ],
    hotels: ["Sydney Harbour Hotel", "Hyatt Regency"],
  },

  {
    id: 10,
    destination: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900",
    days: 4,
    budget: 1800,
    spent: 1200,
    completed: false,
    favourite: true,
    visaRequired: false,
    booked: true,
    weather: "Humid",
    transport: "Flight",
    activities: [
      { name: "Marina Bay", color: "#2563eb" },
      { name: "Gardens", color: "#16a34a" },
      { name: "Sentosa", color: "#9333ea" },
    ],
    hotels: ["Marina Bay Sands", "Swissotel"],
  },

  {
    id: 11,
    destination: "Istanbul",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=900",
    days: 7,
    budget: 1700,
    spent: 900,
    completed: false,
    favourite: false,
    visaRequired: true,
    booked: false,
    weather: "Pleasant",
    transport: "Flight",
    activities: [
      { name: "Blue Mosque", color: "#2563eb" },
      { name: "Grand Bazaar", color: "#dc2626" },
    ],
    hotels: ["Istanbul Palace", "Grand Hotel"],
  },

  {
    id: 12,
    destination: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?w=900",
    days: 8,
    budget: 2600,
    spent: 1800,
    completed: false,
    favourite: true,
    visaRequired: true,
    booked: true,
    weather: "Sunny",
    transport: "Flight",
    activities: [
      { name: "Table Mountain", color: "#16a34a" },
      { name: "Safari", color: "#f59e0b" },
      { name: "Waterfront", color: "#2563eb" },
    ],
    hotels: ["Cape Grace", "The Commodore"],
  },

  {
    id: 13,
    destination: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900",
    days: 6,
    budget: 2300,
    spent: 2300,
    completed: true,
    favourite: false,
    visaRequired: true,
    booked: true,
    weather: "Tropical",
    transport: "Flight",
    activities: [
      { name: "Christ Statue", color: "#2563eb" },
      { name: "Copacabana", color: "#06b6d4" },
    ],
    hotels: ["Rio Palace", "Hilton Copacabana"],
  },

  {
    id: 14,
    destination: "Kathmandu",
    country: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900",
    days: 5,
    budget: 1200,
    spent: 1600,
    completed: false,
    favourite: false,
    visaRequired: false,
    booked: true,
    weather: "Cool",
    transport: "Car",
    activities: [
      { name: "Pashupatinath", color: "#dc2626" },
      { name: "Boudhanath", color: "#9333ea" },
      { name: "Hiking", color: "#16a34a" },
    ],
    hotels: ["Himalayan Inn", "Everest Hotel"],
  },

  {
    id: 15,
    destination: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
    days: 7,
    budget: 2700,
    spent: 1500,
    completed: false,
    favourite: true,
    visaRequired: true,
    booked: false,
    weather: "Sunny",
    transport: "Cruise",
    activities: [
      { name: "Sunset Cruise", color: "#f59e0b" },
      { name: "Oia Village", color: "#2563eb" },
      { name: "Beach", color: "#06b6d4" },
    ],
    hotels: ["Blue Dome Resort", "Sunset Suites"],
  },
];
function App() {
  const [toggle, setToggle] = useState(true);
  function handleToggle(toggle) {
    setToggle((s) => !s);
  }
  return (
    <div>
      <Button onClick={handleToggle}>{toggle ? "Close" : "Open"}</Button>

      {toggle && (
        <>
          <TravelDashboard trips={trips} />

          <FooterStats trips={trips} />
        </>
      )}
    </div>
  );
}

export default App;
