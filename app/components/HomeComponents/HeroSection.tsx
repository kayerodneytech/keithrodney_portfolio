import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush, FaCode, FaTrophy, FaUsers } from "react-icons/fa";
import { Skeleton, SkeletonText, SkeletonAvatar } from "../ui/skeleton";

type HeroProps = {
  isLoading?: boolean;
};

function HeroSection({ isLoading = false }: HeroProps) {
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-16 w-3/4 mb-6" />
              <SkeletonText className="mb-8" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <div className="relative hidden lg:block">
              <SkeletonAvatar className="h-[500px] w-[500px]" />
              <div className="absolute -bottom-6 -left-6">
                <Skeleton className="h-20 w-48" />
              </div>
              <div className="absolute -top-6 -right-6">
                <Skeleton className="h-20 w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center" id="hero">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-[#1245f8] to-[#007eff]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Keith Rodney Phiri
              </span>
              <br />
              <span data-aos="fade-up" data-aos-delay="300">
                Digital Creative, Brand Strategist.
              </span>
            </h1>
            <p
              className="text-lg text-gray-400 mb-8 max-w-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Imagine if you combined a Digital Artist and a Social Media
              Strategist...then gave them the ability to code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#creative"
                className="px-6 py-3 bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] text-white rounded-lg hover:opacity-90 transition flex items-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <FaPaintBrush className="mr-2" /> View Creative Work
              </Link>
              <Link
                href="/#technical"
                className="px-6 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition flex items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaCode className="mr-2" /> Technical Skills
              </Link>
            </div>
          </div>

          <div
            className="relative hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="bg-dark-800 bg-opacity-70 backdrop-blur-md p-1 rounded-full inline-block border border-dark-700"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-xl h-2xl bg-gradient-to-br from-[#1245f8] to-[#2f2bfe] rounded-full p-1">
                <Image
                  src="/images/profile3.jpg"
                  alt="Keith Rodney Portraits"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1245f8] to-[#2f2bfe] flex items-center justify-center">
                  <FaTrophy className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-400">
                    Favourite Role
                  </p>
                  <p className="text-white font-semibold text-sm">Animator</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1245f8] to-[#2f2bfe] flex items-center justify-center">
                  <FaUsers className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-400">Clients</p>
                  <p className="text-white font-semibold">20+ Satisfied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
