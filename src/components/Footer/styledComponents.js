import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1a" : "#e4e4e4")};
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  font-family: "Roboto Mono", monospace;
  padding: 35px 0;
  text-align: center;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterSocials = styled.div`
  margin: 18px 0;
  @media (max-width: 349px) {
    margin: 15px 0 !important;
  }
`;

export const CopyRight = styled.p`
  margin: 0;
  font-size: 1rem;
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.70rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.5rem !important;
  }
`;
