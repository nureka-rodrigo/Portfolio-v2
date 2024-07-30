import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Define default context values
const defaultValue = {
  currentTheme: "light",
  changeCurrentTheme: () => {},
};

// Create the ThemeContext with the default values
export const ThemeContext = createContext(defaultValue);

const ThemeProvider = ({ children }) => {
  // State to manage the theme, initialized with value from localStorage or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to change the theme and store the new theme in localStorage
  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Effect to add or remove the "dark" class from the body based on the theme
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    // Provide the current theme and the function to change it to the context consumers
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  // Prop type validation to ensure children are provided
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };
