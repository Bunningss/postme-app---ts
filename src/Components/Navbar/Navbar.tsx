import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <Container>
        <div className="navbar">
          <div className="col">
            <Logo />
          </div>
          <div className="col">Navbar Links</div>
          <div className="col">
            <Button label="login" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
