import Container from "../Container/Container";
import Title from "../Title/Title";
import "./Modal.css";

interface ModalProps {
  content: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({ content }) => {
  return (
    <div className="modal">
      <div className="modal-title">
        <Title title="login" center />
      </div>
      <div className="modal-content">
        <Container>{content}</Container>
      </div>
    </div>
  );
};

export default Modal;
