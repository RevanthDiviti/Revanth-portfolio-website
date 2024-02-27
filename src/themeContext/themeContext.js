import React from "react";

const themeContext = React.createContext({
  isDarkMode: false,
  onToggleDarkMode: () => {},
});

export default themeContext;
