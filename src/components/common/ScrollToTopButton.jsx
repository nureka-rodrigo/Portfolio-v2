import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
