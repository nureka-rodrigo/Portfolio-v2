import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl text-yellow-600 dark:text-yellow-500 font-bold text-center transition duration-300">Get In Touch</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-neutral-900 dark:text-gray-100 text-center mb-8 max-w-xl transition duration-300">
            Whether you have inquiries about my work, collaboration proposals, or just want to say hello, feel free to reach out. I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:nurekadulshanmc@gmail.com"
            className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-yellow-700 dark:hover:bg-yellow-600"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
