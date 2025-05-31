<nav class="bg-dark-800 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-dark-700">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center h-16">
            <!-- Logo linking to homepage -->
            <a href="/" class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                    <span class="text-white font-bold text-xs">KP</span>
                </div>
                <span class="text-white font-semibold">Keith Rodney</span>
            </a>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="/#about" class="nav-link text-gray-400 hover:text-white transition-colors">About</a>
                <a href="/#creative" class="nav-link text-gray-400 hover:text-white transition-colors">Creative Work</a>
                <a href="/#technical" class="nav-link text-gray-400 hover:text-white transition-colors">Technical</a>
                <a href="/#resume" class="nav-link text-gray-400 hover:text-white transition-colors">Resume</a>
                <a href="/#contact" class="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition">Contact</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-400 hover:text-white focus:outline-none">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu (Hidden by default) -->
    <div id="mobile-menu" class="md:hidden hidden bg-dark-800 border-t border-dark-700">
        <div class="px-6 py-4 space-y-4">
            <a href="/#about" class="block nav-link text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/#creative" class="block nav-link text-gray-400 hover:text-white transition-colors">Creative Work</a>
            <a href="/#technical" class="block nav-link text-gray-400 hover:text-white transition-colors">Technical</a>
            <a href="/#resume" class="block nav-link text-gray-400 hover:text-white transition-colors">Resume</a>
            <a href="/#contact" class="block px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:opacity-90 transition text-center">Contact</a>
        </div>
    </div>
</nav>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    });
});
</script>

<style>
.nav-link {
    position: relative;
    padding: 0.5rem 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Smooth transitions for mobile menu */
#mobile-menu {
    transition: all 0.3s ease;
    max-height: 0;
    overflow: hidden;
}

#mobile-menu:not(.hidden) {
    max-height: 500px; /* Adjust based on your content */
}
</style>