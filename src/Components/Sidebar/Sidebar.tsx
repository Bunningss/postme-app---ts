import "./Sidebar.css";
import Container from "../Container/Container";
import BarItem from "../BarItem/BarItem";
import doc from "../../assets/icons/doc.png";
import settings from "../../assets/icons/settings.png";
import card from "../../assets/icons/card.png";
import { SidebarItemsProps } from "../../libs/types";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [sideabarSelected, setSidebarSelected] = useState<string>("posts");

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
          <BarItem
            key={indx}
            item={item}
            selected={sideabarSelected}
            setSelected={setSidebarSelected}
          />
        ))}
      </Container>
    </div>
  );
};

export default Sidebar;
