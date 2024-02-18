import { createContext } from "react";
import { StoreProps } from "./types";

const Store = createContext<StoreProps>({
  sidebarSelected: "",
  setSidebarSelected: () => {},
  posts: [{ id: 0, title: "", postContent: "", date: "" }],
  setPosts: () => {},
});

export default Store;
