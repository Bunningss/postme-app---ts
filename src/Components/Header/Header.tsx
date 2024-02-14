import "./Header.css";

interface HeaderProps {
  primary?: string;
  tagline?: string;
  title?: string;
  titleCenter?: boolean;
}

const Header: React.FC<HeaderProps> = ({ primary, tagline, title }) => {
  return (
    <div className="headers">
      {title && <h3 className="title">{title}</h3>}
      {primary && <h2 className="primary-header">{primary}</h2>}
      {tagline && <h6 className="hero-tagline">{tagline}</h6>}
    </div>
  );
};

export default Header;
