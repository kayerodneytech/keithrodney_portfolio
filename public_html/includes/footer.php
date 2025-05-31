<footer class="bg-dark-900 py-12 border-t border-dark-800">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
                <a href="index.php" class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                        <span class="text-white font-bold text-xs">KP</span>
                    </div>
                    <span class="text-white font-semibold">Keith Rodney</span>
                </a>
            </div>
            
            <div class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                <a href="/#about" class="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="/#creative" class="text-gray-400 hover:text-white transition-colors">Creative Work</a>
                <a href="/#technical" class="text-gray-400 hover:text-white transition-colors">Technical</a>
                <a href="/#resume" class="text-gray-400 hover:text-white transition-colors">Resume</a>
                <a href="/#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div class="flex space-x-4">
                <a href="<?php echo LINKEDIN_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="<?php echo BEHANCE_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                    <i class="fab fa-behance"></i>
                </a>
                <a href="<?php echo TIKTOK_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-dark-800 text-center">
            <p class="text-gray-600 text-sm">&copy; <?php echo date('Y'); ?> Keith Rodney Phiri. All rights reserved.</p>
            <p class="text-gray-600 text-sm mt-2">Designed and developed By Keith Phiri</p>
        </div>
    </div>
</footer>

<!-- AOS Animation Library -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Custom JS -->
<script src="../assets/js/main.js"></script>

<script>
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
</script>
</body>
</html>