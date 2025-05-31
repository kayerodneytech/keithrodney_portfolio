
<main class="pt-20">

    <section class="py-20" id="contact">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
                <span class="relative inline-block">
                    Get In Touch
                    <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
                </span>
            </h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-semibold mb-6">Let's Work Together</h3>
                    <p class="text-gray-400 mb-8">
                        Whether you're looking for a social media strategist, graphic designer, animator, or web developer, 
                        I'd love to hear about your project. Feel free to reach out with any questions or opportunities.
                    </p>
                    
                    <div class="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl p-8 border border-dark-700">
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-primary-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Location</h4>
                                    <p class="text-gray-400">Bulawayo, Zimbabwe</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-envelope text-primary-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Email</h4>
                                    <a href="mailto:keithrodney@rodneytechinc.co.zw" class="text-gray-400 hover:text-primary-400 transition-colors">keithrodney@rodneytechinc.co.zw</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-phone-alt text-primary-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Phone</h4>
                                    <a href="tel:+263778360648" class="text-gray-400 hover:text-primary-400 transition-colors">+263 77 836 0648</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="text-lg font-semibold mb-4">Follow Me</h4>
                            <div class="flex space-x-4">
                                <a href="<?php echo LINKEDIN_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="<?php echo BEHANCE_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                                    <i class="fab fa-behance"></i>
                                </a>
                                <a href="<?php echo TIKTOK_URL; ?>" target="_blank" class="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-dark-800 bg-opacity-70 backdrop-blur-md rounded-xl p-8 border border-dark-700"
                     data-aos="fade-left">
                    <h3 class="text-2xl font-semibold mb-6">Send Me a Message</h3>
                    <form id="contactForm" action="process_contact.php" method="POST">
                        <div class="mb-6">
                            <label for="name" class="block text-gray-300 mb-2">Name</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block text-gray-300 mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg hover:opacity-90 transition font-medium">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

