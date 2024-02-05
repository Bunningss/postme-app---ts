import "./User.css";
import placeholder from "../../assets/images/woman-legs-pink-pants-up-air.jpg";

const User: React.FC = () => {
  return (
    <div className="user">
      <img src={placeholder} alt="User profile" className="user-profile" />
    </div>
  );
};

export default User;
