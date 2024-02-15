import Modal from "../../../Components/Modals/Modal";
import "./Register.css";

const Register: React.FC = () => {
  const registerContent = <>register content</>;

  return (
    <div>
      <Modal content={registerContent} modalTitle="register" />
    </div>
  );
};

export default Register;
