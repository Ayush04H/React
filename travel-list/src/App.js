import { useState } from "react";
import "./App.css";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "T-Shirts", quantity: 8, packed: true },
//   { id: 4, description: "Jeans", quantity: 3, packed: false },
//   { id: 5, description: "Jackets", quantity: 2, packed: true },
//   { id: 6, description: "Shoes", quantity: 2, packed: false },
//   { id: 7, description: "Toothbrush", quantity: 2, packed: true },
//   { id: 8, description: "Toothpaste", quantity: 1, packed: false },
//   { id: 9, description: "Phone Charger", quantity: 2, packed: true },
//   { id: 10, description: "Laptop", quantity: 1, packed: false },
//   { id: 11, description: "Laptop Charger", quantity: 1, packed: true },
//   { id: 12, description: "Headphones", quantity: 1, packed: false },
//   { id: 13, description: "Power Bank", quantity: 1, packed: true },
//   { id: 14, description: "Water Bottle", quantity: 2, packed: false },
//   { id: 15, description: "Sunglasses", quantity: 2, packed: true },
//   { id: 16, description: "Umbrella", quantity: 1, packed: false },
//   { id: 17, description: "Medicines", quantity: 5, packed: true },
//   { id: 18, description: "Travel Pillow", quantity: 2, packed: false },
//   { id: 19, description: "Camera", quantity: 1, packed: true },
//   { id: 20, description: "Snacks", quantity: 10, packed: false },
// ];
function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form({ handleAddItems }) {
  //Piece of State Step 1
  //Use element in the component
  //Update teh state variable
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
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
function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option values="input">Sort by Input Order</option>
          <option values="desciption">Sort by Description</option>
          <option values="packed">Sort by Packed Status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          handleToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing list please</em>
      </p>
    );
  const itemCount = items.length;
  const packedCount = items.reduce(
    (acc, curr) => (curr.packed ? acc + 1 : acc),
    0,
  );
  const percentage = Math.round((packedCount / itemCount) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything ! Ready to Go ✈️"
          : `You have ${itemCount} items , and you already packed ${packedCount} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}

export default App;
