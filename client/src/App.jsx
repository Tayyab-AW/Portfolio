import { useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import WebFont from "webfontloader";
import { themeChange } from "theme-change";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    themeChange(false);
    WebFont.load({
      google: {
        families: ["Poppins", "Mulish"],
      },
    });
  }, []);
  return (
    <div className="  flex flex-col justify-between min-h-screen m-0 p-0">
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
