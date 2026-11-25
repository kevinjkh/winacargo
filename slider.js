document.addEventListener('DOMContentLoaded', function() {
  try {
    // Get all slides and dots
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    // If no slides or dots found, exit
    if (slides.length === 0 || dots.length === 0) {
      console.warn('Slider: No slides or navigation dots found');
      return;
    }

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 1000; // Change slide every 1 second
    let isPaused = false;

    // Function to show a specific slide
    function showSlide(index) {
      // Ensure index is within bounds
      index = (index + slides.length) % slides.length;
      
      // Hide all slides and remove active class from dots
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      });
      
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Show the selected slide and update the dot
      slides[index].classList.add('active');
      slides[index].setAttribute('aria-hidden', 'false');
      dots[index].classList.add('active');
      dots[index].setAttribute('aria-current', 'true');
      
      currentSlide = index;
    }

    // Function to go to the next slide
    function nextSlide() {
      if (!isPaused) {
        showSlide(currentSlide + 1);
      }
    }

    // Start the slideshow
    function startSlideshow() {
      if (slideInterval) clearInterval(slideInterval);
      isPaused = false;
      slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Pause the slideshow when hovering over the slider
    const slider = document.querySelector('.slider');
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        isPaused = true;
        clearInterval(slideInterval);
      });

      // Resume the slideshow when mouse leaves the slider
      slider.addEventListener('mouseleave', () => {
        isPaused = false;
        startSlideshow();
      });

      // Add keyboard navigation
      slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          showSlide(currentSlide - 1);
          resetTimer();
        } else if (e.key === 'ArrowRight') {
          showSlide(currentSlide + 1);
          resetTimer();
        }
      });
    }

    // Reset the timer
    function resetTimer() {
      clearInterval(slideInterval);
      startSlideshow();
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        resetTimer();
      });
      
      // Make dots focusable for keyboard navigation
      dot.setAttribute('tabindex', '0');
      
      // Add keyboard support for dots
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showSlide(index);
          resetTimer();
        }
      });
    });

    // Start the slideshow
    startSlideshow();
    
    // Show the first slide initially
    showSlide(0);
    
    // Pause slideshow when window loses focus
    window.addEventListener('blur', () => {
      isPaused = true;
      clearInterval(slideInterval);
    });
    
    // Resume slideshow when window regains focus
    window.addEventListener('focus', () => {
      isPaused = false;
      startSlideshow();
    });
    
  } catch (error) {
    console.error('Error initializing slider:', error);
  }
});
