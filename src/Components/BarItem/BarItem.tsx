import { Link } from "react-router-dom";
import "./BarItem.css";

interface DropdownItemProps {
  item: {
    label: string;
    icon?: string;
    href?: string;
  };
}

const DropdownItem: React.FC<DropdownItemProps> = ({ item }) => {
  return (
    <div className="dropdown-item">
      <Link to={item?.href ? item?.href : ""}>
        {item?.icon && <img src={item?.icon} alt="" className="sidebar-icon" />}
        <span>{item?.label}</span>
      </Link>
    </div>
  );
};

export default DropdownItem;
