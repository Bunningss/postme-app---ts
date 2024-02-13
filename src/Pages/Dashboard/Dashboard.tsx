import Container from "../../Components/Container/Container";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div className="dashboard">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="dashboard-content">Other content</div>
      </div>
    </Container>
  );
};

export default Dashboard;
