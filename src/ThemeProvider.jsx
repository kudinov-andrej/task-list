import React, { useState } from 'react';
import ThemeContext from './context/TeameContext';


const ThemeProvider = ({ children }) => {
  const lightTheme = {
    backgroundColor: "white",
    textColor: "#282c34",
    fill: "black",
    stroke: "black"
    
  };

  const darkTheme = {
    backgroundColor: "#282c34",
    textColor: "white",
    fill: "white",
    stroke: "white"
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Задаем значение theme
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;