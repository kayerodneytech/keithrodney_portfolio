<style type="text/css">
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<main class="pt-20">
    <section class="py-20" id="creative">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
                <span class="relative inline-block">
                    Creative Work
                    <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
                </span>
            </h2>

            <!-- Graphic Design Section -->
            <div class="mb-20">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8" data-aos="fade-up">
                    <div>
                        <h3 class="text-2xl font-semibold mb-2">Graphic Design</h3>
                        <p class="text-gray-400 max-w-2xl">
                            Visually compelling designs that communicate brand identity and messaging. From logos to complete 
                            brand systems, I create designs that make an impact.
                        </p>
                    </div>
                    <a href="<?php echo BEHANCE_URL; ?>" target="_blank" class="mt-4 md:mt-0 inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors" data-aos="fade-up" data-aos-delay="100">
                        View on Behance <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <?php
                    // Array of graphic design projects
                    $designProjects = [
                        [
                            'embed' => 'https://www.behance.net/embed/project/210980487?ilo0=1',
                            'title' => 'Blxck Mxrket Logo Design',
                            'year' => '2023',
                            'type' => 'Brand Identity',
                            'description' => 'Minimalist logo design for a contemporary fashion brand.',
                            'link' => 'https://www.behance.net/gallery/210980487/Blxck-Mxrket-Logo-Design'
                        ],
                        [
                            'embed' => 'https://www.behance.net/embed/project/212409753?ilo0=1',
                            'title' => 'MunchMate Brand Identity Design',
                            'year' => '2024',
                            'type' => 'Full Branding',
                            'description' => 'Complete Brand identity including logos, color schemes, and brand guidelines.',
                            'link' => BEHANCE_URL
                        ],
                        [
                            'embed' => 'https://www.behance.net/embed/project/204848239?ilo0=1',
                            'title' => 'F.A.B.G (pvt) Ltd Brand Identity',
                            'year' => '2024',
                            'type' => 'Full Branding',
                            'description' => 'FABG is a Bulawayo based company specializing in Interior design and logistics. The logo focuses on highlighting their vision to serve beyond borders.',
                            'link' => BEHANCE_URL
                        ],
                        [
                            'embed' => 'https://www.behance.net/embed/project/206672175?ilo0=1',
                            'title' => 'Design Core Brand Identity',
                            'year' => '2024',
                            'type' => 'Full Branding',
                            'description' => 'Logo and brand identity for Design Core, an app that connects designers of all levels with portfolio sharing and courses.',
                            'link' => BEHANCE_URL
                        ],
                        [
                            'embed' => 'https://www.behance.net/embed/project/204852331?ilo0=1',
                            'title' => 'Miscellaneous Poster Designs',
                            'year' => '2022 - 24',
                            'type' => 'Poster and Flier Design',
                            'description' => 'A collection of posters and fliers I\'ve done over the years.',
                            'link' => BEHANCE_URL
                        ]
                    ];

                    // Loop through design projects
                    foreach ($designProjects as $index => $project) {
                        echo '
                        <div class="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors" data-aos="fade-up" data-aos-delay="'.(200 + ($index * 100)).'">
                            <div class="relative overflow-hidden h-64">
                                <iframe src="'.$project['embed'].'" 
                                        height="256" width="100%" frameborder="0" 
                                        allowfullscreen loading="lazy" 
                                        allow="clipboard-write" class="w-full h-full"></iframe>
                            </div>
                            <div class="p-6">
                                <h4 class="text-white font-semibold text-lg mb-2">'.$project['title'].'</h4>
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-sm text-gray-400">'.$project['year'].'</span>
                                    <span class="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium">'.$project['type'].'</span>
                                </div>
                                <p class="text-gray-400 mb-4 text-sm">'.$project['description'].'</p>
                                <a href="'.$project['link'].'" 
                                   target="_blank" 
                                   class="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm transition-colors">
                                    View project <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>';
                    }
                    ?>
                    
                    <!-- More Projects Placeholder -->
                    <div class="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors" data-aos="fade-up" data-aos-delay="600">
                        <div class="relative overflow-hidden h-64 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                            <i class="fas fa-image text-5xl text-primary-500 opacity-30"></i>
                        </div>
                        <div class="p-6">
                            <h4 class="text-white font-semibold text-lg mb-2">More Projects</h4>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-sm text-gray-400">Various</span>
                                <span class="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium">Behance</span>
                            </div>
                            <p class="text-gray-400 mb-4 text-sm">
                                View all my graphic design projects on Behance.
                            </p>
                            <a href="<?php echo BEHANCE_URL; ?>" 
                               target="_blank" 
                               class="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm transition-colors">
                                Visit Behance <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                    <a href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20graphic%20design%20services" 
                       target="_blank"
                       class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center">
                        <i class="fas fa-comment-dots mr-2"></i> Request a Quote
                    </a>
                    <a href="portfolio/graphic_design"
                       class="px-6 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg hover:bg-dark-600 transition flex items-center justify-center">
                        <i class="fas fa-images mr-2"></i> View Full Portfolio
                    </a>
                </div>
            </div>

            <!-- Animation Section -->
            <div class="animation-section space-y-12">
                <!-- Section Heading -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end" data-aos="fade-up">
                    <div>
                        <h3 class="text-2xl font-semibold mb-2">Animation</h3>
                        <p class="text-gray-400 max-w-2xl">
                            Bringing stories to life through motion. From character animation to motion graphics, 
                            I create engaging visual narratives that captivate audiences.
                        </p>
                    </div>
                    <a href="https://www.tiktok.com/@rti2d" target="_blank" class="mt-4 md:mt-0 inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors" data-aos="fade-up" data-aos-delay="100">
                        View on TikTok <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- YouTube Videos -->
                <div class="space-y-4" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="text-lg font-semibold text-white mb-2">Featured Projects</h4>
                    <div class="grid md:grid-cols-2 gap-6">
                        <?php
                        // Array of YouTube videos
                        $youtubeVideos = [
                            [
                                'id' => '6kZcFQvGkps',
                                'title' => 'Khronicles Teaser scene',
                                'description' => 'A short fight scene incorporating extensive editing and VFX skills'
                            ],
                            [
                                'id' => 're4iIvTBcBU',
                                'title' => 'Motion Graphics Video',
                                'description' => 'Promotional motion graphics piece with dynamic transitions'
                            ],
                            [
                                'id' => '9h2jm802LbU',
                                'title' => 'Character Animation',
                                'description' => 'Showreel of character animation sequences'
                            ],
                            [
                                'id' => 'Uixdn7ivR-0',
                                'title' => 'Explainer Animation',
                                'description' => 'Educational animation explaining complex concepts'
                            ]
                        ];

                        // Loop through videos and render each one
                        foreach ($youtubeVideos as $video) {
                            echo '
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/'.$video['id'].'?si=Cw7sDkUszj0dcsvW" 
                                    title="'.$video['title'].'" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-64 rounded-lg">
                                </iframe>
                                <div class="mt-2">
                                    <h5 class="text-white font-medium">'.$video['title'].'</h5>
                                    <p class="text-gray-400 text-sm">'.$video['description'].'</p>
                                </div>
                            </div>';
                        }
                        ?>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                    <a href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20animation%20services" 
                       target="_blank"
                       class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center">
                        <i class="fas fa-comment-dots mr-2"></i> Request a Quote
                    </a>
                    <a href="portfolio/animation"
                       class="px-6 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg hover:bg-dark-600 transition flex items-center justify-center">
                        <i class="fas fa-film mr-2"></i> View Animation Portfolio
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>