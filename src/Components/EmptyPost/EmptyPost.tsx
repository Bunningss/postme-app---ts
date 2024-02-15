import "./EmptyPost.css";
import plus from "../../assets/icons/plus.png";
import Button from "../Button/Button";
import Header from "../Header/Header";

const EmptyPost: React.FC = () => {
  return (
    <div className="empty-post">
      <div className="empty-post-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      </div>
      <Header
        title="no posts created"
        tagline="You don't have any posts yet. Start creating content."
        titleCenter
        taglineCenter
      />
      <Button label="new post" icon={plus} />
    </div>
  );
};

export default EmptyPost;
