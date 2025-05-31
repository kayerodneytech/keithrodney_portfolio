<?php 
$pageTitle = "Graphic Design Portfolio | Keith Rodney Phiri";
include '../includes/header.php';
?>

<style>
    .design-process {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }
    .process-step {
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .process-step:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04);
    }
    .project-card {
        perspective: 1000px;
        transform-style: preserve-3d;
    }
    .project-inner {
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .project-card:hover .project-inner {
        transform: rotateY(10deg);
    }
    .color-swatch {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: inline-block;
        margin-right: 10px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }
    .color-swatch:hover {
        transform: scale(1.2);
    }
    .neon-text {
        text-shadow: 0 0 5px rgba(79, 70, 229, 0.5), 
                     0 0 10px rgba(99, 102, 241, 0.3);
    }
    .gradient-border {
        position: relative;
    }
    .gradient-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }
</style>

<main class="pt-20 bg-dark-900">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 z-10" data-aos="fade-right">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 neon-text">
                        <span class="text-primary-400">Design</span> That Speaks Volumes
                    </h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl">
                        Every pixel tells a story. My designs blend aesthetics with purpose, creating visual identities that resonate and endure.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#projects" class="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:opacity-90 transition">
                            View Projects
                        </a>
                        <a href="https://wa.me/263778360648?text=Hello%20I%20am%20interested%20in%20your%20design%20services" 
                           target="_blank"
                           class="px-8 py-3 border border-primary-500 text-primary-400 rounded-full hover:bg-primary-500/10 transition">
                            Get a Quote
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-left">
                    <div class="relative">
                        <div class="absolute -top-10 -left-10 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                        <div class="relative bg-dark-800/50 backdrop-blur-md border border-dark-700 rounded-2xl p-1 gradient-border">
                            <img src="https://www.rodneytechinc.co.zw/assets/images/srvc-design.png" alt="Design Work Showcase" class="rounded-xl  h-64">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Process -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
                <span class="relative inline-block">
                    My Design Philosophy
                    <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
                </span>
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="process-step bg-dark-800 p-8 rounded-xl border border-dark-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-lightbulb text-2xl text-primary-400"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Conceptualization</h3>
                    <p class="text-gray-400">
                        Every great design begins with understanding. I dive deep into brand essence, target audience, and market positioning to craft concepts that matter.
                    </p>
                </div>
                
                <div class="process-step bg-dark-800 p-8 rounded-xl border border-dark-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-pencil-ruler text-2xl text-primary-400"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Visual Exploration</h3>
                    <p class="text-gray-400">
                        Through iterative sketching and digital prototyping, I explore multiple visual directions to find the perfect balance of form and function.
                    </p>
                </div>
                
                <div class="process-step bg-dark-800 p-8 rounded-xl border border-dark-700" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-magic text-2xl text-primary-400"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Refinement</h3>
                    <p class="text-gray-400">
                        Pixel-perfect precision meets creative flair. I polish every detail until the design achieves visual harmony and communicates clearly.
                    </p>
                </div>
                
                <div class="process-step bg-dark-800 p-8 rounded-xl border border-dark-700" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-rocket text-2xl text-primary-400"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Implementation</h3>
                    <p class="text-gray-400">
                        Beyond delivery, I ensure designs work in the real world - providing brand guidelines, assets, and support for seamless implementation.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <?php
$featuredProject = [
    'title' => 'Blxck Mxrket Brand Identity',
    'description' => 'Complete visual identity for a contemporary fashion brand including logo, color palette, typography, and application examples.',
    'main_image' => 'images/blk_main.jpg',
    'gallery' => [
        'images/blk_gold.jpg',
        'images/blxck_business_card.jpg',
        'images/blk_shirt1.jpg'
    ],
    'colors' => ['#000000', '#FFFFFF', '#FF0000', '#888888'],
    'tools' => ['Illustrator', 'Photoshop', 'InDesign', ],
    'tags' => ['Branding', 'Logo Design', 'Brand Identity']
];
?>

