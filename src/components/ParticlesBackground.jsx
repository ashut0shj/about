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
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 150 },
          color: { value: "#7B61FF" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: 5 },
          move: { enable: true, speed: 1.5, random: true },
          links: { enable: true, distance: 150, color: "#FFD700", opacity: 0.2 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesBackground;
