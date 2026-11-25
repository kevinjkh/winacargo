document.addEventListener('DOMContentLoaded', function() {
    // Get mobile menu elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
        }
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            // Close all dropdowns when closing menu
            mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
    
    // Toggle dropdown
    function toggleDropdown(e) {
        e.preventDefault();
        const dropdown = this.closest('.mobile-dropdown');
        if (!dropdown) return;
        
        const isActive = dropdown.classList.contains('active');
        
        // Close all other dropdowns
        mobileDropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    }
    
    // Event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    // Add click event to dropdown toggles
    mobileDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.mobile-dropbtn');
        if (toggle) {
            toggle.addEventListener('click', toggleDropdown);
        }
    });
    
    // Close menu when clicking on a link (except dropdown buttons)
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        if (!link.classList.contains('mobile-dropbtn')) {
            link.addEventListener('click', closeMobileMenu);
        }
    });
    
    // Close menu when clicking on overlay (outside menu)
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
