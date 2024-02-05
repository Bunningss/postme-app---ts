import Container from "../Container/Container";
import Title from "../Title/Title";
import "./Modal.css";

interface ModalProps {
  content: JSX.Element;
  modalTitle: string;
}

const Modal: React.FC<ModalProps> = ({ content, modalTitle }) => {
  return (
    <div className="modal">
      <div className="modal-title">
        <Title title={modalTitle} center />
      </div>
      <div className="modal-content">
        <Container>{content}</Container>
      </div>
    </div>
  );
};

export default Modal;
