import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider.jsx";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <footer className="mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center transition duration-300">
        <span className="inline-flex items-center text-sm text-gray-900 dark:text-gray-100 transition duration-300">
          Made with&nbsp;
          <IoHeart
            className={`text-lg transition duration-300 ${
              currentTheme === "dark" ? "text-gray-100" : "text-neutral-950"
            }`}
            aria-label="Heart Icon"
          />
          &nbsp;by
        </span>
        <span className="text-sm text-yellow-600 dark:text-yellow-500 font-extrabold text-center transition duration-300">
          &nbsp;Nureka Rodrigo
        </span>
      </div>
    </footer>
  );
};

export default Footer;
