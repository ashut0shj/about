import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "black" },
        particles: {
          number: { value: 150 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: { min: 0.1, max: 1 }, animation: { enable: true, speed: 1, sync: false } },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.5, direction: "none", random: true },
          links: { enable: false },
        },
      }}
      
      
      className="fixed inset-0 w-full h-full pointer-events-none z-0"

    />
  );
};

export default ParticlesBackground;
