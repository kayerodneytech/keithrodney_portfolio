import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const certifications = [
  {
    id: 1,
    title: "Social Media Marketing Professional Certificate",
    issuer: "Hootsuite",
    date: "May 2025",
    skills: ["Social Media Marketing"],
    logo: "/images/logos/hootsuite.png",
  },
  {
    id: 2,
    title: "Programming Foundations: Version Control with Git",
    issuer: "LinkedIn",
    date: "Feb 2025",
    skills: ["Version Control", "Git"],
    logo: "/images/logos/linkedin.png",
  },
  {
    id: 3,
    title: "Public Speaking: Find Your Confidence",
    issuer: "LinkedIn",
    date: "Jan 2025",
    skills: ["Public Speaking"],
    logo: "/images/logos/linkedin.png",
  },
  {
    id: 4,
    title: "Project Management Skills for Leaders",
    issuer: "Project Management Institute",
    date: "Nov 2024",
    skills: ["Project Management"],
    logo: "/images/logos/pmi.png",
  },
  {
    id: 5,
    title: "Generative AI Professional Certificate",
    issuer: "Microsoft",
    date: "Oct 2024",
    skills: ["Generative AI", "Machine Learning", "Microsoft Copilot"],
    logo: "/images/logos/microsoft.png",
  },
  {
    id: 6,
    title: "Marketing: Copywriting for Social Media",
    issuer: "LinkedIn",
    date: "Oct 2024",
    skills: ["Social Media Writing", "Social Media Marketing"],
    logo: "/images/logos/linkedin.png",
  },
  {
    id: 7,
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Sep 2024",
    skills: ["Computer Ethics", "Responsible AI"],
    logo: "/images/logos/linkedin.png",
  },
  {
    id: 8,
    title: "Foundations of UX Design",
    issuer: "Google",
    date: "Sep 2024",
    skills: ["Visual Design", "User Experience Design"],
    logo: "/images/logos/google.webp",
  },
  {
    id: 9,
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "Sep 2024",
    skills: ["Cybersecurity", "Python", "Security Frameworks"],
    logo: "/images/logos/google.webp",
  },
  {
    id: 10,
    title: "Graphic Design: Concepts",
    issuer: "LinkedIn",
    date: "Sep 2024",
    skills: ["Color Theory", "Graphic Design"],
    logo: "/images/logos/linkedin.png",
  },
];

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let autoPlayInterval: NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      autoPlayInterval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev >= certifications.length - visibleSlides ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoPlayInterval);
    };
  }, [isAutoPlaying, visibleSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= certifications.length - visibleSlides ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? certifications.length - visibleSlides : prev - 1
    );
  };

  return (
    <section className="py-16 bg-dark-900" id="certifications">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="relative inline-block">
            My Certifications
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
          </span>
        </motion.h2>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * (100 / visibleSlides)}%` }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-dark-800 rounded-xl p-6 h-full border border-[#1245f8]"
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        width={1000}
                        height={1000}
                        src={cert.logo}
                        alt={cert.issuer}
                        className="rounded-lg h-8 w-8 mr-3 object-contain"
                      />
                      <div>
                        <h5 className="font-semibold">{cert.title}</h5>
                        <p className="text-gray-500 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Issued {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#1245f8]/40 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-dark-700 rounded-full p-2 shadow-lg hover:bg-primary-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-dark-700 rounded-full p-2 shadow-lg hover:bg-primary-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/in/keithrodneytech/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-500 hover:text-primary-400 transition"
          >
            View All Certifications
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
