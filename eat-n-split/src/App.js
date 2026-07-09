import { useState } from "react";
import "./index.css";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FrinedList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

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
  const [addFriend, setAddFriend] = useState(false);

  // ===========================
  // CHANGE 1:
  // Initialize state with initialFriends
  // instead of an empty array.
  // ===========================
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleFriendAdder() {
    setAddFriend((s) => !s);
  }

  // ===========================
  // CHANGE 2:
  // Add new friend to state.
  // ===========================
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);

    // Close the form after adding
    setAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* CHANGE 3:
            Pass state instead of initialFriends */}
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />

        {addFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}

        <Button onClick={handleFriendAdder}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
