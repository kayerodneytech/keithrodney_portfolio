import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        buttonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-dark-800 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo linking to homepage */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] flex items-center justify-center">
              <span className="text-white font-bold text-xs">KP</span>
            </div>
            <span className="text-white font-semibold">Keith Rodney</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#graphic_design"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Graphic Design
            </Link>
            <Link
              href="/#animation"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Animation
            </Link>
            <Link
              href="/#resume"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] text-white rounded-lg hover:opacity-90 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-dark-800 border-t border-dark-700 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            href="/#about"
            className="block nav-link text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#creative"
            className="block nav-link text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Creative Work
          </Link>
          <Link
            href="/#technical"
            className="block nav-link text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Technical
          </Link>
          <Link
            href="/#resume"
            className="block nav-link text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/#contact"
            className="block px-4 py-2 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] text-white rounded-lg hover:opacity-90 transition text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
