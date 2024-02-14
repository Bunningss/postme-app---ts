import "./Separator.css";

interface SeparatorProps {
  children: React.ReactNode;
}

const Separator: React.FC<SeparatorProps> = ({ children }) => {
  return <div className="separator">{children}</div>;
};

export default Separator;
