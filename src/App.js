import React, { createContext } from "react";
import CompoA from "./components/CompoA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Saurabh"}>
        <LastName.Provider value={"Apraj"}>
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
