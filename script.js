document.addEventListener('DOMContentLoaded', function() {
    // View Mode Switcher
    const viewModeBtns = document.querySelectorAll('.view-mode-btn');
    
    viewModeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            
            // Redirect to mobile.html when phone mode is selected
            if (mode === 'phone') {
                window.location.href = 'mobile.html';
                return;
            }
            
            setViewMode(mode);
            
            // Update active state
            viewModeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function setViewMode(mode) {
        // Remove all view classes
        document.body.classList.remove('phone-view', 'tablet-view');
        
        // Add the selected view class
        if (mode === 'tablet') {
            document.body.classList.add('tablet-view');
        }
        // For desktop view, we just remove all view classes
        // Phone view is now handled by redirect to mobile.html
    }
});
