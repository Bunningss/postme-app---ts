import Button from "../Button/Button";
import Container from "../Container/Container";
import Header from "../Header/Header";
import "./Hero.css";
import { useNav } from "../../hooks/useNavigation";
import Separator from "../Separator/Separator";

const Hero: React.FC = () => {
  const { internalNavigation, externalNavigation } = useNav();
  return (
    <section>
      <Container>
        <div className="hero">
          <div className="hero-content">
            <Separator>
              <Header
                primary="An example app built using React.js 18, typescript."
                tagline="I'm building a web app with React.js 18 and typescript. Aim of the project is to learn typescript."
                primaryHeaderCenter
                taglineCenter
              />
            </Separator>
            <div className="action-buttons">
              <Button
                secondary
                label="get started"
                action={() => internalNavigation("login")}
              />
              <Button
                label="github"
                action={() => externalNavigation("github.com/Bunningss")}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
