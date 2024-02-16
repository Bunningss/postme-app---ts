import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Post.css";
import DropdownWrapper from "../Dropdown/DropdownWrapper/DropdownWrapper";
import BarItem from "../BarItem/BarItem";
import DropdownSeparator from "../Dropdown/DropdownSeparator/DropdownSeparator";

const Post: React.FC = () => {
  const bodyContent: JSX.Element = (
    <div>
      <BarItem item={{ label: "edit" }} />
      <DropdownSeparator />
      <BarItem item={{ label: "delete" }} />
    </div>
  );
  return (
    <div className="post-wrapper">
      <Container>
        <div className="post">
          <div className="post-details">
            <Link to="/post">
              <h6 className="post-title">untitled header</h6>
            </Link>
            <p className="post-date">aug 15, 2024</p>
          </div>
          <DropdownWrapper bodyContent={bodyContent}>
            <div className="post-action">
              <span className="action-toggle"></span>
              <span className="action-toggle"></span>
              <span className="action-toggle"></span>
            </div>
          </DropdownWrapper>
        </div>
      </Container>
    </div>
  );
};

export default Post;
