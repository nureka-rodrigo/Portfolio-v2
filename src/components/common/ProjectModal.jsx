import {FaExternalLinkAlt, FaGithub, FaTimes} from 'react-icons/fa';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-8 max-w-lg w-full mx-4 transition duration-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-500 transition duration-300">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <p className="text-neutral-900 dark:text-gray-100 transition duration-300">
          {project.description}
        </p>
        <div className="flex justify-center space-x-5 my-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
        <div className="mt-4 flex flex-wrap justify-center">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2 transition duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
