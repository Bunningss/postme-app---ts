import { useState } from "react";
import Store from "./Store";
import { PostProps } from "./types";
import { usePosts } from "../hooks/usePosts";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [sidebarSelected, setSidebarSelected] = useState<string>("posts");
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
