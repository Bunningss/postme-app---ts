import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Post.css";
import DropdownWrapper from "../Dropdown/DropdownWrapper/DropdownWrapper";
import BarItem from "../BarItem/BarItem";
import DropdownSeparator from "../Dropdown/DropdownSeparator/DropdownSeparator";
import { PostProps } from "../../Context/types";
import { usePosts } from "../../hooks/usePosts";

interface PostPageProps {
  post: PostProps;
}

const Post: React.FC<PostPageProps> = ({ post }) => {
  const { deletePost } = usePosts();
  const bodyContent: JSX.Element = (
    <div>
      <BarItem item={{ label: "edit" }} />
      <DropdownSeparator />
      <BarItem item={{ label: "delete" }} action={() => deletePost(post.id)} />
    </div>
  );

  return (
    <div className="post-wrapper">
      <Container>
        <div className="post">
          <div className="post-details">
            <Link to="/post">
              <h6 className="post-title">{post.title}</h6>
            </Link>
            <p className="post-date">{post.date}</p>
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
