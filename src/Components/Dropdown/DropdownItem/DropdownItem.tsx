import "./DropdownItem.css";

interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return <div className="dropdown-item">{children}</div>;
};

export default DropdownItem;
