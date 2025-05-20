import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                  Keith Rodney Phiri
                </span>
                <br />
                Digital Creative, Brand Strategist.
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Versatile digital professional specializing in social media
                strategy, graphic design and animation, and web development.
                Bridging creativity with technical expertise to deliver
                impactful digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="creative.php"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="fas fa-paint-brush mr-2"></i> View Creative Work
                </a>
                <a
                  href="technical.php"
                  className="px-6 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="fas fa-code mr-2"></i> Technical Skills
                </a>
              </div>
            </div>

            <div
              className="relative hidden lg:block"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="bg-dark-800 bg-opacity-70 backdrop-blur-md p-1 rounded-full inline-block border border-dark-700">
                <div className="w-xl h-2xl bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1">
                  <Image
                    width={200}
                    height={200}
                    src="/images/profile.jpg"
                    alt="Keith Phiri"
                    className="w-full h-auto rounded-full object-cover"
                  />
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <i className="fas fa-trophy text-white"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-400">
                      Achievement
                    </p>
                    <p className="text-white font-semibold">+40% Engagement</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-400">Clients</p>
                    <p className="text-white font-semibold">10+ Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