<style>
    .project-showcase {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1.5rem;
    }
    
    .main-image {
        grid-column: span 8;
        grid-row: span 2;
    }
    
    .color-palette {
        grid-column: span 4;
        grid-row: span 1;
    }
    
    .tools-used {
        grid-column: span 4;
        grid-row: span 1;
    }
    
    .gallery-item {
        grid-column: span 4;
        grid-row: span 1;
    }
    
    .project-card {
        background: rgba(30, 41, 59, 0.5);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    
 .color-swatch {
    transition: all 0.2s ease;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-swatch:hover {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
}
    
    .tool-badge {
        display: inline-block;
        background: rgba(79, 70, 229, 0.2);
        color: #a5b4fc;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
        .project-showcase {
            grid-template-columns: 1fr;
        }
        
        .main-image,
        .color-palette,
        .tools-used,
        .gallery-item {
            grid-column: span 1;
            grid-row: span 1;
        }
    }
</style>

<section class="py-20 bg-dark-900">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
            <span class="relative inline-block">
                Featured Projects
                <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </span>
        </h2>
        
        <div class="mb-10">
            <h3 class="text-2xl md:text-3xl font-bold mb-2 text-primary-400"><?= $featuredProject['title'] ?></h3>
            <div class="flex flex-wrap gap-2 mb-4">
                <?php foreach ($featuredProject['tags'] as $tag): ?>
                <span class="px-3 py-1 bg-dark-800 text-sm rounded-full"><?= $tag ?></span>
                <?php endforeach; ?>
            </div>
            <p class="text-gray-300 max-w-3xl"><?= $featuredProject['description'] ?></p>
        </div>
        
        <div class="project-showcase">
            <!-- Main Project Image -->
            <div class="main-image rounded-2xl overflow-hidden">
                <img src="<?= $featuredProject['main_image'] ?>" alt="<?= $featuredProject['title'] ?>" class="w-full h-full object-cover">
            </div>
            
         <!-- Color Palette -->
<div class="color-palette project-card">
    <h4 class="text-lg font-semibold mb-4">Color Palette</h4>
    <div class="flex flex-wrap gap-3">
        <?php foreach ($featuredProject['colors'] as $color): ?>
        <div class="relative group">
            <div class="color-swatch w-8 h-8 rounded-md shadow-md" 
                 style="background-color: <?= $color ?>"
                 title="<?= $color ?>">
            </div>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-dark-800 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                <?= $color ?>
                <div class="absolute top-full left-1/2 w-2 h-2 bg-dark-800 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>
            
            <!-- Tools Used -->
            <div class="tools-used project-card">
                <h4 class="text-lg font-semibold mb-4">Tools Used</h4>
                <div>
                    <?php foreach ($featuredProject['tools'] as $tool): ?>
                    <span class="tool-badge"><?= $tool ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <!-- Gallery Items -->
            <?php foreach ($featuredProject['gallery'] as $image): ?>
            <div class="gallery-item rounded-2xl overflow-hidden">
                <img src="<?= $image ?>" alt="Design work for <?= $featuredProject['title'] ?>" class="w-full h-full object-cover">
            </div>
            <?php endforeach; ?>
        </div>
    </div>
  <!-- Behance CTA -->
            <div class="text-center mt-20" data-aos="fade-up">
                <h3 class="text-2xl font-semibold mb-4">Want to see more of my work?</h3>
                <p class="text-gray-400 max-w-2xl mx-auto mb-8">
                    Browse my complete collection of design projects on Behance, where I share detailed case studies and design processes.
                </p>
                <a href="<?php echo BEHANCE_URL; ?>" target="_blank" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:opacity-90 transition">
                    <i class="fab fa-behance mr-2"></i> View My Behance Profile
                </a>
            </div>
</section>
   <!-- Testimonials -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
            <span class="relative inline-block">
                Client Experiences
                <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </span>
        </h2>
        
        <?php
        $testimonials = [
            [
                'name' => 'Brighton L. Nkomo',
                'position' => 'CEO, Blxck Mxrket',
                'quote' => '"The design process was very smooth. He took into consideration my ideas and views to create a unique and memorable logo for my company, and I was really happy with it. I would definitely recommend Keith!"',
                'delay' => 100
            ],
            [
                'name' => 'Nobukhosi M.',
                'position' => 'Managing Director, FABG',
                'quote' => '"Working with Keith was a game-changer for our brand. He didn\'t just deliver designs - he delivered a complete visual system that works across all our touchpoints. His ability to understand and elevate our vision was remarkable."',
                'delay' => 200
            ],
            [
                'name' => 'James L.',
                'position' => 'Founder, Design Core',
                'quote' => '"The logo Keith created for our platform perfectly captures our mission to connect designers. His conceptual approach resulted in a mark that\'s both meaningful and memorable."',
                'delay' => 300
            ],
            [
                'name' => 'Nadia T.',
                'position' => 'Product Manager, MunchMate',
                'quote' => '"Not many designers think about design the same way he does. he truly goes out of his way do deliver what the client wants and that what I liked the most!"',
                'delay' => 400
            ]
        ];
        ?>
        
        <div class="relative">
            <!-- Testimonial Carousel -->
            <div class="testimonial-carousel overflow-hidden">
                <div class="flex transition-transform duration-500 ease-in-out">
                    <?php foreach ($testimonials as $testimonial): ?>
                    <div class="flex-shrink-0 w-full md:w-1/2 px-4">
                        <div class="bg-dark-800 p-8 rounded-xl border border-dark-700 h-full" 
                             data-aos="fade-up" data-aos-delay="<?= $testimonial['delay'] ?>">
                            <div class="flex items-left mb-6">
                              
                                <div>
                                <i class="fas fa-quote-left text-primary-400"></i>
                                    <h4 class="font-semibold"><?= $testimonial['name'] ?></h4>
                                    <p class="text-gray-500 text-sm"><?= $testimonial['position'] ?></p>
                                </div>
                            </div>
                            <p class="text-gray-300 italic"><?= $testimonial['quote'] ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <!-- Navigation Arrows -->
            <button class="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-dark-700 rounded-full p-3 shadow-lg hover:bg-primary-600 transition">
                <i class="fas fa-chevron-left text-white"></i>
            </button>
            <button class="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-dark-700 rounded-full p-3 shadow-lg hover:bg-primary-600 transition">
                <i class="fas fa-chevron-right text-white"></i>
            </button>
            
            <!-- Dots Indicator -->
            <div class="flex justify-center mt-8 space-x-2">
                <?php foreach ($testimonials as $index => $testimonial): ?>
                <button class="testimonial-dot w-3 h-3 rounded-full bg-dark-600 hover:bg-primary-500 transition <?= $index === 0 ? 'bg-primary-500' : '' ?>" 
                        data-index="<?= $index ?>"></button>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<style>
.testimonial-carousel {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.testimonial-carousel .flex {
    display: flex;
    width: 100%;
}

.testimonial-carousel .flex-shrink-0 {
    flex: 0 0 auto;
    transition: transform 0.5s ease-in-out;
}

@media (max-width: 767px) {
    .testimonial-carousel .flex-shrink-0 {
        width: 100%;
    }
}

@media (min-width: 768px) {
    .testimonial-carousel .flex-shrink-0 {
        width: 50%;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const slides = carousel.querySelector('.flex');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    let currentIndex = 0;
    const slideCount = <?= count($testimonials) ?>;
    const visibleSlides = window.innerWidth >= 768 ? 2 : 1;
    
    function updateCarousel() {
        const slideWidth = 100 / visibleSlides;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-primary-500', index === currentIndex);
            dot.classList.toggle('bg-dark-600', index !== currentIndex);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(slideCount - visibleSlides, currentIndex + 1);
        updateCarousel();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto-slide every 5 seconds
    let autoSlide = setInterval(() => {
        if (currentIndex >= slideCount - visibleSlides) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    }, 5000);
    
    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            if (currentIndex >= slideCount - visibleSlides) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, 5000);
    });
    
    // Responsive adjustments
    window.addEventListener('resize', () => {
        const newVisibleSlides = window.innerWidth >= 768 ? 2 : 1;
        if (newVisibleSlides !== visibleSlides) {
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    // Initialize
    updateCarousel();
});
</script>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-700 to-purple-800">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 class="text-3xl font-bold mb-6" data-aos="fade-up">
                Ready to bring your vision to life?
            </h2>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Let's collaborate to create something extraordinary. Whether you need a complete brand identity or specific design assets, I'm here to help.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                <a href="https://wa.me/263778360648?text=Hello%20I%20would%20like%20to%20discuss%20a%20design%20project" 
                   target="_blank"
                   class="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition flex items-center justify-center">
                    <i class="fas fa-comment-dots mr-2"></i> Chat on WhatsApp
                </a>
                <a href="mailto:keithrodney@rodneytechinc.co.zw"
                   class="px-8 py-3 border border-white text-white rounded-full hover:bg-primary-500/10 transition flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i> Send an Email
                </a>
            </div>
        </div>
    </section>
</main>

<?php include '../includes/footer.php'; ?>