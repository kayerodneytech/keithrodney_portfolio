"use client";

import { useState, useEffect } from "react";

import About from "./components/HomeComponents/AboutSection";

import CreativeEcosystem from "./components/HomeComponents/CreativeEcosystem";
import GraphicDesignSection from "./components/HomeComponents/GraphicDesignSection";
import AnimationSection from "./components/HomeComponents/AnimationSection";
import HeroSection from "./components/HomeComponents/HeroSection";
import CertificationsSection from "./components/HomeComponents/CertificationsSection";
import ResumeSection from "./components/HomeComponents/ResumeSection";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import TechnicalSection from "./components/HomeComponents/TechnicalSection";

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
      <StarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
      <div className="relative z-10">
        <HeroSection isLoading={isLoading} />
        <About isLoading={isLoading} />
        <CreativeEcosystem />
        <GraphicDesignSection isLoading={isLoading} />
        <AnimationSection isLoading={isLoading} />
        <TechnicalSection />
        <ResumeSection />
        <CertificationsSection />
      </div>
    </main>
  );
}
