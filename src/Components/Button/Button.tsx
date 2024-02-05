import "./Button.css";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  icon?: string;
  iconLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  action,
  fullWidth,
  icon,
  iconLabel,
}) => {
  return (
    <button
      className={`button ${secondary ? "secondary" : ""} ${
        fullWidth ? "width-full" : ""
      }`}
      onClick={action}
    >
      {icon && <img src={icon} alt={iconLabel} className="button-icon" />}
      {label}
    </button>
  );
};

export default Button;
