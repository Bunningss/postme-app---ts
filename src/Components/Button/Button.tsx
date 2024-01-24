import "./Button.css";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  action,
  fullWidth,
}) => {
  return (
    <button
      className={`button ${secondary ? "secondary" : ""} ${
        fullWidth ? "width-full" : ""
      }`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;
