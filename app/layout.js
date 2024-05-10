"use client";
import { useState } from "react";
import "./globals.css"; // Your global styles
import { Providers } from "./providers";
import StepSidebar from "@/components/StepSidebar";

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        {/* Edges for the progress steps */}
        <Providers>
          <div className="layout-container">
            <StepSidebar />
            <div className="content-container">
              {/* Content area with dynamic margin based on sidebar state */}
              <div className="content">
                {/* Content */}
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
