import { Link } from "react-router-dom";
import "./BarItem.css";

interface BarItemProps {
  item: {
    label: string;
    icon?: string;
    href?: string;
  };
  selected?: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
  action?: () => void;
}

const BarItem: React.FC<BarItemProps> = ({
  item,
  selected,
  setSelected,
  action,
}) => {
  return (
    <div
      className={
        selected === item.label ? "dropdown-item selected" : "dropdown-item"
      }
      onClick={setSelected ? () => setSelected(item.label) : undefined}
    >
      <Link to={item?.href ? item?.href : ""} onClick={action}>
        {item?.icon && <img src={item?.icon} alt="" className="sidebar-icon" />}
        <span>{item?.label}</span>
      </Link>
    </div>
  );
};

export default BarItem;
