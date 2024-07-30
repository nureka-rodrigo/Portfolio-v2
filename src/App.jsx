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
  const [homeRef, homeInView] = useInViewAnimation();
  const [aboutRef, aboutInView] = useInViewAnimation();
  const [experienceRef, experienceInView] = useInViewAnimation();
  const [projectsRef, projectsInView] = useInViewAnimation();
  const [contactRef, contactInView] = useInViewAnimation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 transition duration-300">
      <Header />
      <div className="container pb-10 max-w-7xl mx-auto px-4">
        <section
          id="home"
          ref={homeRef}
          className={`transition-opacity duration-1000 ${
            homeInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </section>
        <section
          id="about"
          ref={aboutRef}
          className={`transition-opacity duration-1000 ${
            aboutInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <About />
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className={`transition-opacity duration-1000 ${
            experienceInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Experience />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className={`transition-opacity duration-1000 ${
            projectsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Projects />
        </section>
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
      <Footer />

      <SocialLinks />
      <EmailSection />

      <ScrollToTopButton />
    </div>
  );
}

export default App;
