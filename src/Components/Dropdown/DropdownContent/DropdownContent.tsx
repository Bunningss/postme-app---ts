import "./DropdownContent.css";

interface DropdownContentProps {
  children: React.ReactNode;
  setOpen: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = (props) => {
  return (
    <div className="dropdown-content" onClick={props.setOpen}>
      {props.children}
    </div>
  );
};

export default DropdownContent;
