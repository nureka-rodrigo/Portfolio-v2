import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialLinksData } from "../../data/SocialLinksData";

// Mapping icon names to icon components
const iconComponents = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaInstagram: FaInstagram,
};

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex lg:flex-col lg:items-center fixed left-8 bottom-0 p-4 space-y-4">
      {/* Looping through the SocialLinksData to create links */}
      {SocialLinksData.map((link) => {
        // Dynamically selecting the appropriate icon component
        const IconComponent = iconComponents[link.icon];
        return (
          <a
            key={link.label} // Unique key for each link
            href={link.href} // URL for the social link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Prevents security risks
            className="text-neutral-900 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-600 transition duration-300"
          >
            <IconComponent size={30} /> {/* Render the appropriate icon */}
          </a>
        );
      })}
      {/* Vertical line at the bottom of the links */}
      <div className="w-px bg-gray-500 dark:bg-gray-300 h-24 mx-auto transition duration-300"></div>
    </div>
  );
};

export default SocialLinks;
