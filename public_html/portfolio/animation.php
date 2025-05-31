<?php
// Custom SEO for Animation Portfolio
$page_title = "Animation Portfolio | Keith Rodney Phiri - Motion Designer";
$page_description = "Professional animation portfolio showcasing 2D/3D motion graphics, character animation, and explainer videos by Zimbabwe-based motion designer Keith Rodney Phiri.";
$page_keywords = "animation portfolio, motion graphics, 2D animation, 3D animation, character animation, explainer videos, Zimbabwe animator";
$og_image = "https://yourdomain.com/assets/images/portfolio/animation-preview.jpg";
$page_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

include '../includes/header.php';
?>

<style>
    .animation-card {
        transition: all 0.3s ease;
        transform-style: preserve-3d;
    }
    .animation-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3);
    }
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
    .skill-pill {
        transition: all 0.2s ease;
    }
    .skill-pill:hover {
        transform: scale(1.05);
        background-color: rgba(99, 102, 241, 0.2);
    }
    
    /* Filter tab animations */
    .filter-btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }
    .filter-btn.active {
        background-color: rgba(99, 102, 241, 0.2);
        color: #818cf8;
    }
    .filter-btn.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 2px;
        background-color: #818cf8;
        border-radius: 2px;
    }
    
    /* Project grid animation */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }
    .project-item {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
        transform: translateY(0);
    }
    .project-item.hidden {
        opacity: 0;
        transform: translateY(20px);
        height: 0;
        padding: 0;
        margin: 0;
        border: 0;
        overflow: hidden;
    }
</style>

