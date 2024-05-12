import { createContext, useContext, useState } from "react";

const particleContext = createContext();

export const useParticle = () => {
  return useContext(particleContext);
};

export function ParticleProvider({ children }) {
  const [init, setInit] = useState(false);

  return (
    <particleContext.Provider value={{ init, setInit }}>
      {children}
    </particleContext.Provider>
  );
}

export default ParticleProvider;
