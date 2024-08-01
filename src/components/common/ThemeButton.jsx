import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../providers/ThemeProvider.jsx";

const ThemeButton = () => {
  // Accessing the current theme and the function to change the theme from ThemeContext
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        className="h-5 w-5 flex items-center justify-center"
        // Toggling the theme between light and dark
        onClick={() =>
          changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
        }
      >
        {/* Displaying the appropriate icon based on the current theme */}
        {currentTheme === "light" ? (
          <FaSun className="h-full w-auto" /> // Sun icon for light theme
        ) : (
          <FaMoon className="text-white h-4 w-auto" /> // Moon icon for dark theme
        )}
      </button>
    </>
  );
};

export default ThemeButton;
