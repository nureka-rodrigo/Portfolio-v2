import ProfileImage from "../../assets/profile.jpg";
import { TechnologiesData } from "../../data/TechnologiesData.jsx";
import { motion } from "framer-motion";

const About = () => {
  const techVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="pt-20 transition duration-300">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold">
            About Me
          </h2>
        </motion.div>

        {/* Flex container for profile image and text */}
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Profile image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3 lg:w-1/3 mb-8 md:mb-0"
          >
            <img
              src={ProfileImage}
              alt="Profile of Nureka Rodrigo"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            />
          </motion.div>

          {/* Text section */}
          <div className="w-full md:pt-8 lg:w-2/3 lg:pl-12 text-justify text-gray-900 dark:text-gray-300 transition duration-300">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              Hi, I&apos;m Nureka Rodrigo, a web developer from Sri Lanka, born
              in 1999. My educational journey began at Mahanama College, Colombo
              03, followed by Ananda College, Colombo 10. This diverse
              educational background has equipped me with a broad perspective
              and a passion for learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              I am currently an undergraduate at Uva Wellassa University
              pursuing a Bachelor of Computer Science & Technology. My
              dedication to continuous learning enables me to stay updated with
              new technologies and improve my skills. I am constantly exploring
              new technologies and seeking ways to enhance my expertise. Below
              are some of the technologies I have worked with:
            </motion.p>

            {/* Technology list */}
            <motion.div
              className="flex flex-wrap justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={techVariants}
              transition={{ duration: 0.5 }}
            >
              {TechnologiesData.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-center m-2 p-1.5 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg transition duration-300"
                  initial="hidden"
                  animate="visible"
                  variants={techVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Technology icon */}
                  <span
                    aria-label={`${tech.name} icon`} // Adding aria-label for better accessibility
                    className="text-2xl text-yellow-600 dark:text-yellow-500 mr-2 transition duration-300"
                  >
                    {tech.icon}
                  </span>
                  {/* Technology name */}
                  <span className="text-sm font-semibold text-neutral-900 dark:text-gray-100 transition duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
