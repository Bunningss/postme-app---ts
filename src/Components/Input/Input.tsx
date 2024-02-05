import { useState } from "react";
import "./Input.css";

interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errorMsg: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  required,
  errorMsg,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      required={required}
      onBlur={handleFocus}
      data-focused={focused}
    />
  );
};

export default Input;
