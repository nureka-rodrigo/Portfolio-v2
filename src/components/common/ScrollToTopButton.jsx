import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  // State to track the visibility of the scroll-to-top button
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Function to toggle the visibility of the button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", toggleVisibility);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-10 right-8 xl:right-16 bg-yellow-600 dark:bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 dark:hover:bg-yellow-600 focus:outline-none transition-colors duration-300"
        >
          <div className="animate-bounce">
            <MdOutlineKeyboardArrowUp className="text-2xl" />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
