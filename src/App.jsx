import { Suspense, lazy } from "react";
import useInViewAnimation from "./hooks/useInViewAnimation";
import "./App.css";

const About = lazy(() => import("./components/sections/About.jsx"));
const Contact = lazy(() => import("./components/sections/Contact.jsx"));
const EmailSection = lazy(() => import("./components/common/EmailSection.jsx"));
const Experience = lazy(() => import("./components/sections/Experience.jsx"));
const Footer = lazy(() => import("./components/layout/Footer.jsx"));
const Header = lazy(() => import("./components/layout/Header.jsx"));
const Home = lazy(() => import("./components/sections/Home.jsx"));
const Projects = lazy(() => import("./components/sections/Projects.jsx"));
const ScrollToTopButton = lazy(() => import("./components/common/ScrollToTopButton.jsx"));
const SocialLinks = lazy(() => import("./components/common/SocialLinks.jsx"));

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
      <Suspense>
        <Header />
      </Suspense>

      <div className="container pb-10 max-w-7xl mx-auto px-4">
        <Suspense>
          <section
            id="home"
            ref={homeRef}
            className={`transition-opacity duration-1000 ${homeInView ? "opacity-100" : "opacity-0"}`}
          >
            <Home />
          </section>
          <section
            id="about"
            ref={aboutRef}
            className={`transition-opacity duration-1000 ${aboutInView ? "opacity-100" : "opacity-0"}`}
          >
            <About />
          </section>
          <section
            id="experience"
            ref={experienceRef}
            className={`transition-opacity duration-1000 ${experienceInView ? "opacity-100" : "opacity-0"}`}
          >
            <Experience />
          </section>
          <section
            id="projects"
            ref={projectsRef}
            className={`transition-opacity duration-1000 ${projectsInView ? "opacity-100" : "opacity-0"}`}
          >
            <Projects />
          </section>
          <section
            id="contact"
            ref={contactRef}
            className={`transition-opacity duration-1000 ${contactInView ? "opacity-100" : "opacity-0"}`}
          >
            <Contact />
          </section>
        </Suspense>
      </div>

      {/* Footer component */}
      <Suspense>
        <Footer />
      </Suspense>

      {/* Social links component */}
      <Suspense>
        <SocialLinks />
      </Suspense>

      {/* Email section component */}
      <Suspense>
        <EmailSection />
      </Suspense>

      {/* Scroll to top button component */}
      <Suspense>
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}

export default App;
