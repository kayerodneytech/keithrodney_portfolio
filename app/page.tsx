import About from "./components/about";
import HeroSection from "./components/heroSection";
import Resume from "./components/resume";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary-500 opacity-10 blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-primary-400 opacity-10 blur-3xl animate-float"></div>
      </div>
      <HeroSection />
      <About />
      <Resume />
    </>
  );
}
