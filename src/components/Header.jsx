import {IoMdClose} from "react-icons/io";
import {IoMenu} from "react-icons/io5";
import {Dialog, Popover} from "@headlessui/react";
import {useContext, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import ThemeButton from "./ThemeButton.jsx";
import {ThemeContext} from "../providers/ThemeProvider.jsx";
import {Link, useLocation} from "react-router-dom";

const NavItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Experience",
    link: "#experience",
  },
  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-neutral-950 transition duration-300 ${mobileMenuOpen ? "bg-opacity-50" : ""}`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 gap-x-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className={`h-10 w-auto transition duration-300 ${currentTheme === "dark" ? "filter invert" : ""}`}
                src="/logo.svg"
                alt="Brand"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <IoMenu
                className="h-6 w-6 text-neutral-950 dark:text-gray-100 transition duration-300"
                aria-hidden="true"
              />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {NavItems.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.link}
                className={`text-sm font-semibold leading-6 transition duration-300 ${
                  location.pathname === navItem.link
                    ? "text-yellow-600 dark:text-yellow-500 font-bold"
                    : "text-gray-900 dark:text-gray-300"
                } hover:text-yellow-500 dark:hover:text-yellow-600`}
              >
                {navItem.text}
              </Link>
            ))}
          </Popover.Group>

          <div className="pl-6 pr-2 hidden lg:block">
            <ThemeButton />
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            >
              <motion.div
                className="fixed inset-0 z-10 bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Dialog.Panel
                as={motion.div}
                className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 dark:bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <img
                      className={`h-10 w-auto transition duration-300 ${currentTheme === "dark" ? "filter invert" : ""}`}
                      src="/logo.svg"
                      alt=""
                    />
                  </Link>
                  <button
                    type="button"
                    className="rounded-md text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <IoMdClose className="h-6 w-6 text-neutral-950 dark:text-gray-100 transition duration-300" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {NavItems.map((navItem, index) => (
                        <Link
                          key={index}
                          to={navItem.link}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition duration-300 ${
                            location.pathname === navItem.link
                              ? "text-yellow-600 dark:text-yellow-500 font-bold"
                              : "text-gray-900 dark:text-gray-300"
                          } hover:bg-gray-200 dark:hover:bg-neutral-900 hover:text-yellow-600 dark:hover:text-yellow-500`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {navItem.text}
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center justify-center py-5">
                      <ThemeButton />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
