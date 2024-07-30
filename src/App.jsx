import useInViewAnimation from "./hooks/useInViewAnimation";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import EmailSection from "./components/EmailSection.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
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
