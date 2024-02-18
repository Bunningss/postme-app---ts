import { useState } from "react";
import Store from "./Store";
import { PostProps } from "./types";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [sidebarSelected, setSidebarSelected] = useState<string>("");
  const [posts, setPosts] = useState<PostProps[]>([]);
  return (
    <Store.Provider
      value={{ sidebarSelected, setSidebarSelected, posts, setPosts }}
    >
      {children}
    </Store.Provider>
  );
};

export default ContextProvider;
