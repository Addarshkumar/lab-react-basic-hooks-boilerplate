import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [mainCount, setMainCount] = useState(50000);
  const [isdark, setdark] = useState(true);

  const decreaseCount = () => {
    setMainCount(mainCount - 1000);
  };

  return (
    <AppContext.Provider
      value={{ mainCount, setMainCount, decreaseCount, isdark, setdark }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
