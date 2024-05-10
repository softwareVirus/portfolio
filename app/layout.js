"use client";
import { useState } from "react";
import "./globals.css"; // Your global styles
import { Providers } from "./providers";
import StepSidebar from "@/components/StepSidebar";
import Head from "next/head";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,300"
        />
      </Head>
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
