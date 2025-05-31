"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const CreativeEcosystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const nodes = [
    {
      id: 1,
      title: "I Build Platforms",
      icon: "fas fa-laptop-code",
      description:
        "My hobby? I plan and build web platforms. With a solid foundation in computer science, I went on to learn Web Development...Starting out as a Php and Wordpress Dev and recently expanding my skill set to React./Next JS. ",
      position: "right",
    },
    {
      id: 2,
      title: "I Design",
      icon: "fas fa-paint-brush",
      description:
        "My background in graphic design means i can create visual content to effectively deliver brand messages.",
      position: "top",
    },
    {
      id: 3,
      title: "I Animate",
      icon: "fas fa-chess",
      description:
        "A highly valued skill that allows me to translate ANYTHING, into a moving story for any audience.",
      position: "bottom",
    },
    {
      id: 4,
      title: "I grow brands.",
      icon: "fas fa-film",
      description:
        "I am a Hootsuite certified social media marketer, a skill that allows me to understand user needs across platforms and apply this knowledge across all my fields of work.",
      position: "left",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 bg-dark-900" id="lifecycle" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="relative inline-block">
            My Skills Ecosystem
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </span>
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            className="relative w-full max-w-2xl h-96 md:h-[500px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Animated Circle */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
            >
              <motion.circle
                cx="250"
                cy="250"
                r="200"
                stroke="url(#circleGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,3"
                variants={pathVariants}
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

            {/* Center Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-10 border-2 border-blue-400 shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <span className="text-center font-bold text-white text-sm md:text-base">
                A User centered, <br />
                Creative Focused
                <br />
                WorkFlow.
              </span>
            </motion.div>

            {/* Nodes */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                className={`absolute ${
                  node.position === "top"
                    ? "top-4 left-1/2 transform -translate-x-1/2"
                    : node.position === "right"
                    ? "top-1/2 right-4 transform -translate-y-1/2"
                    : node.position === "bottom"
                    ? "bottom-4 left-1/2 transform -translate-x-1/2"
                    : "top-1/2 left-4 transform -translate-y-1/2"
                }`}
                variants={nodeVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-800 border-2 border-blue-500 flex flex-col items-center justify-center p-2 shadow-lg cursor-pointer group">
                  <i
                    className={`${node.icon} text-xl md:text-2xl text-blue-400 mb-1 group-hover:text-blue-300 transition-colors`}
                  ></i>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                    {node.title}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Animated Paths */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
            >
              <motion.path
                d="M250 50 Q 400 250, 250 450"
                stroke="#4f46e5"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                variants={pathVariants}
              />
              <motion.path
                d="M450 250 Q 250 400, 50 250"
                stroke="#4f46e5"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                variants={pathVariants}
              />
              <motion.path
                d="M250 450 Q 100 250, 250 50"
                stroke="#4f46e5"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                variants={pathVariants}
              />
              <motion.path
                d="M50 250 Q 250 100, 450 250"
                stroke="#4f46e5"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                variants={pathVariants}
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
          </motion.div>
        </div>

        {/* Description Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-blue-500 transition-colors"
              variants={nodeVariants}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">
                {index + 1}. {node.title}
              </h4>
              <p> {node.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeEcosystem;
