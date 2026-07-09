import Button from "./Button";
function FriendsList({ friends, selectedFriend, setSelectedFriend }) {
  function handleSelectFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  }
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelectFriend={handleSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, handleSelectFriend }) {
  return (
    <li>
      <Image source={friend.image} alt={friend.name} />

      <Name name={friend.name} />

      <Balance name={friend.name} balance={friend.balance} />

      <Button onClick={() => handleSelectFriend(friend)}>Select</Button>
    </li>
  );
}

function Image({ source, alt }) {
  return <img src={source} alt={alt} />;
}

function Name({ name }) {
  return <h3>{name}</h3>;
}

function Balance({ name, balance }) {
  let message;
  let className;

  if (balance < 0) {
    className = "red";
    message = `You owe ${name} ₹${Math.abs(balance)}`;
  } else if (balance > 0) {
    className = "green";
    message = `${name} owes you ₹${balance}`;
  } else {
    className = "gray";
    message = `You and ${name} are even.`;
  }

  return <p className={className}>{message}</p>;
}
export default FriendsList;
