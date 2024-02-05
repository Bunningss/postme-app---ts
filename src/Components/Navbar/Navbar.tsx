import { useNav } from "../../libs/hooks";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import UserMenu from "../User/UserMenu/UserMenu";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { intNav } = useNav();
  let user = true;

  return (
    <div className="navbar-wrapper">
      <Container>
        <div className="navbar">
          <div className="col">
            <Logo />
          </div>
          <div className="col">Navbar Links</div>
          <div className="col">
            {user ? (
              <UserMenu />
            ) : (
              <Button label="login" action={() => intNav("login")} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
