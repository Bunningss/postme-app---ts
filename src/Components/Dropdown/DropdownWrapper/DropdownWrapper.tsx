import { useState } from "react";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./DropdownWrapper.css";

interface DropdownWrapperProps {
  children: React.ReactNode;
  bodyContent: JSX.Element;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  children,
  bodyContent,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown-wrapper">
      <div onClick={handleClick}>{children}</div>
      {open && (
        <DropdownContent setOpen={handleClick}>{bodyContent}</DropdownContent>
      )}
    </div>
  );
};

export default DropdownWrapper;
