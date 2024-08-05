import { useState } from "react";
import { ExperienceData } from "../../data/ExperienceData.jsx";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

  return (
    <section className="container mx-auto px-4 pt-20">
      {/* Title section */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold text-center transition duration-300">
          Experience
        </h2>
      </motion.div>

      {/* Experience list and details */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar with list of experiences */}
        <div className="md:w-1/4 flex flex-col md:overflow-y-auto">
          {ExperienceData.map((experience, index) => (
            <button
              key={index}
              className={`p-4 text-left transition duration-300 ${
                selectedExperience === index
                  ? "bg-yellow-600 text-white dark:bg-yellow-500"
                  : "text-neutral-900 dark:text-gray-100"
              } hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-600`}
              onClick={() => handleExperienceClick(index)}
              aria-selected={selectedExperience === index}
            >
              {experience.company}
            </button>
          ))}
        </div>

        {/* Details of the selected experience */}
        <div className="md:w-3/4 md:pl-10 mt-6 md:mt-0">
          {ExperienceData.map(
            (experience, index) =>
              selectedExperience === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="transition duration-300"
                >
                  <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-500 transition duration-300">
                    {experience.position}{" "}
                    <span className="text-neutral-900 dark:text-gray-100 transition duration-300">
                      @{experience.company}
                    </span>
                  </h3>
                  <p className="text-neutral-600 dark:text-gray-400 mt-2 transition duration-300">
                    {new Date(experience.start).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}{" "}
                    -{" "}
                    {experience.end
                      ? new Date(experience.end).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })
                      : "Present"}
                  </p>
                  <motion.ul
                    className="list-disc list-inside mt-4 text-neutral-900 dark:text-gray-100 transition duration-300"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: 0.3,
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {experience.description.map((desc, descIndex) => (
                      <motion.li
                        key={descIndex}
                        className="mb-2"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
