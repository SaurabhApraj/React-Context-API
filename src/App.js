import React, { createContext, useState, useEffect } from "react";
import CompoA from "./components/CompoA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("clicked");
  }, [num]);

  return (
    <>
      <FirstName.Provider value={"Saurabh"}>
        <LastName.Provider value={"Apraj"}>
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click {nums}
      </button>
    </>
  );
};

export default App;
export { FirstName, LastName };
