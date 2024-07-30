import useInViewAnimation from "./hooks/useInViewAnimation";
import Home from "./components/sections/Home.jsx";
import Header from "./components/layout/Header.jsx";
import About from "./components/sections/About.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import EmailSection from "./components/common/EmailSection.jsx";
import ScrollToTopButton from "./components/common/ScrollToTopButton.jsx";
import SocialLinks from "./components/common/SocialLinks.jsx";
import "./App.css";

function App() {
  // Custom hook to handle in-view animations for sections
  const [homeRef, homeInView] = useInViewAnimation();
  const [aboutRef, aboutInView] = useInViewAnimation();
  const [experienceRef, experienceInView] = useInViewAnimation();
  const [projectsRef, projectsInView] = useInViewAnimation();
  const [contactRef, contactInView] = useInViewAnimation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 transition duration-300">
      {/* Header component */}
      <Header />
      <div className="container pb-10 max-w-7xl mx-auto px-4">
        {/* Home section with in-view animation */}
        <section
          id="home"
          ref={homeRef}
          className={`transition-opacity duration-1000 ${
            homeInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </section>
        {/* About section with in-view animation */}
        <section
          id="about"
          ref={aboutRef}
          className={`transition-opacity duration-1000 ${
            aboutInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <About />
        </section>
        {/* Experience section with in-view animation */}
        <section
          id="experience"
          ref={experienceRef}
          className={`transition-opacity duration-1000 ${
            experienceInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Experience />
        </section>
        {/* Projects section with in-view animation */}
        <section
          id="projects"
          ref={projectsRef}
          className={`transition-opacity duration-1000 ${
            projectsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Projects />
        </section>
        {/* Contact section with in-view animation */}
        <section
          id="contact"
          ref={contactRef}
          className={`transition-opacity duration-1000 ${
            contactInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Contact />
        </section>
      </div>
      {/* Footer component */}
      <Footer />

      {/* Social links component */}
      <SocialLinks />
      {/* Email section component */}
      <EmailSection />

      {/* Scroll to top button component */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
