import Button from "../Button/Button";
import Container from "../Container/Container";
import Input from "../Input/Input";
import "./UserSettings.css";

const UserSettings: React.FC = () => {
  return (
    <Container>
      <form>
        <h4 className="settings-title">Your name</h4>
        <p className="settings-tag">
          Please enter your full name or a display name you are comfortable
          with.
        </p>
        <Input type="text" placeholder="John Doe" required errorMsg="" />
        <Button label="save" secondary />
      </form>
    </Container>
  );
};

export default UserSettings;
