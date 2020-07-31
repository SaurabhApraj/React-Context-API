import React, { useContext } from "react";
import { FirstName, LastName } from "../App";
const CompoB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <>
      <h1>
        Hi {fname} {lname}
      </h1>
    </>
  );
};

export default CompoB;
