import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => (props.isDarkMode ? "#0a0a1f" : "#f4f4f4")};
    font-family: "Jost", sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`;
