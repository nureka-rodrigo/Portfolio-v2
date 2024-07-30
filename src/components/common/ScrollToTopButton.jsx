import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  // State to track the visibility of the scroll-to-top button
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Function to toggle the visibility of the button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true); // Show button when scrolled more than 300px
      } else {
        setVisible(false); // Hide button when scrolled less than 300px
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
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-8 xl:right-20 bg-yellow-600 dark:bg-yellow-500 text-white p-2 rounded-full shadow-lg hover:bg-yellow-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 dark:focus:ring-yellow-500"
        >
          <div className="animate-bounce">
            <MdOutlineKeyboardArrowUp className="size-7" />
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
