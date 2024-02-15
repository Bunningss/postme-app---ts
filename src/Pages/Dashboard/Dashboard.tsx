import "./Dashboard.css";
import plus from "../../assets/icons/plus.png";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PostModal from "../../Components/Modals/PostModal/PostModal";
import EmptyPost from "../../Components/EmptyPost/EmptyPost";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div className="dashboard">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Container>
            <div className="dashboard-header">
              <Header title="posts" tagline="create and manage posts." />
              <Button label="new post" secondary icon={plus} />
            </div>
            <PostModal>
              <EmptyPost />
            </PostModal>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
