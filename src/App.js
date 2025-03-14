import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import ResumePage from "./components/ResumePage"; // Import new Resume Page
import TechStack from "./components/TechStack";
import FunProfile from "./components/FunProfile";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative bg-darkBg text-white min-h-screen">
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/f" element={<FunProfile />} /> {/* New Route */}

          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
