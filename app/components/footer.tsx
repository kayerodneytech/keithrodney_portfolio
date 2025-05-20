import Link from "next/link";
import React from "react";

const BEHANCE_URL = "https://www.behance.net/keithrodneytech";
const TIKTOK_URL = "https://www.tiktok.com/@rti2d";
const LINKEDIN_URL = "https://www.linkedin.com/in/keithrodneytech";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-900 py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="index.php" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KP</span>
                </div>
                <span className="text-white font-semibold">Keith Rodney</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <Link
                href="/#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/#creative"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Creative Work
              </Link>
              <Link
                href="/#technical"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Technical
              </Link>
              <Link
                href="/#resume"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href={BEHANCE_URL}
                target="_blank"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition"
              >
                <i className="fab fa-behance"></i>
              </Link>
              <Link
                href={TIKTOK_URL}
                target="_blank"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition"
              >
                <i className="fab fa-tiktok"></i>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-dark-800 text-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 Keith Rodney Phiri. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Designed and developed By Keith Phiri
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
