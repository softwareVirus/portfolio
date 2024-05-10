import { createContext, useContext, useState } from "react";

const stepSidebarContext = createContext();

export const usePage = () => {
  return useContext(stepSidebarContext);
};

export function StepSidebarProvider({ children }) {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <stepSidebarContext.Provider value={{ selectedStep, setSelectedStep }}>
      {children}
    </stepSidebarContext.Provider>
  );
}

export default StepSidebarProvider;
