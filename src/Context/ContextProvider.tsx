import { useState } from "react";
import Store from "./Store";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [sidebarSelected, setSidebarSelected] = useState<string>("posts");
  return (
    <Store.Provider value={{ sidebarSelected, setSidebarSelected }}>
      {children}
    </Store.Provider>
  );
};

export default ContextProvider;
