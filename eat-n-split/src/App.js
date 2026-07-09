import { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addfriend, setaddfrined] = useState(false);
  function handleFriendAdder() {
    setaddfrined((s) => !s);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
        {addfriend && <FormAddFriend />}
        <Button onClick={handleFriendAdder}>
          {addfriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

function FriendsList({ initialFriends }) {
  return (
    <div>
      <ul>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <Image source={friend.image} alt={friend.name} />
      <Name name={friend.name} />
      <Balance friend={friend} />
      <Button>Select</Button>
    </li>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Image({ source, alt }) {
  return <img src={source} alt={alt} />;
}
function Name({ name }) {
  return <h3>{name}</h3>;
}

function Balance({ friend }) {
  if (friend.balance < 0)
    return (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}
      </p>
    );

  if (friend.balance > 0)
    return (
      <p className="green">
        {friend.name} owes you {friend.balance}
      </p>
    );

  return <p className="gray">You and {friend.name} are even.</p>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label> 🌴 Friend Name</label>
      <input type="text"></input>

      <label> 🌟 Friend Image</label>
      <input type="text"></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split A Bill with X</h2>

      <label> 🌟 Bill Value</label>
      <input type="text"></input>

      <label> 🌟 Your Expense</label>
      <input type="text"></input>

      <label> 🌟 X's Expense</label>
      <input type="text" disabled></input>

      <label> 🌟Who Payed</label>
      <select>
        <option value="user">You</option>
        <option value="frined">X</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}
export default App;
