import {TechnologiesData} from "../data/TechnologiesData.jsx";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="pt-20 bg-gray-100 dark:bg-neutral-950 transition duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold">About Me</h2>
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
              Hi, I'm Nureka Rodrigo, a web developer with a strong foundation in front-end & back-end development and
              am skilled in creating user-friendly, responsive, and functional web applications using React and its
              ecosystem.
            </p>
            <p className="mb-6">
              I have a passion for learning and exploring new technologies, and I'm constantly looking for
              ways to improve my skills and deliver the best possible results. Below are some of the technologies I have
              worked with:
            </p>
            <div className="flex flex-wrap justify-start items-center">
              {TechnologiesData.map((tech, index) => (
                <div key={index} className="flex items-center m-2 p-1.5 bg-gray-200 dark:bg-neutral-900 rounded-lg shadow-lg transition duration-300">
                  <span className="text-2xl text-yellow-600 dark:text-yellow-500 mr-2 transition duration-300">{tech.icon}</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-gray-100 transition duration-300">{tech.name}</span>
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
