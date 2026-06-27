import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <div>
      <header className="header">
        <h1>Fast React Pizza Co</h1>
      </header>
    </div>
  );
};

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>
        Authentic Italian Cusine , 6 Creative disjes to choose from . All from
        our stone oven,all organic , all delicious
      </p>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      /> */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut)
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
  //       <div>
  //         <h3>{pizzaObj.name}</h3>
  //         <p>{pizzaObj.ingredients}</p>
  //         <span>SOLD OUT</span>
  //       </div>
  //     </li>
  //   );

  return (
    // <div>
    //   <img src={props.photoName} alt={props.name}></img>
    //   <h3>{props.name}</h3>
    //   <p>{props.ingredients}</p>
    // </div>
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Sorry we're closed");
  return (
    <div>
      <footer className="footer">
        {/* {isOpen && (
          <div className="order">
            <p>
              It's {new Date().toLocaleTimeString()} We're currently Open , We
              are Open until {closeHour}!
            </p>
            <button className="btn">Order</button>
          </div>
        )}{" "} */}
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            Currently we are Closed !! We are Happy to have you between{" "}
            {openHour} && {closeHour}
          </p>
        )}
      </footer>
    </div>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className="Order">
      <p>
        It's {new Date().toLocaleTimeString()} We're currently Open , We are
        Open until {closeHour}!
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

// New Layer

//Strict mode renders all the compoenents twice in order to found bugs, and also used to check whether we are usign outdated react APIs
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
