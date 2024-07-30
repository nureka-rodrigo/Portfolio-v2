import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import EmailSection from "./components/EmailSection.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 transition duration-300">
      <Header />
      <div className="container pb-10 max-w-7xl mx-auto px-4">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
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
