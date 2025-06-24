import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadStarShape } from "tsparticles-shape-star";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadStarShape(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "black" },
        particles: {
          number: { value: 180 },
          color: { value: ["#fff", "#ffe9c4", "#d4fbff"] },
          shape: { type: "star" },
          opacity: {
            value: { min: 0.6, max: 1 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: { value: { min: 0.3, max: 1.5 } },
          move: { enable: true, speed: 0.3, direction: "none", random: true },
          links: { enable: false },
          shadow: {
            enable: true,
            color: "#fff",
            blur: 6,
          },
        },
      }}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;
