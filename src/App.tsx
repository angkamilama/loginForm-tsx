import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { ItemContext, userDataType } from "./context/ItemContext";
import { useState, FormEvent, ChangeEvent } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState<userDataType>({ name: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({ name: userName });
  };

  return (
    <ItemContext.Provider value={userData}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
        <button>Submit</button>
      </form>
      <Child1 />
      <Child2 />
    </ItemContext.Provider>
  );
}

export default App;
