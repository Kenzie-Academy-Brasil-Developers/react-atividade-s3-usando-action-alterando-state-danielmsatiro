import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  const user = useSelector((state) => state.user);
  return (
    <div>
      <h2>User name: {user.name} </h2>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
