document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideTimeout;
    const MIN_DURATION = 2000; // 2 seconds
    const MAX_DURATION = 4000; // 4 seconds

    function getRandomDuration() {
        return Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION + 1)) + MIN_DURATION;
    }

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Clear any existing timeout
        if (slideTimeout) {
            clearTimeout(slideTimeout);
        }
        
        // Set new timeout with random duration
        slideTimeout = setTimeout(nextSlide, getRandomDuration());
    }

    // Start with a consistent 2-second delay for the first slide
    slideTimeout = setTimeout(nextSlide, MIN_DURATION);
}); 