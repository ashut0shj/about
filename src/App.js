import { lazy, Suspense, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load everything below the fold — reduces initial bundle size significantly
const About = lazy(() => import("./components/About"));
const TechStack = lazy(() => import("./components/TechStack"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const ResumePage = lazy(() => import("./components/ResumePage"));
const FunProfile = lazy(() => import("./components/FunProfile"));

// Minimal fallback — invisible, no layout shift
const PageFallback = () => (
  <div className="min-h-screen" aria-hidden="true" />
);

const HomePage = memo(() => (
  <>
    <Hero />
    <Suspense fallback={<PageFallback />}>
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </Suspense>
  </>
));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative bg-darkBg text-white min-h-screen">
          {/* ParticlesBackground removed — lightweight canvas is now built into Hero */}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<PageFallback />}>
                  <ResumePage />
                </Suspense>
              }
            />
            <Route
              path="/f"
              element={
                <Suspense fallback={<PageFallback />}>
                  <FunProfile />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