<section class="pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <!-- Hero Section -->
        <div class="text-center mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Animation Portfolio</h1>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                Bringing stories to life through motion. Explore my collection of 2D/3D animations, motion graphics, and character animations.
            </p>
        </div>

        <?php
        // Define projects array
        $projects = [
              [
                'id' => 'climate-action',
                'title' => 'Why Young People Can\'t Ignore Climate Change Anymore',
                'video_id' => '0zHRZkq30sU',
                'description' => 'This short animated video is a project I worked on back in mid 2024, aiming to highlight the role of young people in the global fight against climate change. 🌍',
                'tags' => ['Activism','motion', '2D', 'Concept'],
                'categories' => ['2d', 'personal','motion']
            ],
                   [
                'id' => 'didrr',
                'title' => 'Disasters & Disabilities: DIDRR Explained',
                'video_id' => '04wsgOjsj2E?si',
                'description' => 'This animated explainer video introduced key concepts around hazards, disasters, and the importance of Disability-Inclusive Disaster Risk Reduction (DIDRR).
<br>
Project Date: 2023<br>
Client – NUST Institute of Development Studies',
                'tags' => ['motion', 'client'],
                'categories' => ['2d', 'client','motion']
            ],
            [
                'id' => 'khronicles',
                'title' => 'Khronicles Teaser',
                'video_id' => '6kZcFQvGkps',
                'description' => 'A short fight scene incorporating extensive editing and VFX skills.',
                'tags' => ['2D Animation', 'Character Design', 'VFX'],
                'categories' => ['2d', 'personal']
            ],
                 [
                'id' => 'khronicles',
                'title' => '\'That one friend\' Scene',
                'video_id' => 'pgbVG47dXQA',
                'description' => 'A scene I did to practice Anime styling lighting techniques.',
                'tags' => ['2D Animation', 'Character Design', 'VFX'],
                'categories' => ['2d', 'personal']
            ],
            [
                'id' => 'quack-quack',
                'title' => 'Kids Cartoons',
                'video_id' => 're4iIvTBcBU',
                'description' => 'A short pre-editing preview of one of the scenes I did for the animated kids show, Quack Quack Duck.',
                'tags' => ['Character Animation', 'For Kids'],
                'categories' => ['2d', 'client']
            ],
            [
                'id' => 'blaq-ego',
                'title' => 'Bhinzi Song Visualizer',
                'video_id' => '9h2jm802LbU',
                'description' => 'A visualizer I did for local artist Blaq Ego for his trending song.',
                'tags' => ['Character Animation', 'Music Video'],
                'categories' => ['2d', 'client','personal' ]
            ],
        
           
              [
                'id' => 'run-for-change',
                'title' => 'CARE Charity Marathon Promo',
                'video_id' => 'hFP2mpwVOY8',
                'description' => 'A short Promo animation we created for the St. Bernard’s Catholic Charity Marathon in 2024, titled "Run for Change."
It was designed to promote the marathon event and encourage participation in support of charitable causes.',
                'tags' => ['Character Animation', 'Music Video'],
                'categories' => ['2d', 'client','motion' ]
            ],
          
            [
                'id' => 'blitz-concept',
                'title' => '2023 BLITZ Concept Video',
                'video_id' => 'WsvLXszN8Hw',
                'description' => 'An animated concept for Plan International Zimbabwe. Abstract video calling youths to participate in the BLITZ youth innovators program, featuring youths harvesting fruits (opportunities Zimbabwe has to offer).',
                'tags' => ['motion', 'Concept'],
                'categories' => ['2d', 'client']
            ],
            [
                'id' => 'out-with-the-old',
                'title' => 'Out with the old (2022) Scene 1',
                'video_id' => 'Uixdn7ivR-0',
                'description' => 'Sci-fi animation about the Architect, a being on the moon trying to dumb down humanity enough to accept his rule. Follows Keith, a human intern helping execute these plans.',
                'tags' => ['Sci-Fi', 'Character'],
                'categories' => ['personal']
            ]
        ];
        
        // Get all unique categories from projects
        $all_categories = [];
        foreach ($projects as $project) {
            $all_categories = array_merge($all_categories, $project['categories']);
        }
        $unique_categories = array_unique($all_categories);
        ?>

        <!-- Filter Controls -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" id="filter-controls">
            <button class="filter-btn px-4 py-2 rounded-full active" data-filter="all">All</button>
            <button class="filter-btn px-4 py-2 rounded-full" data-filter="motion">Motion Graphics</button>
            <button class="filter-btn px-4 py-2 rounded-full" data-filter="personal">Personal Projects</button>
            <button class="filter-btn px-4 py-2 rounded-full" data-filter="client">Client Projects</button>
        </div>

        <!-- Animation Projects Grid -->
        <div class="projects-grid" id="projects-grid">
            <?php foreach ($projects as $index => $project): ?>
                <div class="animation-card project-item bg-dark-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-dark-700" 
                     data-aos="fade-up" 
                     data-aos-delay="<?= $index * 100 ?>"
                     data-categories="<?= implode(' ', $project['categories']) ?>">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/<?= $project['video_id'] ?>" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2"><?= $project['title'] ?></h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <?php foreach ($project['tags'] as $tag): ?>
                                <span class="skill-pill px-3 py-1 bg-dark-700 rounded-full text-xs"><?= $tag ?></span>
                            <?php endforeach; ?>
                        </div>
                        <p class="text-gray-400 mb-4"><?= $project['description'] ?></p>
                        <!--
                        <a href="#" class="text-primary-400 hover:text-primary-300 inline-flex items-center">
                            View Case Study <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                        -->
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-20" data-aos="fade-up">
            <h3 class="text-2xl font-semibold mb-4">Have an animation project in mind?</h3>
            <p class="text-gray-400 max-w-2xl mx-auto mb-8">
                Let's bring your ideas to life with captivating motion and storytelling.
            </p>
            <a href="wa.me/263778360648" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:opacity-90 transition">
                Chat on Whatsapp <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="https://www.tiktok.com/@rti2d" target="_blank" class="inline-flex items-center px-8 py-3 bg-black border border-primary text-white rounded-full hover:opacity-90 transition">
                See more on Tik Tok <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#filter-controls .filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Animate project items
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-categories').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    // Show item with animation
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    // Hide item with animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
    
    // Initialize GSAP for smoother animations (optional)
    if (typeof gsap !== 'undefined') {
        // You can enhance animations with GSAP if available
    }
});
</script>

<!-- Schema Markup for Animation Portfolio -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        <?php foreach ($projects as $index => $project): ?>
        {
            "@type": "ListItem",
            "position": <?= $index + 1 ?>,
            "item": {
                "@type": "VideoObject",
                "name": "<?= $project['title'] ?>",
                "description": "<?= addslashes($project['description']) ?>",
                "thumbnailUrl": "https://i.ytimg.com/vi/<?= $project['video_id'] ?>/maxresdefault.jpg",
                "embedUrl": "https://www.youtube.com/embed/<?= $project['video_id'] ?>"
            }
        }<?= $index < count($projects) - 1 ? ',' : '' ?>
        <?php endforeach; ?>
    ]
}
</script>

<?php include '../includes/footer.php'; ?>