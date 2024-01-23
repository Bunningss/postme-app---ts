import "./Button.css";

interface ButtonProps {
  label: string;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, secondary }) => {
  return (
    <button className={secondary ? "button secondary" : "button"}>
      {label}
    </button>
  );
};

export default Button;
