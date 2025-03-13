import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-darkBg text-white min-h-screen">
       
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
