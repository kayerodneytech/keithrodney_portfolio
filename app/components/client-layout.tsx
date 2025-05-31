"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 opacity-5 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary-400 opacity-5 blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-primary-600 opacity-5 blur-3xl animate-float"></div>
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
