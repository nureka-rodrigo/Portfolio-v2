import './App.css'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <>
      <div className="bg-gray-100 dark:bg-neutral-950 transition duration-500 h-screen">
        <div className="flex flex-col min-h-screen">
        <Header/>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
