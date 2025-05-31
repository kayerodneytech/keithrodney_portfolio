"use client";

import { useState, useEffect } from "react";

import About from "./components/HomeComponents/AboutSection";

import CreativeEcosystem from "./components/HomeComponents/CreativeEcosystem";
import GraphicDesignSection from "./components/HomeComponents/GraphicDesignSection";
import AnimationSection from "./components/HomeComponents/AnimationSection";
import HeroSection from "./components/HomeComponents/HeroSection";

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
    <main>
      <HeroSection isLoading={isLoading} />
      <About isLoading={isLoading} />
      <CreativeEcosystem />
      <GraphicDesignSection isLoading={isLoading} />
      <AnimationSection isLoading={isLoading} />
    </main>
  );
}
