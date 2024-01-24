import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import Input from "../../../Components/Input/Input";
import Modal from "../../../Components/Modal/Modal";
import "./Login.css";

const Login: React.FC = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const loginForm: JSX.Element = (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter your email" required={true} />
      <Input type="text" placeholder="Enter your password" required={true} />
      <Button label="continue" fullWidth secondary />
    </form>
  );
  return (
    <section>
      <Container>
        <div className="login">
          <Modal content={loginForm} />
        </div>
      </Container>
    </section>
  );
};

export default Login;
