import { Link } from "react-router-dom";
import "./Logo.css";

const Logo: React.FC = () => {
  return (
    <h2 className="logo">
      <Link className="logo-link" to="/">
        postme
      </Link>
    </h2>
  );
};

export default Logo;
