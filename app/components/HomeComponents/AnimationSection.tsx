"use client";

import { FaFilm } from "react-icons/fa";
import { Skeleton, SkeletonCard } from "../ui/skeleton";

// Project data

const youtubeVideos = [
  {
    id: "6kZcFQvGkps",
    title: "Khronicles Teaser scene",
    description:
      "A short fight scene incorporating extensive editing and VFX skills",
  },
  {
    id: "re4iIvTBcBU",
    title: "Motion Graphics Video",
    description: "Promotional motion graphics piece with dynamic transitions",
  },
  {
    id: "9h2jm802LbU",
    title: "Character Animation",
    description: "Showreel of character animation sequences",
  },
  {
    id: "Uixdn7ivR-0",
    title: "Explainer Animation",
    description: "Educational animation explaining complex concepts",
  },
];

type CreativeProps = {
  isLoading?: boolean;
};

function AnimationSection({ isLoading = false }: CreativeProps) {
  if (isLoading) {
    return (
      <main className="pt-20">
        <section className="py-20" id="animation">
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
    <section className="py-20" id="animation">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Animation Section */}
        <div className="animation-section space-y-12">
          {/* Section Heading */}
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end"
            data-aos="fade-up"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Animation</h3>
              <p className="text-gray-400 max-w-2xl">
                Want a unique way to tel your story to the world? Anmation might
                just be what you&apos;re looking for!
              </p>
            </div>
          </div>

          {/* YouTube Videos */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-white mb-2">
              Featured Projects
            </h4>
            <div className="grid md:grid-cols-2 gap-6 ">
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  className="video-container border border-[#e81258] rounded-xl"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?si=Cw7sDkUszj0dcsvW`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-64 rounded-lg"
                  ></iframe>
                  <div className="mt-2">
                    <h5 className="text-white font-medium">{video.title}</h5>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="/portfolio/animation"
              className="px-6 py-3 bg-gradient-to-br from-[#e81258] to-[#f57d1a] text-white rounded-lg hover:opacity-90 transition flex items-center justify-center"
            >
              <FaFilm className="mr-2" /> View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimationSection;
