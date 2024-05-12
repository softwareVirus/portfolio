import React, { Fragment, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

import particle from "@/util/particle";
import { useParticle } from "@/context/particle";

const ParticleBackground = () => {
  const particleContext = useParticle();
  const { init, setInit } = particleContext;

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <Fragment>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particle}
        />
      )}
    </Fragment>
  );
};

export default ParticleBackground;
