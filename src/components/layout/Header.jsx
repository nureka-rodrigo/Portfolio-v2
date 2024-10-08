import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import ThemeButton from "../common/ThemeButton.jsx";
import { ThemeContext } from "../../providers/ThemeProvider.jsx";
import { NavItemsData } from "../../data/NavItemsData.jsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <header
      className={`transition duration-300 fixed top-0 left-0 right-0 z-50 ${
        mobileMenuOpen ? "bg-opacity-50" : ""
      } bg-opacity-30 dark:bg-opacity-30`}
    >
      <nav className="backdrop-blur-lg dark:backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-3 gap-x-8 ">
          <div className="flex lg:flex-1">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="-m-1.5 p-1.5 cursor-pointer"
            >
              <img
                className={`h-10 w-auto transition duration-300 ${
                  currentTheme === "dark" ? "filter invert" : ""
                }`}
                src="/logo.svg"
                alt="Brand Logo"
              />
            </ScrollLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex items-center justify-center p-2.5 rounded-md text-gray-700 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <IoMenu
                className="h-6 w-6 transition duration-300"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {NavItemsData.map((navItem, index) =>
              navItem.download ? (
                <a
                  key={index}
                  href={navItem.link}
                  download
                  className={`text-sm font-semibold leading-6 transition duration-300 cursor-pointer ${
                    navItem.text === "Resume"
                      ? "text-yellow-600 dark:text-yellow-500"
                      : "text-gray-900 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600"
                  }`}
                >
                  {navItem.text}
                </a>
              ) : navItem.link.startsWith("http") ? (
                <Link
                  key={index}
                  to={navItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold leading-6 transition duration-300 cursor-pointer ${
                    navItem.text === "Resume"
                      ? "text-yellow-600 dark:text-yellow-500"
                      : "text-gray-900 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600"
                  }`}
                >
                  {navItem.text}
                </Link>
              ) : (
                <ScrollLink
                  key={index}
                  to={navItem.link}
                  smooth={true}
                  duration={500}
                  className="text-sm font-semibold leading-6 transition duration-300 cursor-pointer text-gray-900 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-600"
                >
                  {navItem.text}
                </ScrollLink>
              )
            )}
          </div>
          <div className="pl-6 pr-2 hidden lg:block">
            <ThemeButton />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-y-0 right-0 z-10 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 h-full bg-gray-100 dark:bg-neutral-950 transition duration-300">
              <div className="flex items-center justify-between">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="-m-1.5 p-1.5 cursor-pointer"
                >
                  <img
                    className={`h-10 w-auto transition duration-300 ${
                      currentTheme === "dark" ? "filter invert" : ""
                    }`}
                    src="/logo.svg"
                    alt="Brand Logo"
                  />
                </ScrollLink>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded-md text-gray-700 dark:text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoMdClose className="h-6 w-6 transition duration-300" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500 dark:divide-gray-700">
                  <div className="space-y-2 py-6">
                    {NavItemsData.map((navItem, index) =>
                      navItem.download ? (
                        <a
                          key={index}
                          href={navItem.link}
                          download
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition duration-300 ${
                            navItem.text === "Resume"
                              ? "text-yellow-600 dark:text-yellow-500"
                              : "text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-900 hover:text-yellow-600 dark:hover:text-yellow-500"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {navItem.text}
                        </a>
                      ) : navItem.link.startsWith("http") ? (
                        <Link
                          key={index}
                          to={navItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition duration-300 ${
                            navItem.text === "Resume"
                              ? "text-yellow-600 dark:text-yellow-500"
                              : "text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-900 hover:text-yellow-600 dark:hover:text-yellow-500"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {navItem.text}
                        </Link>
                      ) : (
                        <ScrollLink
                          key={index}
                          to={navItem.link}
                          smooth={true}
                          duration={500}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition duration-300 hover:bg-gray-200 dark:hover:bg-neutral-900 text-gray-900 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {navItem.text}
                        </ScrollLink>
                      )
                    )}
                  </div>
                  <div className="flex items-center justify-center py-5">
                    <ThemeButton />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
