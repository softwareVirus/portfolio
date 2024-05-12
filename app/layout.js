"use client";
import { useState } from "react";
import "./globals.css"; // Your global styles
import { Providers } from "./providers";
import Head from "next/head";
import ParticleBackground from "@/components/ParticalBackground";
import MainSection from "@/components/MainSection";

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
          <ParticleBackground />
          <MainSection>{children}</MainSection>
        </Providers>
      </body>
    </html>
  );
}
