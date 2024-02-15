import "./Header.css";

interface HeaderProps {
  primary?: string;
  tagline?: string;
  title?: string;
  titleCenter?: boolean;
  primaryHeaderCenter?: boolean;
  taglineCenter?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  primary,
  tagline,
  title,
  titleCenter,
  primaryHeaderCenter,
  taglineCenter,
}) => {
  return (
    <div className="headers">
      {title && (
        <h3 className={titleCenter ? "title center" : "title"}>{title}</h3>
      )}
      {primary && (
        <h2
          className={
            primaryHeaderCenter ? "primary-header center" : "primary-header"
          }
        >
          {primary}
        </h2>
      )}
      {tagline && (
        <h6 className={taglineCenter ? "tagline center" : "tagline"}>
          {tagline}
        </h6>
      )}
    </div>
  );
};

export default Header;
