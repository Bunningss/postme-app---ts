import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();

  // handle internal navigation
  const intNav = (url: string) => {
    navigate("/" + url);
  };

  // Handle external navigation
  const extNav = (url: string) => {
    window.open("http://" + url);
  };

  return { intNav, extNav };
};
