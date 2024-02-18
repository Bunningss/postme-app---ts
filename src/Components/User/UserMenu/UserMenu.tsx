import "./UserMenu.css";
import User from "../User";
import DropdownWrapper from "../../Dropdown/DropdownWrapper/DropdownWrapper";
import BarItem from "../../BarItem/BarItem";
import DropdownSeparator from "../../Dropdown/DropdownSeparator/DropdownSeparator";
import { DropdownItemsProps } from "../../../libs/types";
import { useContext } from "react";
import Store from "../../../Context/Store";

const UserMenu: React.FC = () => {
  const { sidebarSelected, setSidebarSelected } = useContext(Store);

  const dropdownItems: DropdownItemsProps[] = [
    {
      label: "posts",
      href: "/dashboard",
    },
    {
      label: "billing",
      href: "/dashboard",
    },
    {
      label: "settings",
      href: "/dashboard",
    },
  ];

  const body: JSX.Element = (
    <>
      <div className="usermenu-header">
        <h4 className="username">John Doe</h4>
        <h6 className="email">mahmudovi183@gmail.com</h6>
      </div>
      <DropdownSeparator />
      <div className="usermenu-main">
        {dropdownItems.map((item, indx) => (
          <BarItem
            key={indx}
            item={item}
            selected={sidebarSelected}
            setSelected={setSidebarSelected}
          />
        ))}
      </div>
      <DropdownSeparator />
      <div className="usermenu-footer">
        <BarItem item={{ label: "logout" }} />
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
