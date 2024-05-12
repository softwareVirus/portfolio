"use client";

import ParticleProvider from "@/context/particle";
import { StepSidebarProvider } from "../context/page";

export function Providers({ children }) {
  return (
    <StepSidebarProvider>
      <ParticleProvider>{children}</ParticleProvider>
    </StepSidebarProvider>
  );
}
