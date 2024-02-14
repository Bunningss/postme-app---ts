import Container from "../Container/Container";
import Header from "../Header/Header";
import "./Modal.css";

interface ModalProps {
  content: JSX.Element;
  modalTitle: string;
}

const Modal: React.FC<ModalProps> = ({ content, modalTitle }) => {
  return (
    <div className="modal">
      <div className="modal-title">
        <Header title={modalTitle} titleCenter />
      </div>
      <div className="modal-content">
        <Container>{content}</Container>
      </div>
    </div>
  );
};

export default Modal;
