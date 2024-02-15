import "./Login.css";
import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import Input from "../../../Components/Input/Input";
import Modal from "../../../Components/Modals/Modal";
import { InputsProps } from "../../../libs/types";
import fb from "../../../assets/icons/facebook.png";

const Login: React.FC = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputs: InputsProps[] = [
    {
      type: "email",
      placeholder: "Enter your email",
      required: true,
      errorMsg: "Please enter your email",
    },
    {
      type: "password",
      placeholder: "Enter your password",
      required: true,
      errorMsg: "Please enter your password",
    },
  ];

  const loginForm: JSX.Element = (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {inputs.map((input, indx) => (
          <Input {...input} key={indx} />
        ))}
        <Button label="continue" fullWidth secondary />
      </form>
      <span className="login-options">Login using social account below</span>

      <Button
        label="continue with google"
        fullWidth
        secondary
        icon={fb}
        iconLabel="google icon"
      />
      <Button
        label="continue with github"
        fullWidth
        secondary
        icon={fb}
        iconLabel="github icon"
      />
    </>
  );
  return (
    <section>
      <Container>
        <div className="login">
          <Modal content={loginForm} modalTitle="login" />
        </div>
      </Container>
    </section>
  );
};

export default Login;
