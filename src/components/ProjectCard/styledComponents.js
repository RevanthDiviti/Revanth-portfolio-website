import styled from "styled-components";

export const ProjectCardContainer = styled.li`
  flex-grow: 1;
  border-radius: 5px;
  color: #f2f2f2;
  cursor: pointer;
  padding: 1rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  min-height: 250px;
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
  background-image: ${(props) => `url(${props.projectImage})`};
  > div {
    display: none;
  }
  &:hover {
    box-shadow: inset 0 100px 1000px 60px #111;
    border: 1.5px solid #47b147;
    min-height: 290px;
    margin: -15px;

    > div {
      display: flex;
    }
  }

  @media (max-width: 600px) and (min-width: 350px) {
    max-height: 240px !important;
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: all 0.4s ease-in-out;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30px;
  text-align: left;
  > h3 {
    font-size: 1.1rem;
  }
  > p {
    font-family: "Roboto Mono", monospace;
    font-size: 0.7rem;
    margin: 10px 0;
    line-height: 1.4;
    text-transform: capitalize;
  }
  @media (max-width: 908px) {
    top: 12px !important;
  }
  @media (max-width: 700px) {
    top: 15px !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    top: 0 !important;
  }
`;

export const Stack = styled.span`
  color: #47b147;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: #f2f2f2;
  font-size: 22px;
`;
