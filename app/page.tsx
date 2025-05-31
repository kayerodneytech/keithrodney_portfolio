"use client";

import { useState, useEffect } from "react";

import About from "./HomeComponents/AboutSection";

import CreativeEcosystem from "./HomeComponents/CreativeEcosystem";
import GraphicDesignSection from "./HomeComponents/GraphicDesignSection";
import AnimationSection from "./HomeComponents/AnimationSection";
import HeroSection from "./HomeComponents/HeroSection";

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
