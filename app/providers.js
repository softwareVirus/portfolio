"use client";

import { StepSidebarProvider } from "../context/page";

export function Providers({ children }) {
  return <StepSidebarProvider>{children}</StepSidebarProvider>;
}
