import {useContext} from "react";
import {ThemeContext} from "../providers/ThemeProvider.jsx";
import {FaMoon, FaSun} from "react-icons/fa";

const ThemeButton = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        className="h-5 w-5 flex items-center justify-center"
        onClick={() =>
          changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
        }
      >
        {currentTheme === "light" ? (
          <FaSun className="h-full w-auto" />
        ) : (
          <FaMoon className="text-white h-4 w-auto" />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
