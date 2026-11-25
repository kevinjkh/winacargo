class DropdownMenu {
    constructor(selector) {
        this.dropdowns = document.querySelectorAll(selector);
        this.timeoutDuration = 30000; // 30 detik
        this.timeouts = new Map();
        this.initialize();
    }

    initialize() {
        this.dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.dropdown-content');
            if (!content) return;

            // Simpan referensi timeout untuk dropdown ini
            this.timeouts.set(dropdown, null);

            // Event ketika mouse masuk ke dropdown
            dropdown.addEventListener('mouseenter', () => {
                this.cancelHide(dropdown);
                this.show(dropdown);
            });

            // Event ketika mouse keluar dari dropdown
            dropdown.addEventListener('mouseleave', () => {
                this.scheduleHide(dropdown);
            });

            // Event ketika mouse masuk ke content dropdown
            content.addEventListener('mouseenter', () => {
                this.cancelHide(dropdown);
            });

            // Event ketika mouse keluar dari content dropdown
            content.addEventListener('mouseleave', () => {
                this.scheduleHide(dropdown);
            });
        });
    }

    show(dropdown) {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) {
            content.style.display = 'block';
        }
    }

    scheduleHide(dropdown) {
        // Batalkan timeout yang ada jika ada
        this.cancelHide(dropdown);

        // Set timeout baru
        const timeoutId = setTimeout(() => {
            this.hide(dropdown);
            this.timeouts.set(dropdown, null);
        }, this.timeoutDuration);

        this.timeouts.set(dropdown, timeoutId);
    }

    cancelHide(dropdown) {
        const timeoutId = this.timeouts.get(dropdown);
        if (timeoutId) {
            clearTimeout(timeoutId);
            this.timeouts.set(dropdown, null);
        }
    }

    hide(dropdown) {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) {
            content.style.display = 'none';
        }
    }
}

// Inisialisasi dropdown ketika dokumen siap
document.addEventListener('DOMContentLoaded', () => {
    new DropdownMenu('.dropdown');
});
