"use client";

import { FaArrowRight, FaCommentDots, FaImages } from "react-icons/fa";
import { Skeleton, SkeletonCard } from "../components/ui/skeleton";

// Constants
const BEHANCE_URL = "https://www.behance.net/rti2d";

// Project data
const designProjects = [
  {
    embed: "https://www.behance.net/embed/project/210980487?ilo0=1",
    title: "Blxck Mxrket Logo Design",
    year: "2023",
    type: "Brand Identity",
    description: "Minimalist logo design for a contemporary fashion brand.",
    link: "https://www.behance.net/gallery/210980487/Blxck-Mxrket-Logo-Design",
  },
  {
    embed: "https://www.behance.net/embed/project/212409753?ilo0=1",
    title: "MunchMate Brand Identity Design",
    year: "2024",
    type: "Full Branding",
    description:
      "Complete Brand identity including logos, color schemes, and brand guidelines.",
    link: BEHANCE_URL,
  },
  {
    embed: "https://www.behance.net/embed/project/204848239?ilo0=1",
    title: "F.A.B.G (pvt) Ltd Brand Identity",
    year: "2024",
    type: "Full Branding",
    description:
      "FABG is a Bulawayo based company specializing in Interior design and logistics. The logo focuses on highlighting their vision to serve beyond borders.",
    link: BEHANCE_URL,
  },
  {
    embed: "https://www.behance.net/embed/project/206672175?ilo0=1",
    title: "Design Core Brand Identity",
    year: "2024",
    type: "Full Branding",
    description:
      "Logo and brand identity for Design Core, an app that connects designers of all levels with portfolio sharing and courses.",
    link: BEHANCE_URL,
  },
  {
    embed: "https://www.behance.net/embed/project/204852331?ilo0=1",
    title: "Miscellaneous Poster Designs",
    year: "2022 - 24",
    type: "Poster and Flier Design",
    description: "A collection of posters and fliers I've done over the years.",
    link: BEHANCE_URL,
  },
];

type CreativeProps = {
  isLoading?: boolean;
};

function GraphicDesignSection({ isLoading = false }: CreativeProps) {
  if (isLoading) {
    return (
      <main className="pt-20">
        <section className="py-20" id="graphic_design">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <Skeleton className="h-12 w-64 mx-auto mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <section className="py-20" id="graphic_design">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2
          className="text-3xl font-bold mb-16 text-center"
          data-aos="fade-up"
          id="creative"
        >
          <span className="relative inline-block">
            Creative Work
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
          </span>
        </h2>

        {/* Graphic Design Section */}
        <div className="mb-20">
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8"
            data-aos="fade-up"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-400 max-w-2xl">
                Visually compelling designs that communicate brand identity and
                messaging. From logos to complete brand systems, I create
                designs that make an impact.
              </p>
            </div>
            <a
              href={BEHANCE_URL}
              target="_blank"
              className="mt-4 md:mt-0 inline-flex items-center text-[#1245f8] hover:text-primary-300 transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              View on Behance <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl overflow-hidden border border-[#1245f8] hover:border-[#007eff] transition-colors"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="relative overflow-hidden h-64">
                  <iframe
                    src={project.embed}
                    height="256"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    allow="clipboard-write"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {project.title}
                  </h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                    <span className="px-3 py-1 bg-[#1245f8]/40 text-primary-400 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}

            {/* More Projects Placeholder */}
            <div
              className="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] flex items-center justify-center">
                <FaImages className="text-5xl text-primary-500 opacity-30" />
              </div>
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg mb-2">
                  More Projects
                </h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">Various</span>
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium">
                    Behance
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">
                  View all my graphic design projects on Behance.
                </p>
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm transition-colors"
                >
                  Visit Behance <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20graphic%20design%20services"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] text-white rounded-lg hover:opacity-90 transition flex items-center justify-center"
            >
              <FaCommentDots className="mr-2" /> Request a Quote
            </a>
            <a
              href="/portfolio/graphic_design"
              className="px-6 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg hover:bg-dark-600 transition flex items-center justify-center"
            >
              <FaImages className="mr-2" /> View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GraphicDesignSection;
