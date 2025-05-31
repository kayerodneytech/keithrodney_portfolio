"use client";

import { Skeleton, SkeletonText } from "../ui/skeleton";

type AboutProps = {
  isLoading?: boolean;
};

export default function About({ isLoading = false }: AboutProps) {
  if (isLoading) {
    return (
      <main className="pt-20">
        <section className="py-20" id="about">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <Skeleton className="h-12 w-64 mx-auto mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SkeletonText className="mb-6" />
                <SkeletonText className="mb-6" />
                <SkeletonText />
              </div>
              <div>
                <Skeleton className="h-8 w-32 mb-6" />
                <div className="flex flex-wrap gap-3">
                  {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-32" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              About Me - In detail.
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1245f8] to-transparent"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="lg:col-span-2 bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 border border-[#1245f8]"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-400 mb-6">
                I&apos;m Keith Rodney Phiri — a passionate and versatile digital
                creative. I thrive at the intersection of artistic expression
                and technical problem-solving, with a skill set that spans 2D
                animation, graphic design, social media management, brand
                strategy, and web development.
              </p>
              <p className="text-gray-400 mb-6">
                My creative journey started with pencil sketching — I&apos;ve
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
                approach problems across disciplines. I&apos;m also a hobbyist
                web developer — having created sites for businesses like Ethnik
                Kollections in Bulawayo, as well as my own personal projects. My
                design background plays a big role here too, as I apply an
                understanding of visual hierarchy, user behavior, and aesthetics
                to every web experience I build.
              </p>
              <p className="text-gray-400">
                As I&apos;ve mentioned before, my versatility is my greatest
                strength. I always strive to create synergy between the
                different creative and technical fields I work in — from
                building intuitive, user-focused, and SEO-optimized websites, to
                crafting engaging animated content for marketing, and
                implementing the strategies needed for real brand growth and
                user retention.
              </p>
            </div>

            <div
              className="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 border border-[#1245f8]"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  Social Media Strategy
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  Graphic Design
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  2D Animation
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  Social Media Marketing
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
                  Adobe Creative Suite
                </span>
                <span className="skill-pill px-4 py-2 bg-[#1245f8] rounded-full text-sm font-medium">
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
                    <div className="w-full bg-gray-400/50 rounded-full h-2">
                      <div
                        className="bg-[#1245f8] h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Ndebele</span>
                      <span className="text-gray-500">Native</span>
                    </div>
                    <div className="w-full  bg-gray-400/50 rounded-full h-2">
                      <div
                        className="bg-[#1245f8] h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Shona</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="w-full  bg-gray-400/50 rounded-full h-2">
                      <div
                        className="bg-[#1245f8] h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Japanese</span>
                    <span className="text-gray-500">Basic</span>
                  </div>
                  <div className="w-full  bg-gray-400/50 rounded-full h-2">
                    <div
                      className="bg-[#1245f8] h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
