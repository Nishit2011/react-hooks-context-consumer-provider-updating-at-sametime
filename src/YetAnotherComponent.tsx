import React, { useState, useContext } from "react";
import { AppContext } from "./App";

const YetAnotherComponent = () => {
  const contextVal = useContext(AppContext);
  return <div>in Grandchild(Consumer):-{contextVal}</div>;
};

export default YetAnotherComponent;
