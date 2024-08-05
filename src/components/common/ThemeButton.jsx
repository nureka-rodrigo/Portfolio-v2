import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../../providers/ThemeProvider.jsx";

const ThemeButton = () => {
  // Accessing the current theme and the function to change the theme from ThemeContext
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      className="flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    >
      {/* Displaying the appropriate icon based on the current theme */}
      {currentTheme === "light" ? (
        <FaSun className="text-yellow-600 dark:text-yellow-400 h-5 w-5" />
      ) : (
        <FaMoon className="text-gray-400 dark:text-gray-200 h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeButton;
