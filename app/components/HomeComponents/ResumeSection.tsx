import React from "react";

const ResumeSection = () => {
  return (
    <>
      <section className="py-20" id="resume">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              My Resume
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </span>
          </h2>

          <div
            className="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-dark-700"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold">Keith Rodney Phiri</h3>
                <p className="text-gray-400">Digital Creative Professional</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition flex items-center"
                >
                  <i className="fas fa-download mr-2"></i> Download Full PDF
                </a>
                <a
                  href="contact.php"
                  className="px-6 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg hover:bg-dark-600 transition flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact Me
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-dark-600">
                  Professional Experience
                </h4>

                <div className="space-y-8">
                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-briefcase text-xs text-white"></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h5 className="font-semibold">
                        Social Media Manager, Content Designer
                      </h5>
                      <span className="text-gray-500 text-sm md:mt-1">
                        06/2025 - Present
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      FlexiWork Workspace and Coworking, Bulawayo
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                      <li>
                        Collaborating with the marketing team to develop,
                        refine, and implement tailored social media strategies
                        across platforms
                      </li>
                      <li>
                        Designing visual content for both digital and print use,
                        including posters, flyers, social media banners, and
                        promotional materials
                      </li>
                      <li>
                        Capturing, editing, and optimizing short-form video
                        content for platforms like TikTok and Instagram Reels to
                        boost engagement
                      </li>
                    </ul>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-briefcase text-xs text-white"></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h5 className="font-semibold">
                        Animation and Graphic Design Instructor
                      </h5>
                      <span className="text-gray-500 text-sm md:mt-1">
                        10/2023 - 02/2024
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      Abenhla Digital, Bulawayo
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                      <li>
                        Teaching animation and graphic design using Adobe
                        Creative Suite, leveraging skills learned through
                        self-study and professional experience
                      </li>
                      <li>
                        Trained beginner and intermediate students, helping them
                        develop professional portfolios in graphic design
                      </li>
                    </ul>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-briefcase text-xs text-white"></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h5 className="font-semibold">
                        Social Media Manager & Graphic Designer
                      </h5>
                      <span className="text-gray-500 text-sm md:mt-1">
                        10/2022 - Present
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      Ethnik Collections, Bulawayo
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                      <li>
                        Developed and executed digital marketing strategies that
                        increased social media engagement by over 40% between
                        2023 and 2024
                      </li>
                      <li>
                        Managed and scheduled content across major social media
                        platforms to maintain brand consistency and engagement
                      </li>
                      <li>
                        Created and managed targeted Facebook ad campaigns using
                        Ads Manager and Meta Business Suite
                      </li>
                      <li>
                        Designed compelling graphics and edited visual content
                        for social media platforms
                      </li>
                    </ul>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-briefcase text-xs text-white"></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h5 className="font-semibold">Animator</h5>
                      <span className="text-gray-500 text-sm md:mt-1">
                        11/2022 - 09/2023
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      Chaftop Films, Bulawayo
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                      <li>
                        Character animation for an animated children&apos;s film
                        meant for TV, under tight production deadlines
                      </li>
                      <li>
                        Following director instructions and scripts to animate
                        as required by the show storyline
                      </li>
                      <li>
                        Collaborated with creative teams to design engaging
                        characters and visual sequences
                      </li>
                    </ul>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-briefcase text-xs text-white"></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h5 className="font-semibold">Freelancer</h5>
                      <span className="text-gray-500 text-sm md:mt-1">
                        Since 09/2021
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      Rodneytech, Inc., Bulawayo
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                      <li>
                        Established Rodneytech, Inc. and Edtech startup
                        developing educational web platforms like khoda, and
                        also provides services in Web development, 2D animation,
                        and Brand management
                      </li>
                      <li>Teaching and leading a team of young people</li>
                      <li>
                        Self-taught many of the technical skills that have
                        contributed to Rodneytech&apos;s success, demonstrating
                        a high level of commitment and leadership
                      </li>
                      <li>
                        Completed projects with clients including the NUST
                        Institute of Development studies and Plan International
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-dark-600">
                  Education
                </h4>

                <div className="space-y-6">
                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-xs text-white"></i>
                    </div>
                    <h5 className="font-semibold mb-1">
                      A&apos; Level (Physics, Computer Science, Mathematics)
                    </h5>
                    <p className="text-gray-500 text-sm">
                      St. Bernard&apos;s High School | 2021 - 2022
                    </p>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-xs text-white"></i>
                    </div>
                    <h5 className="font-semibold mb-1">
                      O&apos; Level – 11 Passed
                    </h5>
                    <p className="text-gray-500 text-sm">
                      Pumula High School | 2016 - 2020
                    </p>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-xs text-white"></i>
                    </div>
                    <h5 className="font-semibold mb-1">
                      Graphic Design, Animation and Video Editing
                    </h5>
                    <p className="text-gray-500 text-sm">Self Taught</p>
                  </div>

                  <div className="timeline-item relative pl-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-xs text-white"></i>
                    </div>
                    <h5 className="font-semibold mb-1">
                      Google Cybersecurity and IT Support
                    </h5>
                    <p className="text-gray-500 text-sm">
                      Coursera | Impact Hub Harare
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mt-10 mb-6 pb-2 border-b border-dark-600">
                  References
                </h4>
                <p className="text-gray-400 text-sm">Available upon request</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
