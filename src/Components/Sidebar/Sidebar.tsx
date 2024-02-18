import "./Sidebar.css";
import Container from "../Container/Container";
import BarItem from "../BarItem/BarItem";
import doc from "../../assets/icons/doc.png";
import settings from "../../assets/icons/settings.png";
import card from "../../assets/icons/card.png";
import { SidebarItemsProps } from "../../libs/types";
import { useContext, useState } from "react";
import Store from "../../Context/Store";

const Sidebar: React.FC = () => {
  const { sidebarSelected, setSidebarSelected } = useContext(Store);
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
            selected={sidebarSelected}
            setSelected={setSidebarSelected}
          />
        ))}
      </Container>
    </div>
  );
};

export default Sidebar;
