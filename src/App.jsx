import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import EmailSection from "./components/EmailSection.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-neutral-950 transition duration-300">
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* Content */}
          <div className="container py-10 max-w-7xl mx-auto px-4">
            <section id="home">
              <h1 className="text-4xl font-bold mb-8">Home</h1>
            </section>
            <section id="about">
              <h1 className="text-4xl font-bold mb-8">About</h1>
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
        </div>

        <SocialLinks />
        <EmailSection />
      </div>
    </>
  );
}

export default App;
