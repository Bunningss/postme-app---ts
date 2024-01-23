import "./Header.css";

interface HeaderProps {
  primaryHeader?: string;
  taglineHeader?: string;
}

const Header: React.FC<HeaderProps> = ({ primaryHeader, taglineHeader }) => {
  return (
    <div className="headers">
      {primaryHeader && <h2 className="primary-header">{primaryHeader}</h2>}
      {taglineHeader && <h6 className="hero-tagline">{taglineHeader}</h6>}
    </div>
  );
};

export default Header;
