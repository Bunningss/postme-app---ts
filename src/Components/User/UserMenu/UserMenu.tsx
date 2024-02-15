import "./UserMenu.css";
import User from "../User";
import DropdownWrapper from "../../Dropdown/DropdownWrapper/DropdownWrapper";
import DropdownItem from "../../BarItem/BarItem";
import DropdownSeparator from "../../Dropdown/DropdownSeparator/DropdownSeparator";
import { DropdownItemsProps } from "../../../libs/types";

const UserMenu: React.FC = () => {
  const dropdownItems: DropdownItemsProps[] = [
    {
      label: "dashboard",
      href: "/dashboard",
    },
    {
      label: "billing",
      href: "/billing",
    },
    {
      label: "settings",
      href: "/settings",
    },
  ];

  const body = (
    <>
      <div className="usermenu-header">
        <h4 className="username">John Doe</h4>
        <h6 className="email">mahmudovi183@gmail.com</h6>
      </div>
      <DropdownSeparator />
      <div className="usermenu-main">
        {dropdownItems.map((item, indx) => (
          <DropdownItem key={indx} item={item} />
        ))}
      </div>
      <DropdownSeparator />
      <div className="usermenu-footer">
        <DropdownItem item={{ label: "logout" }} />
      </div>
    </>
  );
  return (
    <DropdownWrapper bodyContent={body}>
      <User />
    </DropdownWrapper>
  );
};

export default UserMenu;
