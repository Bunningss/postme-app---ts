import { useContext } from "react";
import { PostProps } from "../Context/types";
import Store from "../Context/Store";
import { useNav } from "./useNavigation";

export const usePosts = () => {
  const { setPosts } = useContext(Store);
  const { internalNavigation } = useNav();

  // add new post
  const addPost = (data: PostProps) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...data,
        date: Date().toString(),
        id: (Math.random() + 1) * 1200 * 23000,
      },
    ]);

    internalNavigation("dashboard");
  };

  //Delete post
  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return { addPost, deletePost };
};
