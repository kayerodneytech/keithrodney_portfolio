"use client";

import Link from "next/link";
import { FaLinkedinIn, FaBehance, FaTiktok } from "react-icons/fa";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/keithrodneytech/",
  behance: "https://www.behance.net/keithrodneytech",
  tiktok: "https://www.tiktok.com/@keithrodneytech",
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 py-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] flex items-center justify-center">
                <span className="text-white font-bold text-xs">KP</span>
              </div>
              <span className="text-white font-semibold">Keith Rodney</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link
              href="/#about"
              className="text-gray-400 hover:text-[#1245f8] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#creative"
              className="text-gray-400 hover:text-[#1245f8] transition-colors"
            >
              Creative Work
            </Link>
            <Link
              href="/#technical"
              className="text-gray-400 hover:text-[#1245f8] transition-colors"
            >
              Technical
            </Link>
            <Link
              href="/#resume"
              className="text-gray-400 hover:text-[#1245f8] transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="text-gray-400 hover:text-[#1245f8] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1245f8] rounded-full flex items-center justify-center hover:bg-[#2f2bfe] hover:text-primary-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1245f8] rounded-full flex items-center justify-center hover:bg-[#2f2bfe] hover:text-primary-400 transition"
            >
              <FaBehance />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1245f8] rounded-full flex items-center justify-center hover:bg-[#2f2bfe] hover:text-primary-400 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Keith Rodney Phiri. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Website Designed and developed By Keith Rodney.
          </p>
        </div>
      </div>
    </footer>
  );
}
