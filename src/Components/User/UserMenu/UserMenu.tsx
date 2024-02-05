import "./UserMenu.css";
import User from "../User";
import DropdownWrapper from "../../Dropdown/DropdownWrapper/DropdownWrapper";
import DropdownItem from "../../Dropdown/DropdownItem/DropdownItem";
import { Link } from "react-router-dom";
import DropdownSeparator from "../../Dropdown/DropdownSeparator/DropdownSeparator";

const UserMenu: React.FC = () => {
  const body = (
    <>
      <div className="usermenu-content">
        <h4 className="username">John Doe</h4>
        <h6 className="email">example@email.com</h6>
      </div>
      <DropdownSeparator />
      <DropdownItem>
        <Link to="/dashboard">Dashboard</Link>
      </DropdownItem>
      <DropdownItem>
        <Link to="/billing">Billing</Link>
      </DropdownItem>
      <DropdownItem>
        <Link to="/settings">Settings</Link>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Logout</DropdownItem>
    </>
  );
  return (
    <DropdownWrapper bodyContent={body}>
      <User />
    </DropdownWrapper>
  );
};

export default UserMenu;
