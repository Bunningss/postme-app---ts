import "./Post.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.png";
import { useState } from "react";
import { PostProps } from "../../Context/types";
import { usePosts } from "../../hooks/usePosts";

const Post: React.FC = () => {
  const { addPost } = usePosts();
  const [values, setValues] = useState<PostProps>({
    id: 0,
    title: "",
    postContent: "",
    date: Date().toLocaleString(),
  });

  const handleValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(values);
  };

  return (
    <Container>
      <div className="postpage-wrapper">
        <form action="" className="postpage-main" onSubmit={handleSubmit}>
          <div className="postpage-nav">
            <Link className="postpage-action" to="/dashboard">
              <img src={arrow} alt="Go back" className="postpage-action-icon" />
              <span>back</span>
            </Link>
            <Button label="save" secondary />
          </div>
          <div className="postpage">
            <input
              className="postpage-title"
              name="title"
              placeholder="Post Title"
              onChange={handleValues}
            ></input>
            <textarea
              name="postContent"
              className="postpage-content"
              placeholder="Type here to write your post..."
              onChange={handleValues}
            ></textarea>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Post;
