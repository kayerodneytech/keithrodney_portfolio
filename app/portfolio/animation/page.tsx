"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaCommentDots } from "react-icons/fa";
import styles from "./animation.module.css";
import Image from "next/image";

type VideoProject = {
  id: string;
  title: string;
  video_id: string;
  description: string;
  tags: string[];
  categories: string[];
};

const projects: VideoProject[] = [
  {
    id: "climate-action",
    title: "Why Young People Can't Ignore Climate Change Anymore",
    video_id: "0zHRZkq30sU",
    description:
      "This short animated video is a project I worked on back in mid 2024, aiming to highlight the role of young people in the global fight against climate change. ",
    tags: ["Activism", "motion", "2D", "Concept"],
    categories: ["2d", "personal", "motion"],
  },
  {
    id: "didrr",
    title: "Disasters & Disabilities: DIDRR Explained",
    video_id: "04wsgOjsj2E",
    description:
      "This animated explainer video introduced key concepts around hazards, disasters, and the importance of Disability-Inclusive Disaster Risk Reduction (DIDRR). Project Date: 2023. Client – NUST Institute of Development Studies",
    tags: ["motion", "client"],
    categories: ["2d", "client", "motion"],
  },
  {
    id: "khronicles",
    title: "Khronicles Teaser",
    video_id: "6kZcFQvGkps",
    description:
      "A short fight scene incorporating extensive editing and VFX skills.",
    tags: ["2D Animation", "Character Design", "VFX"],
    categories: ["2d", "personal"],
  },
  {
    id: "khronicles-friend",
    title: "'That one friend' Scene",
    video_id: "pgbVG47dXQA",
    description: "A scene I did to practice Anime styling lighting techniques.",
    tags: ["2D Animation", "Character Design", "VFX"],
    categories: ["2d", "personal"],
  },
  {
    id: "quack-quack",
    title: "Kids Cartoons",
    video_id: "re4iIvTBcBU",
    description:
      "A short pre-editing preview of one of the scenes I did for the animated kids show, Quack Quack Duck.",
    tags: ["Character Animation", "For Kids"],
    categories: ["2d", "client"],
  },
  {
    id: "blaq-ego",
    title: "Bhinzi Song Visualizer",
    video_id: "9h2jm802LbU",
    description:
      "A visualizer I did for local artist Blaq Ego for his trending song.",
    tags: ["Character Animation", "Music Video"],
    categories: ["2d", "client", "personal"],
  },
  {
    id: "run-for-change",
    title: "CARE Charity Marathon Promo",
    video_id: "hFP2mpwVOY8",
    description:
      'A short Promo animation we created for the St. Bernard&apos;s Catholic Charity Marathon in 2024, titled "Run for Change." It was designed to promote the marathon event and encourage participation in support of charitable causes.',
    tags: ["Character Animation", "Music Video"],
    categories: ["2d", "client", "motion"],
  },
  {
    id: "blitz-concept",
    title: "2023 BLITZ Concept Video",
    video_id: "WsvLXszN8Hw",
    description:
      "An animated concept for Plan International Zimbabwe. Abstract video calling youths to participate in the BLITZ youth innovators program, featuring youths harvesting fruits (opportunities Zimbabwe has to offer).",
    tags: ["motion", "Concept"],
    categories: ["2d", "client"],
  },
  {
    id: "out-with-the-old",
    title: "Out with the old (2022) Scene 1",
    video_id: "Uixdn7ivR-0",
    description:
      "Sci-fi animation about the Architect, a being on the moon trying to dumb down humanity enough to accept his rule. Follows Keith, a human intern helping execute these plans.",
    tags: ["Sci-Fi", "Character"],
    categories: ["personal"],
  },
];

export default function AnimationPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.categories.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    // Initialize AOS
    const initializeAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    };
    initializeAOS();

    // Filter functionality
    const filterProjects = (filterValue: string) => {
      const projectItems = document.querySelectorAll(".project-item");

      projectItems.forEach((item) => {
        const categories =
          item.getAttribute("data-categories")?.split(" ") || [];

        if (filterValue === "all" || categories.includes(filterValue)) {
          item.classList.remove("hidden");
          setTimeout(() => {
            (item as HTMLElement).style.opacity = "1";
            (item as HTMLElement).style.transform = "translateY(0)";
          }, 50);
        } else {
          (item as HTMLElement).style.opacity = "0";
          (item as HTMLElement).style.transform = "translateY(20px)";
          setTimeout(() => {
            item.classList.add("hidden");
          }, 300);
        }
      });
    };

    const filterButtons = document.querySelectorAll(
      "#filter-controls .filter-btn"
    );

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter") || "all";
        filterProjects(filterValue);
      });
    });

    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <main className="pt-20 bg-dark-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 z-10" data-aos="fade-right">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#e81258]">Stories</span> Brought to
                    life
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                    Animation is unique way to tell a story. From educational
                    animations and explainer videos to carefully explain tough
                    concepts, to entertaining stories, music videos, or business
                    Adverts!
                  </p>
                  <div className="flex space-x-4">
                    <a
                      id="projects"
                      href="#projects"
                      className="px-8 py-3 bg-gradient-to-br from-[#e81258] to-[#f57d1a] text-white rounded-full hover:opacity-90 transition"
                    >
                      View Projects
                    </a>
                    <a
                      href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20animation%20services"
                      target="_blank"
                      className="px-8 py-3 border border-[#e81258] text-[#f57d1a] rounded-full hover:bg-[#1245f8]/10 transition"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-left">
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1245f8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                    <div className="relative bg-dark-800/50 backdrop-blur-md border border-[#e81258] rounded-2xl p-1">
                      <Image
                        width={1000}
                        height={1000}
                        src="/images/pp_cover.jpg"
                        alt="Design Work Showcase"
                        className="rounded-xl h-64 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Controls */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
          >
            <button
              className={`${styles["filter-btn"]} px-4 py-2 rounded-full ${
                activeFilter === "all" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`${styles["filter-btn"]} px-4 py-2 rounded-full ${
                activeFilter === "motion" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("motion")}
            >
              Motion Graphics
            </button>
            <button
              className={`${styles["filter-btn"]} px-4 py-2 rounded-full ${
                activeFilter === "personal" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("personal")}
            >
              Personal Projects
            </button>
            <button
              className={`${styles["filter-btn"]} px-4 py-2 rounded-full ${
                activeFilter === "client" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("client")}
            >
              Client Projects
            </button>
          </div>

          {/* Animation Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles["animation-card"]} bg-dark-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-[#e81258]`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles["video-container"]}>
                  <iframe
                    src={`https://www.youtube.com/embed/${project.video_id}`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 rounded-lg"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${styles["skill-pill"]} px-3 py-1 bg-[#f57d1a]/80 rounded-full text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4">
              Have an animation project in mind?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let&apos;s bring your ideas to life with captivating motion and
              storytelling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/263778360648"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-[#e81258] to-[#f57d1a] text-white rounded-full hover:opacity-90 transition"
              >
                <FaCommentDots className="mr-2" /> Chat on WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@rti2d"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-black border border-[#e81258] text-white rounded-full hover:opacity-90 transition"
              >
                <FaArrowRight className="mr-2" /> See more on TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
