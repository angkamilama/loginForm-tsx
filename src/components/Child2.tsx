import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

function Child2() {
  const user = useContext(ItemContext);

  return <div>{user?.name ? <p>Name: {user.name}</p> : ""}</div>;
}

export default Child2;
