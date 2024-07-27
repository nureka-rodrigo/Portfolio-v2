import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import EmailSection from "./components/EmailSection.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-neutral-950 transition duration-300">
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* Content */}
          <Footer />
        </div>

        <SocialLinks />
        <EmailSection />
      </div>
    </>
  );
}

export default App;
