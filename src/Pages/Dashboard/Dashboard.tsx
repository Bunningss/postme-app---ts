import "./Dashboard.css";
import plus from "../../assets/icons/plus.png";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardModal from "../../Components/Modals/DashboardModal/DashboardModal";
import EmptyPost from "../../Components/EmptyPost/EmptyPost";
import Post from "../../Components/Post/Post";
import UserSettings from "../../Components/UserSettings/UserSettings";
import { useContext } from "react";
import Store from "../../Context/Store";
import { useNav } from "../../hooks/useNavigation";
import { StoreProps } from "../../Context/types";

const Dashboard: React.FC = () => {
  const { sidebarSelected } = useContext<StoreProps>(Store);
  const { internalNavigation } = useNav();
  const handleButtonClick = () => {
    internalNavigation("post");
  };
  const { posts } = useContext(Store);

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
              <Button
                label="new post"
                secondary
                icon={plus}
                action={handleButtonClick}
              />
            </div>
            <DashboardModal>
              {sidebarSelected === "posts" ? (
                posts.length !== 0 ? (
                  <>
                    {posts.map((post, indx) => (
                      <Post key={indx} post={post} />
                    ))}
                  </>
                ) : (
                  <EmptyPost />
                )
              ) : sidebarSelected === "settings" ? (
                <UserSettings />
              ) : sidebarSelected === "billing" ? null : null}
            </DashboardModal>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
