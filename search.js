document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.querySelector('.search-results');

    // Search terms and their corresponding URLs with multiple variations
    const searchTerms = {
        // Air shipping related
        'pengiriman udara': 'pengiriman-udara.html',
        'pengirimanudara': 'pengiriman-udara.html',
        'udara': 'pengiriman-udara.html',
        'penerbangan': 'pengiriman-udara.html',
        'pesawat': 'pengiriman-udara.html',
        'air cargo': 'pengiriman-udara.html',
        'aircargo': 'pengiriman-udara.html',
        'air': 'pengiriman-udara.html',
        
        // Land shipping related
        'pengiriman darat': 'pengiriman-darat.html',
        'pengirimandarat': 'pengiriman-darat.html',
        'darat': 'pengiriman-darat.html',
        'trucking': 'pengiriman-darat.html',
        'truk': 'pengiriman-darat.html',
        'darat': 'pengiriman-darat.html',
        
        // Sea shipping related
        'pengiriman laut': 'pengiriman-laut.html',
        'pengirimanlaut': 'pengiriman-laut.html',
        'laut': 'pengiriman-laut.html',
        'kapal': 'pengiriman-laut.html',
        'laut': 'pengiriman-laut.html',
        'shipping': 'pengiriman-laut.html',
        'sea freight': 'pengiriman-laut.html',
        'seafreight': 'pengiriman-laut.html',
        
        // Forwarding
        'forwarding': 'forwarding.html',
        'freight forwarding': 'forwarding.html',
        'freightforwarding': 'forwarding.html',
        'ekspedisi': 'forwarding.html',
        'ekspedisi cargo': 'forwarding.html',
        
        // Other pages
        'dukungan': 'dukungan.html',
        'bantuan': 'dukungan.html',
        'support': 'dukungan.html',
        'mengapa kami': 'mengapa-kami.html',
        'tentang kami': 'mengapa-kami.html',
        'about us': 'mengapa-kami.html',
        'about': 'mengapa-kami.html',
        'booking': 'booking.html',
        'pesan': 'booking.html',
        'pemesanan': 'booking.html',
        'order': 'booking.html'
    };

    // Show search box when clicking the search icon
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
        if (searchBox.style.display === 'block') {
            searchInput.focus();
        }
    });

    // Function to find matching terms
    function findMatchingTerms(query) {
        const results = [];
        const queryWords = query.toLowerCase().split(/\s+/);
        
        // First, check for exact matches
        for (const [term, url] of Object.entries(searchTerms)) {
            if (term === query) {
                return [{ term, url, score: 100 }];
            }
        }
        
        // Then check for partial matches
        for (const [term, url] of Object.entries(searchTerms)) {
            const termWords = term.toLowerCase().split(/\s+/);
            
            // Check if all query words appear in the term
            const allWordsMatch = queryWords.every(qw => 
                termWords.some(tw => tw.startsWith(qw) || tw.includes(qw))
            );
            
            if (allWordsMatch) {
                // Calculate a score based on match quality
                let score = 0;
                termWords.forEach(tw => {
                    queryWords.forEach(qw => {
                        if (tw === qw) score += 10;
                        else if (tw.startsWith(qw)) score += 5;
                        else if (tw.includes(qw)) score += 2;
                    });
                });
                results.push({ term, url, score });
            }
        }
        
        // Sort by score (highest first)
        return results.sort((a, b) => b.score - a.score);
    }

    // Handle search input
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';

        if (query.length > 0) {
            const results = findMatchingTerms(query);

            // Display results
            if (results.length > 0) {
                results.slice(0, 5).forEach(result => { // Show top 5 results
                    const link = document.createElement('a');
                    link.href = result.url;
                    link.textContent = result.term;
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = result.url;
                    });
                    searchResults.appendChild(link);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="no-results">Tidak ada hasil ditemukan</div>';
                searchResults.style.display = 'block';
            }
        }
    });

    // Handle Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim().toLowerCase();
            
            if (query === '') return;
            
            // Find matching terms
            const results = findMatchingTerms(query);
            
            // If we have matches, go to the best one
            if (results.length > 0) {
                window.location.href = results[0].url;
            } else {
                // If no match found, show message
                searchResults.innerHTML = '<div class="no-results">Tidak ada hasil ditemukan</div>';
                searchResults.style.display = 'block';
            }
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});
