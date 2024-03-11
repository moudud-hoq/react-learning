//State working primary concept with counting 
import { useState } from "react";

const UseState = () => {
  const [myObject, setMyObject] = useState({
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
  });

  const changeAfterClick = () => {
    setMyObject((prevState) => ({
      ...prevState, // Keep all previous state properties and if want to change one value
      //   key1: "Value change 1",
      key2: "Value change 2",
      key3: "Value change 3",
    }));
  };
  return (
    <div>
      <h1>Number: {myObject.key2}</h1>
      <h1>Number: {myObject.key3}</h1>
      <button onClick={changeAfterClick}>Change</button>
    </div>
  );
};

export default UseState;
