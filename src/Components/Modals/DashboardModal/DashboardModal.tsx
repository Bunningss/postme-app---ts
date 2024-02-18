import "./DashboardModal.css";

interface DashboardModalProps {
  children: React.ReactNode;
}

const DashboardModal: React.FC<DashboardModalProps> = ({ children }) => {
  return <div className="post-modal">{children}</div>;
};

export default DashboardModal;
