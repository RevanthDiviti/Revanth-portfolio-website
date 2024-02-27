import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import Header from "../Header";
import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

import { FaArrowCircleRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import {
  HeroSection,
  InfoContainer,
  MainContainer,
  PersonName,
  RoleType,
  RoleNote,
  MeAnchorLink,
  ScrollUp,
} from "./styledComponents";

function Home() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <>
      <Header />
      {/* Main */}
      <MainContainer isDarkMode={isDarkMode}>
        {/* Hero Section */}
        <HeroSection id="hero">
          <InfoContainer>
            <PersonName>Hi, I'm Revanth Diviti👋</PersonName>
            <RoleType>Full Stack Developer</RoleType>
            <RoleNote>
              Experienced full stack developer proficient in creating robust web
              applications and crafting user-friendly digital solutions.
            </RoleNote>
            <MeAnchorLink href="#about">
              See Why You should Work With Me{" "}
              <FaArrowCircleRight
                style={{
                  marginLeft: "7px",
                }}
              />
            </MeAnchorLink>
          </InfoContainer>
        </HeroSection>
      </MainContainer>
      {/* AboutSection */}
      <AboutSection />
      {/* ProjectsSection */}
      <ProjectsSection />
      {/* ContactSection */}
      <ContactSection />
      {/* Footer */}
      <Footer />
      <ScrollUp aria-label="scroll-up" href="#" isDarkMode={isDarkMode}>
        <MdKeyboardDoubleArrowUp
          style={{
            color: isDarkMode ? "#fff" : "#000",
          }}
        />
      </ScrollUp>
    </>
  );
}

export default Home;
