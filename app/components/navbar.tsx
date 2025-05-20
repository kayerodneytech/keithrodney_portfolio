import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="glass-card fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">KP</span>
            </div>
            <span className="text-white font-semibold">Keith Rodney</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#creative"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Creative Work
            </Link>
            <Link
              href="/#technical"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Technical
            </Link>
            <Link
              href="/#resume"
              className="nav-link text-gray-400 hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition"
            >
              Contact
            </Link>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
