import "./Sidebar.css";
import Container from "../Container/Container";
import DropdownItem from "../BarItem/BarItem";
import doc from "../../assets/icons/doc.png";
import settings from "../../assets/icons/settings.png";
import card from "../../assets/icons/card.png";
import { SidebarItemsProps } from "../../libs/types";

const Sidebar: React.FC = () => {
  const sidebarItems: SidebarItemsProps[] = [
    {
      label: "posts",
      icon: doc,
    },
    {
      label: "billing",
      icon: card,
    },
    {
      label: "settings",
      icon: settings,
    },
  ];

  return (
    <div className="sidebar">
      <Container>
        {sidebarItems.map((item, indx) => (
          <DropdownItem key={indx} item={item} />
        ))}
      </Container>
    </div>
  );
};

export default Sidebar;
