import React, { createContext, useState } from "react";
import { student } from "./utils/sidebar";
export const MahsulotlarContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState(student);
  return (
    <MahsulotlarContext.Provider value={[data, setData]}>
      {children}
    </MahsulotlarContext.Provider>
  );
};
