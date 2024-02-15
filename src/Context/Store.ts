import React, { SetStateAction, createContext } from "react";

interface StoreProps {
  sidebarSelected: string;
  setSidebarSelected: React.Dispatch<SetStateAction<string>>;
}

const Store = createContext<StoreProps>({
  sidebarSelected: "",
  setSidebarSelected: () => {},
});

export default Store;
