import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();

  // handle internal navigation
  const internalNavigation = (url: string) => {
    navigate("/" + url);
  };

  // Handle external navigation
  const externalNavigation = (url: string) => {
    window.open("http://" + url);
  };

  return { internalNavigation, externalNavigation };
};
