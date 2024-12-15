import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Skill from "./components/Skill.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
    </>
  );
}

export default App;
