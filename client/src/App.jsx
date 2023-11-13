import { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";
import { themeChange } from "theme-change";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {

  useEffect(() => {
    // localStorage.setItem("theme", "none");
    let theme = localStorage.getItem("theme")
    console.log(theme)
    if(theme != "light" && theme != "dark" ){
      localStorage.setItem("theme", "light");
    }

  }, []);

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
