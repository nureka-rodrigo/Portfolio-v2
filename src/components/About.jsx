import { TechnologiesData } from "../data/TechnologiesData.jsx";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="pt-20 bg-gray-100 dark:bg-neutral-950 transition duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-12 text-justify text-gray-900 dark:text-gray-300 transition duration-300">
            <p className="mb-6">
              Hi, I'm Nureka Rodrigo, a web developer from Sri Lanka, born in
              1999. My educational journey began at Mahanama College, Colombo 03
              for primary school, followed by Ananda College, Colombo 10 for
              secondary school. This diverse educational background has equipped
              me with a broad perspective and a passion for learning.
            </p>
            <p className="mb-6">
              I am constantly exploring new technologies and seeking ways to
              improve my skills. My dedication to continuous learning enables me
              to deliver the best possible results in my projects. Below are
              some of the technologies I have worked with:
            </p>
            <div className="flex flex-wrap justify-start items-center">
              {TechnologiesData.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center m-2 p-1.5 bg-gray-200 dark:bg-neutral-900 rounded-lg shadow-lg transition duration-300"
                >
                  <span className="text-2xl text-yellow-600 dark:text-yellow-500 mr-2 transition duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-gray-100 transition duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
