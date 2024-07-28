import {useState} from 'react';
import {ProjectsData} from '../data/ProjectsData.jsx';
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 6);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold text-center transition duration-300">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectsData.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 border border-yellow-600 dark:border-yellow-500 transition duration-300 transform hover:scale-105 flex flex-col justify-between h-80"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">{project.title}</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-gray-100 transition duration-300 hover:text-yellow-600 dark:hover:text-yellow-500"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-gray-100 transition duration-300 hover:text-yellow-600 dark:hover:text-yellow-500"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-neutral-900 dark:text-gray-100 mt-2 text-justify transition duration-300 overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {visibleProjects < ProjectsData.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-6 py-2 text-sm transition duration-300 hover:bg-yellow-700 dark:hover:bg-yellow-600"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
