<?php 
$page_title = "Keith Phiri | Digital Creative & Developer";
include 'includes/header.php';

?>

<main class="pt-20">
    <section class="min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right" data-aos-duration="800">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">Keith Rodney Phiri</span><br>
                        Digital Creative, Brand Strategist.
                    </h1>
                    <p class="text-lg text-gray-400 mb-8 max-w-lg">
                        Versatile digital professional specializing in social media strategy, graphic design and animation, and web development. 
                        Bridging creativity with technical expertise to deliver impactful digital experiences.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="creative.php" 
                           class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition flex items-center"
                           data-aos="fade-up" data-aos-delay="200">
                            <i class="fas fa-paint-brush mr-2"></i> View Creative Work
                        </a>
                        <a href="technical.php" 
                           class="px-6 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition flex items-center"
                           data-aos="fade-up" data-aos-delay="300">
                            <i class="fas fa-code mr-2"></i> Technical Skills
                        </a>
                    </div>
                </div>
                
                <div class="relative hidden lg:block" data-aos="fade-left" data-aos-duration="800">
                    <div class="bg-dark-800 bg-opacity-70 backdrop-blur-md p-1 rounded-full inline-block border border-dark-700">
                        <div class="w-xl h-2xl bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-1">
                            <img src="assets/images/profile.jpg" 
                                 alt="Keith Phiri" 
                                 class="w-full h-auto rounded-full object-cover">
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-6 -left-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
                         data-aos="fade-up" data-aos-delay="400">
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                                <i class="fas fa-trophy text-white"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-400">Achievement</p>
                                <p class="text-white font-semibold">+40% Engagement</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute -top-6 -right-6 bg-dark-800 bg-opacity-70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-dark-700"
                         data-aos="fade-up" data-aos-delay="500">
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                                <i class="fas fa-users text-white"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-400">Clients</p>
                                <p class="text-white font-semibold">10+ Satisfied</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php include 'about.php'; ?>
<?php include 'creative.php'; ?>
<?php include 'technical.php'; ?>
<?php include 'resume.php'; ?>
<?php include 'certifications.php'; ?>
<?php include 'contact.php'; ?>
<?php include 'includes/footer.php'; ?>