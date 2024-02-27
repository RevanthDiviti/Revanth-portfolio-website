import { styled } from "styled-components";

export const ProjectsSectionContainer = styled.section`
  background-color: ${(props) => (props.isDarkMode ? "#010116" : "#f1f1f1")};
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  position: relative;
  padding: 60px 0;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 30px 0 !important;
  }
`;

export const ProjectContainer = styled.div`
  margin-bottom: 20px;
  padding: 0 40px;
  @media (max-width: 908px) {
    margin-bottom: 30px !important;
    padding: 0 25px !important;
  }
  @media (max-width: 349px) {
    padding: 0 25px !important;
  }
`;

export const TextContainer = styled.div``;

export const TextHeading = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;

export const TextSubNote = styled.p`
  font-family: "Roboto Mono", monospace;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  > button {
    color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  }
`;

export const FilterButton = styled.button`
  background: ${(props) => (props.isactive ? "#00d46a" : "transparent")};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.isactive ? "#f6f6f6" : "")};
  margin: 0 8px;
  padding: 10px 14px;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  @media (max-width: 700px) {
    font-size: 11px !important;
    padding: 5px 8px !important;
    margin: 0 5px !important;
  }
  @media (max-width: 349px) {
    font-size: 10px !important;
    padding: 5px 6px !important;
    margin: 0 2px !important;
  }
  &:hover {
    border: 1.5px solid #47b147;
    padding: 12px 16px;
  }
`;

export const Projects = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;
  padding: 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (max-width: 455px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
`;

export const ProjectsBtn = styled.button`
  background-color: #111;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  color: #f1f1f1;
  cursor: pointer;
  outline: none;
  text-align: center;
  height: 40px;
  width: 140px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span {
    transition: all 0.5s ease;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #0ab635;
  }
`;
