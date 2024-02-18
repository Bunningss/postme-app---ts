export interface PostProps {
  id: number;
  title: string;
  postContent: string;
  date: string;
}

export interface StoreProps {
  sidebarSelected: string;
  setSidebarSelected: React.Dispatch<React.SetStateAction<string>>;
  posts: PostProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}
