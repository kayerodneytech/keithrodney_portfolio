import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const TechnicalSection = () => {
  return (
    <section id="technical" className="py-20">
      <h2
        className="text-3xl font-bold mb-16 text-center"
        data-aos="fade-up"
        id="creative"
      >
        <span className="relative inline-block">
          Technical Work
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
        </span>
      </h2>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center space-y-6">
          <p
            onClick={() => window.open("https://rodneytechinc.co.zw", "_blank")}
          >
            From building websites and Web Apps to managing Brands...
          </p>

          <button
            className="px-6 py-3 bg-gradient-to-br from-[#1245f8] to-[#007eff] text-white rounded-lg hover:opacity-90 transition flex items-center"
            onClick={() => window.open("https://rodneytechinc.co.zw", "_blank")}
          >
            <FaExternalLinkAlt className="mr-2" />
            View Technical Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
