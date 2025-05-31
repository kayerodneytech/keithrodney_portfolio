"use client";

import {
  FaCommentDots,
  FaImages,
  FaLightbulb,
  FaPencilRuler,
  FaMagic,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

// Project data
const designProjects = [
  {
    id: "blxck-mxrket",
    title: "Blxck Mxrket Brand Identity",
    description:
      "Blxck Mxrket is a rebellious marketing brand. They specialize in E-commerce and Modern Marketing, with a bias towards black-owned businesses and african ownernership. Their logo needed to be bold, professional and unique, and i was happy to have worked on this project!",
    mainImage: "/images/portfolio/blk_main.jpg",
    gallery: [
      "/images/portfolio/blk_gold.jpg",
      "/images/portfolio/blxck_business_card.jpg",
      "/images/portfolio/blk_shirt1.jpg",
    ],
    colors: ["#000000", "#FFFFFF", "#fda520"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    tags: ["Branding", "Logo Design", "Brand Identity"],
  },
  // Add more projects here
  {
    id: "byq",
    title: "Bulawayo Youth Quota Logo",
    description:
      "Bulawayo youth quota is one of the 10 Youth quotas in Zimbabwe, as mandated by The Zimbabwe Youth Quotas Act.I was tasked with coming up with a logo that incorporated 3 essential elements, the a sense of Sustainability, Trust and Reliability, The Youth, and most importantly Bulawayo and its culture.  ",
    mainImage: "/images/portfolio/byq_main.jpg",
    gallery: [
      "/images/portfolio/byq_poster.jpg",
      "/images/portfolio/byq_hut.jpg",
    ],
    colors: ["#009ae2", "#f80030", "#025368", "#e5981e"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    tags: ["Branding", "Logo Design", "Brand Identity"],
  },
  {
    id: "w_sleek",
    title: "Whisper Sleek Brand Identity",
    description:
      "Whisper Sleek is a Bulawayo based brand, specializing in Fashion, and cosmetics. A high sense of elegance and royalty is what the brand is about, and at a single glimpse, their logo needed to say exactly that. Coming up with a logomark that work and the right typeface to go with it was quite the interesting challenge!",
    mainImage: "/images/portfolio/ws_symbol_gold.jpg",
    gallery: [
      "/images/portfolio/ws_black.jpg",
      "/images/portfolio/ws_white.jpg",
      "/images/portfolio/ws_poster.jpg",
    ],
    colors: ["#000000", "#d0941a", "#f6ea56", "#d7b69b"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    tags: ["Branding", "Logo Design", "Brand Identity"],
  },
  {
    id: "rti",
    title: "Rodneytech,Inc. Brand identity",
    description:
      "One of the first ever logos I've ever developed. Rodneytech, Inc. marked the beginning of my journey in Tech. It is a brand created by a 17 year old me, still young and ambitious...aspiring to create a company that makes modernizing the Zimbabwean mindset around technology its mandate. The log for this brand had to avoid cliches, and be simple enough to stand out confidently. The final design was a simple word logo, with an abstract symbol(that actually is the Letters R and T in Morse Code). ",
    mainImage: "/images/portfolio/rti_main.jpg",
    gallery: [
      "/images/portfolio/rti_poster.jpg",
      "/images/portfolio/rti_logo_blue.jpg",
      "/images/placeholder.png",
    ],
    colors: ["#1245f8", "#2f2bfe", "#007eff"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    tags: ["Branding", "Logo Design", "Brand Identity"],
  },
];

const testimonials = [
  {
    name: "Brighton L. Nkomo",
    position: "CEO, Blxck Mxrket",
    quote:
      "The design process was very smooth. He took into consideration my ideas and views to create a unique and memorable logo for my company, and I was really happy with it. I would definitely recommend Keith!",
    delay: 100,
  },
  {
    name: "Nobukhosi M.",
    position: "Managing Director, FABG",
    quote:
      "Working with Keith was a game-changer for our brand. He didn't just deliver designs - he delivered a complete visual system that works across all our touchpoints. His ability to understand and elevate our vision was remarkable.",
    delay: 200,
  },
  {
    name: "James L.",
    position: "Founder, Design Core",
    quote:
      "The logo Keith created for our platform perfectly captures our mission to connect designers. His conceptual approach resulted in a mark that's both meaningful and memorable.",
    delay: 300,
  },
  {
    name: "Nadia T.",
    position: "Product Manager, MunchMate",
    quote:
      "Not many designers think about design the same way he does. he truly goes out of his way do deliver what the client wants and that what I liked the most!",
    delay: 400,
  },
];

const processSteps = [
  {
    icon: FaLightbulb,
    title: "Conceptualization",
    description:
      "Every great design begins with understanding. I dive deep into brand essence, target audience, and market positioning to craft concepts that matter.",
  },
  {
    icon: FaPencilRuler,
    title: "Visual Exploration",
    description:
      "Through iterative sketching and digital prototyping, I explore multiple visual directions to find the perfect balance of form and function.",
  },
  {
    icon: FaMagic,
    title: "Refinement",
    description:
      "Pixel-perfect precision meets creative flair. I polish every detail until the design achieves visual harmony and communicates clearly.",
  },
  {
    icon: FaRocket,
    title: "Implementation",
    description:
      "Beyond delivery, I ensure designs work in the real world - providing brand guidelines, assets, and support for seamless implementation.",
  },
];

const GraphicDesignPortfolio = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, []);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(nextTestimonial, 5000);
  }, [nextTestimonial]);

  useEffect(() => {
    if (!isPaused) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, startAutoScroll]);

  const handleManualNavigation = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next") {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
      // Restart auto-scroll after manual navigation
      startAutoScroll();
    },
    [nextTestimonial, prevTestimonial, startAutoScroll]
  );

  return (
    <main className="pt-20 bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 z-10" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1245f8]">Design</span> That Speaks
                Volumes
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Every pixel tells a story. My designs blend aesthetics with
                purpose, creating visual identities that resonate and endure.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] text-white rounded-full hover:opacity-90 transition"
                >
                  View Projects
                </a>
                <a
                  href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20design%20services"
                  target="_blank"
                  className="px-8 py-3 border border-[#1245f8] text-[#007eff] rounded-full hover:bg-[#1245f8]/10 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1245f8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                <div className="relative bg-dark-800/50 backdrop-blur-md border border-dark-700 rounded-2xl p-1">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/placeholder.png"
                    alt="Design Work Showcase"
                    className="rounded-xl h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              My Design Philosophy
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1245f8] to-transparent"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="process-step bg-dark-800 p-8 rounded-xl border border-dark-700"
                data-aos="fade-up"
                data-aos-delay={100 * (processSteps.indexOf(step) + 1)}
              >
                <div className="w-16 h-16 bg-[#1245f8]/10 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-2xl text-[#007eff]" />
                </div>
                <h4 className=" font-semibold mb-3">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              Featured Projects
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1245f8] to-transparent"></span>
            </span>
          </h2>

          {designProjects.map((project) => (
            <div key={project.id} className="mb-20">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#007eff]">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 max-w-3xl">{project.description}</p>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Main Project Image */}
                <div className="col-span-8 rounded-2xl overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Color Palette */}
                <div className="col-span-4 bg-dark-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4">Color Palette</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.colors.map((color) => (
                      <div key={color} className="relative group">
                        <div
                          className="color-swatch w-8 h-8 rounded-md shadow-md"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-dark-800 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          {color}
                          <div className="absolute top-full left-1/2 w-2 h-2 bg-dark-800 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Items */}
                {project.gallery.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="col-span-4 rounded-2xl overflow-hidden"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={image}
                      alt={`Design work for ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              Client Experiences
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1245f8] to-transparent"></span>
            </span>
          </h2>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={() => handleManualNavigation("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-dark-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1245f8]"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-[#007eff] text-xl" />
            </button>
            <button
              onClick={() => handleManualNavigation("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-dark-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1245f8]"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-[#007eff] text-xl" />
            </button>

            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
                willChange: "transform",
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                  data-aos="fade-up"
                  data-aos-delay={testimonial.delay}
                >
                  <div className="bg-dark-800 p-8 rounded-xl border border-dark-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1245f8]/10">
                    <div className="flex items-left mb-6">
                      <div>
                        <FaCommentDots className="text-[#007eff] mb-2" />
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    startAutoScroll();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-[#1245f8] w-6"
                      : "bg-dark-700 hover:bg-dark-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Ready to bring your vision to life?
          </h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let&apos;s collaborate to create something extraordinary. Whether
            you need a complete brand identity or specific design assets,
            I&apos;m here to help.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://wa.me/263778360648?text=Hello%20I%20would%20like%20to%20discuss%20a%20design%20project"
              target="_blank"
              className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition flex items-center justify-center"
            >
              <FaCommentDots className="mr-2" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:keithrodney@rodneytechinc.co.zw"
              className="px-8 py-3 border border-white text-white rounded-full hover:bg-[#1245f8]/10 transition flex items-center justify-center"
            >
              <FaImages className="mr-2" /> Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GraphicDesignPortfolio;
