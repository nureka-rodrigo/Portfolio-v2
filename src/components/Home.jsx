import {motion} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';
import {Link as ScrollLink} from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-950 transition duration-300">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-yellow-600 dark:text-yellow-500 mb-2 transition duration-300">Hi, I am</p>
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-gray-100 mb-4 transition duration-300">
            <TypeAnimation
              sequence={[
                "Nureka Rodrigo.",
                2000,
                "a Passionate Developer.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <p className="text-lg text-gray-900 dark:text-gray-300 max-w-2xl mx-auto transition duration-300">
            I am a web developer from Sri Lanka. I have a strong foundation in both front-end and back-end development,
            and I'm skilled in creating user-friendly, responsive, and functional web applications using React and its
            ecosystem.{' '}
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-yellow-600 dark:text-yellow-500 hover:underline cursor-pointer transition duration-300"
            >
              Learn more
            </ScrollLink>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
