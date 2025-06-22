import React, { useState } from "react";
import OpenBuySellWindow from "./OpenBuySellWindow.js";

const OpenBuySellProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(""); // ✅ Define these before using
  const [stockName , setStockName] = useState("")

  return (
    <OpenBuySellWindow.Provider value={{ isOpen, setIsOpen, type, setType  , stockName , setStockName}}>
      {children}
    </OpenBuySellWindow.Provider>
  );
};

export default OpenBuySellProvider;
