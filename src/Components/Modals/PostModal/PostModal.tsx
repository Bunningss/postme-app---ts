import "./PostModal.css";

interface PostModalProps {
  children: React.ReactNode;
}

const PostModal: React.FC<PostModalProps> = ({ children }) => {
  return <div className="post-modal">{children}</div>;
};

export default PostModal;
