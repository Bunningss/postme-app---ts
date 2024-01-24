import Button from "../Button/Button";
import Container from "../Container/Container";
import Header from "../Header/Header";
import "./Hero.css";
import { useNav } from "../../libs/hooks";

const Hero: React.FC = () => {
  const { intNav, extNav } = useNav();
  return (
    <section>
      <Container>
        <div className="hero">
          <div className="hero-content">
            <Header
              primaryHeader="An example app built using React.js 18, typescript."
              taglineHeader="I'm building a web app with React.js 18 and typescript. Aim of the project is to learn typescript."
            />
            <div className="action-buttons">
              <Button
                secondary
                label="get started"
                action={() => intNav("login")}
              />
              <Button
                label="github"
                action={() => extNav("github.com/Bunningss")}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
