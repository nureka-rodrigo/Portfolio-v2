import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex lg:flex-col lg:items-center fixed left-8 bottom-0 p-4 space-y-4">
      <a
        href="https://github.com/nureka-rodrigo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-900 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-600 transition duration-300"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/nureka-rodrigo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-900 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-600 transition duration-300"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.instagram.com/nureka_rodrigo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-900 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-600 transition duration-300"
      >
        <FaInstagram size={30} />
      </a>
      <div className="w-px bg-gray-500 dark:bg-gray-300 h-24 mx-auto transition duration-300"></div>
    </div>
  );
};

export default SocialLinks;
