import { useState, useContext } from "react";

import themeContext from "../../themeContext/themeContext";

import myProjectsList from "./myProjectsList";
import { MdDoubleArrow } from "react-icons/md";

import {
  ProjectsSectionContainer,
  ProjectContainer,
  TextContainer,
  TextHeading,
  TextSubNote,
  FilterContainer,
  FilterButton,
  Projects,
  ProjectsBtn,
} from "./styledComponents";

import ProjectCard from "../ProjectCard";

function ProjectsSection() {
  const { isDarkMode } = useContext(themeContext);
  const [projects, setProjects] = useState({
    activeCategory: "ALL",
    projectCardList: myProjectsList,
  });

  const { projectCardList, activeCategory } = projects;

  const onChangeCategory = (event) => {
    const selectedCategory = event.target.name;

    if (selectedCategory === "ALL") {
      setProjects({
        activeCategory: "ALL",
        projectCardList: myProjectsList,
      });
    } else {
      const filterProjects = myProjectsList.filter(
        (eachProject) => eachProject.category === selectedCategory
      );
      setProjects({
        activeCategory: selectedCategory,
        projectCardList: filterProjects,
      });
    }
  };

  return (
    <ProjectsSectionContainer id="projects" isDarkMode={isDarkMode}>
      <ProjectContainer>
        <TextContainer>
          <TextHeading>Featured Projects</TextHeading>
          <TextSubNote>Some Projects I have worked on</TextSubNote>
        </TextContainer>
        <ProjectContainer>
          <FilterContainer isDarkMode={isDarkMode}>
            <FilterButton
              type="button"
              name="ALL"
              onClick={onChangeCategory}
              isactive={activeCategory === "ALL"}
            >
              ALL
            </FilterButton>
            <FilterButton
              type="button"
              name="PORTFOLIO"
              onClick={onChangeCategory}
              isactive={activeCategory === "PORTFOLIO"}
            >
              PORTFOLIO
            </FilterButton>
            {/* <FilterButton
              type="button"
              name="ECOMMERCE"
              onClick={onChangeCategory}
              isactive={activeCategory === "ECOMMERCE"}
            >
              ECOMMERCE
            </FilterButton> 
            <FilterButton
              type="button"
              name="PRODUCTIVITY"
              onClick={onChangeCategory}
              isactive={activeCategory === "PRODUCTIVITY"}
            >
              PRODUCTIVITY
            </FilterButton>*/}
          </FilterContainer>
          <Projects>
            {projectCardList.map((project) => (
              <ProjectCard key={project.id} projectDeatils={project} />
            ))}
          </Projects>
        </ProjectContainer>
      </ProjectContainer>
      <ProjectsBtn>
        <a
          href="https://github.com/vijaypotnuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>See More Work</span>
          <MdDoubleArrow
            style={{
              fontSize: "20px",
              marginLeft: "7px",
            }}
          />
        </a>
      </ProjectsBtn>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
