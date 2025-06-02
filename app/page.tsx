"use client";

import { useState, useEffect } from "react";

import About from "./components/HomeComponents/AboutSection";

import CreativeEcosystem from "./components/HomeComponents/CreativeEcosystem";
import GraphicDesignSection from "./components/HomeComponents/GraphicDesignSection";
import AnimationSection from "./components/HomeComponents/AnimationSection";
import HeroSection from "./components/HomeComponents/HeroSection";
import CertificationsSection from "./components/HomeComponents/CertificationsSection";
import ResumeSection from "./components/HomeComponents/ResumeSection";
import { Analytics } from "@vercel/analytics/next";

// Background Animation Component
const BackgroundAnimation = () => (
  <div className="fixed inset-0 overflow-hidden -z-10">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1245f8] opacity-5 blur-3xl animate-float"></div>
    <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#1245f8] opacity-5 blur-3xl animate-float-reverse"></div>
    <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-[#1245f8] opacity-5 blur-3xl animate-float"></div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Analytics />
        <HeroSection isLoading={isLoading} />
        <About isLoading={isLoading} />
        <CreativeEcosystem />
        <GraphicDesignSection isLoading={isLoading} />
        <AnimationSection isLoading={isLoading} />
        <ResumeSection />
        <CertificationsSection />
      </div>
    </main>
  );
}
