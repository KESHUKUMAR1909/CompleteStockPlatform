import { createContext } from "react";

// Define context with default values (no undefined variables)
const OpenBuySellWindow = createContext({
  isOpen: false,
  setIsOpen: () => {},
  type: "",
  setType: () => {},
  stockName: "",
  setStockName: () => {},
});

export default OpenBuySellWindow;
