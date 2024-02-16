import "./Post.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.png";

const Post: React.FC = () => {
  return (
    <Container>
      <div className="postpage-wrapper">
        <form action="" className="postpage-main">
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
              name=""
              placeholder="Post Title"
            ></input>
            <textarea
              className="postpage-content"
              placeholder="Type here to write your post..."
            ></textarea>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Post;
