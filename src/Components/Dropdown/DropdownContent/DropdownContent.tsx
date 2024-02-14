import "./DropdownContent.css";

interface DropdownContentProps {
  children: React.ReactNode;
  setOpen: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  setOpen,
}) => {
  return (
    <div className="dropdown-content" onClick={setOpen}>
      {children}
    </div>
  );
};

export default DropdownContent;
