document.addEventListener('DOMContentLoaded', function() {
    // View Mode Switcher
    const viewModeBtns = document.querySelectorAll('.view-mode-btn');
    
    viewModeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
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
        if (mode === 'phone') {
            document.body.classList.add('phone-view');
        } else if (mode === 'tablet') {
            document.body.classList.add('tablet-view');
        }
        // For desktop view, we just remove all view classes
    }
});
