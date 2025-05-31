document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Lazy Loading for iframes
    const lazyIframes = document.querySelectorAll('iframe[lazyload]');
    
    const lazyLoadIframe = function(iframe) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
        iframe.removeAttribute('lazyload');
    };
    
    const iframeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoadIframe(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '200px'
    });
    
    lazyIframes.forEach(iframe => {
        iframeObserver.observe(iframe);
    });
});