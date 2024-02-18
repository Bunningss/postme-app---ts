import { useState } from "react";
import "./Input.css";

interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errorMsg: string;
  fullWidth?: boolean;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  required,
  errorMsg,
  fullWidth,
  value,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <input
      className={fullWidth ? "input full" : "input"}
      type={type}
      placeholder={placeholder}
      required={required}
      onBlur={handleFocus}
      data-focused={focused}
      value={value}
    />
  );
};

export default Input;
