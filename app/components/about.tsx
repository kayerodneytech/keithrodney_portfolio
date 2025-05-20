import React from "react";

const About = () => {
  return (
    <>
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              About Me - In detail.
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="lg:col-span-2 bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 border border-dark-700"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-400 mb-6">
                I &apos m Keith Rodney Phiri — a passionate and versatile
                digital creative. I thrive at the intersection of artistic
                expression and technical problem-solving, with a skill set that
                spans 2D animation, graphic design, social media management,
                brand strategy, and web development.
              </p>
              <p className="text-gray-400 mb-6">
                My creative journey started with pencil sketching — I &apos ve
                been drawing portraits since primary school. As I grew older, I
                became deeply drawn to visual storytelling, exploring graphic
                design and later animation as a hobby during my late high school
                years.
                <br />
                <br />
                My skills are largely self-taught, developed through
                volunteering, hands-on experimentation, and freelancing for
                local businesses. Over time, I took charge of delivering my own
                visuals through social media — learning not just to design
                content, but to strategize its distribution, mastering the
                nuances of different platforms to ensure my work reached the
                right audience.
                <br />
                <br />
                Beyond creativity, I have a strong technical foundation. I
                studied Computer Science from 2016 to 2022, which introduced me
                to programming and broadened my understanding of systems
                thinking. This knowledge has been instrumental in shaping how I
                approach problems across disciplines. I &apos m also a hobbyist
                web developer — having created sites for businesses like Ethnik
                Kollections in Bulawayo, as well as my own personal projects. My
                design background plays a big role here too, as I apply an
                understanding of visual hierarchy, user behavior, and aesthetics
                to every web experience I build.
              </p>
              <p className="text-gray-400">
                As I &apos ve mentioned before, my versatility is my greatest
                strength. I always strive to create synergy between the
                different creative and technical fields I work in — from
                building intuitive, user-focused, and SEO-optimized websites, to
                crafting engaging animated content for marketing, and
                implementing the strategies needed for real brand growth and
                user retention.
              </p>
            </div>

            <div
              className="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 border border-dark-700"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Social Media Strategy
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Graphic Design
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  2D Animation
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Social Media Marketing
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Adobe Creative Suite
                </span>
                <span className="skill-pill px-4 py-2 bg-dark-700 rounded-full text-sm font-medium">
                  Generative AI
                </span>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Languages</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">English</span>
                      <span className="text-gray-500">Professional</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: 95 }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Ndebele</span>
                      <span className="text-gray-500">Native</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: 100 }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Shona</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: 70 }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-dark-900" id="lifecycle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              My Creative Ecosystem
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-96 md:h-[500px]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 500"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  stroke="url(#circleGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,3"
                />
                <defs>
                  <linearGradient
                    id="circleGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center z-10 border-2 border-primary-400 shadow-lg">
                <span className="text-center font-bold text-white text-sm md:text-base">
                  {" "}
                  A User centered, <br />
                  Creative Focused
                  <br />
                  WorkFlow.
                </span>
              </div>

              <div
                className="lifecycle-node absolute top-4 left-1/2 transform -translate-x-1/2"
                data-aos="fade-down"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-800 border-2 border-primary-500 flex flex-col items-center justify-center p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-paint-brush text-xl md:text-2xl text-primary-400 mb-1"></i>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-300">
                    I Design{" "}
                  </span>
                </div>
              </div>

              <div
                className="lifecycle-node absolute top-1/2 right-4 transform -translate-y-1/2"
                data-aos="fade-left"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-800 border-2 border-primary-500 flex flex-col items-center justify-center p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-laptop-code text-xl md:text-2xl text-primary-400 mb-1"></i>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-300">
                    I Build Platforms
                  </span>
                </div>
              </div>

              <div
                className="lifecycle-node absolute bottom-4 left-1/2 transform -translate-x-1/2"
                data-aos="fade-up"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-800 border-2 border-primary-500 flex flex-col items-center justify-center p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chess text-xl md:text-2xl text-primary-400 mb-1"></i>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-300">
                    I Streamline Marketing Efforts
                  </span>
                </div>
              </div>

              <div
                className="lifecycle-node absolute top-1/2 left-4 transform -translate-y-1/2"
                data-aos="fade-right"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-800 border-2 border-primary-500 flex flex-col items-center justify-center p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-film text-xl md:text-2xl text-primary-400 mb-1"></i>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-300">
                    I Create Content
                  </span>
                </div>
              </div>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 500"
              >
                <path
                  d="M250 50 Q 400 250, 250 450"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <path
                  d="M450 250 Q 250 400, 50 250"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <path
                  d="M250 450 Q 100 250, 250 50"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <path
                  d="M50 250 Q 250 100, 450 250"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
            <div
              className="bg-dark-800 rounded-xl p-6 border border-dark-700"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-400">
                1. Designing Visual Identities
              </h3>
              <p className="text-gray-400">
                Crafting compelling brand identities through graphic design
                principles, color theory, and visual storytelling to establish
                memorable brand presence.
              </p>
            </div>
            <div
              className="bg-dark-800 rounded-xl p-6 border border-dark-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-400">
                2. Building Digital Platforms
              </h3>
              <p className="text-gray-400">
                Developing responsive websites and digital experiences that
                bring brand identities to life with clean code and intuitive
                user interfaces.
              </p>
            </div>
            <div
              className="bg-dark-800 rounded-xl p-6 border border-dark-700"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-400">
                3. Strategizing Presence
              </h3>
              <p className="text-gray-400">
                Creating comprehensive brand and social media strategies to
                ensure consistent messaging and maximum audience engagement.
              </p>
            </div>
            <div
              className="bg-dark-800 rounded-xl p-6 border border-dark-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-400">
                4. Creating Content that converts
              </h3>
              <p className="text-gray-400">
                Producing animations, motion graphics, and media content that
                tells stories and connects with audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
