import { useState } from "react";
import Button from "./Button";
function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");

  // CHANGE 4:
  // Better default avatar.
  const [image, setImage] = useState(
    `https://i.pravatar.cc/48?u=${Date.now()}`,
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      id: Date.now(),

      name,

      image,

      // CHANGE 5:
      // New friends should start with
      // zero balance.
      balance: 0,
    };

    handleAddFriend(newFriend);

    // CHANGE 6:
    // Reset fields after submit.
    setName("");

    setImage(`https://i.pravatar.cc/48?u=${Date.now()}`);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🌴 Friend Name</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌟 Friend Image</label>

      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
