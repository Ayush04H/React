import { useState } from "react";
import "./App.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "T-Shirts", quantity: 8, packed: true },
  { id: 4, description: "Jeans", quantity: 3, packed: false },
  { id: 5, description: "Jackets", quantity: 2, packed: true },
  { id: 6, description: "Shoes", quantity: 2, packed: false },
  { id: 7, description: "Toothbrush", quantity: 2, packed: true },
  { id: 8, description: "Toothpaste", quantity: 1, packed: false },
  { id: 9, description: "Phone Charger", quantity: 2, packed: true },
  { id: 10, description: "Laptop", quantity: 1, packed: false },
  { id: 11, description: "Laptop Charger", quantity: 1, packed: true },
  { id: 12, description: "Headphones", quantity: 1, packed: false },
  { id: 13, description: "Power Bank", quantity: 1, packed: true },
  { id: 14, description: "Water Bottle", quantity: 2, packed: false },
  { id: 15, description: "Sunglasses", quantity: 2, packed: true },
  { id: 16, description: "Umbrella", quantity: 1, packed: false },
  { id: 17, description: "Medicines", quantity: 5, packed: true },
  { id: 18, description: "Travel Pillow", quantity: 2, packed: false },
  { id: 19, description: "Camera", quantity: 1, packed: true },
  { id: 20, description: "Snacks", quantity: 10, packed: false },
];
function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form() {
  //Piece of State Step 1
  //Use element in the component
  //Update teh state variable
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do You need for the Trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items , and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
