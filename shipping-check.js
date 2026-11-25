// Shipping Check Component
class ShippingCheck {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.options = {
            buttonText: 'Cek Ongkir',
            showWeight: true,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.container.innerHTML = `
            <div class="tracking-form">
                <div class="form-group" style="flex: 2;">
                    <input type="text" id="origin" placeholder="Kota Asal" required>
                </div>
                <div class="form-group" style="flex: 2;">
                    <input type="text" id="destination" placeholder="Kota Tujuan" required>
                </div>
                <button type="submit" style="margin-left: auto; flex-shrink: 0;">${this.options.buttonText}</button>
            </div>
            <div class="shipping-result"></div>
        `;
        
        this.setupEventListeners();
        this.setupAutocomplete();
    }  
    
    setupAutocomplete() {
        const cities = [];
        for (const province in provincesData) {
            cities.push(...provincesData[province]);
        }
        const uniqueCities = [...new Set(cities)].sort();
        
        // Initialize autocomplete for origin and destination inputs
        this.initializeAutocomplete('origin', uniqueCities);
        this.initializeAutocomplete('destination', uniqueCities);
    }
    
    initializeAutocomplete(inputId, cities) {
        const input = document.getElementById(inputId);
        let currentFocus;
        
        input.addEventListener('input', function() {
            let val = this.value;
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            
            const list = document.createElement('div');
            list.setAttribute('id', this.id + '-autocomplete-list');
            list.setAttribute('class', 'autocomplete-items');
            this.parentNode.appendChild(list);
            
            cities.filter(city => 
                city.toLowerCase().includes(val.toLowerCase())
            ).slice(0, 5).forEach(city => {
                const item = document.createElement('div');
                item.innerHTML = `<strong>${city.substr(0, val.length)}</strong>${city.substr(val.length)}`;
                item.innerHTML += `<input type='hidden' value='${city}'>`;
                item.addEventListener('click', function() {
                    input.value = this.getElementsByTagName('input')[0].value;
                    closeAllLists();
                });
                list.appendChild(item);
            });
        });
        
        input.addEventListener('keydown', function(e) {
            let items = document.getElementById(this.id + '-autocomplete-list');
            if (items) items = items.getElementsByTagName('div');
            if (e.keyCode == 40) { // Down arrow
                currentFocus++;
                addActive(items);
            } else if (e.keyCode == 38) { // Up arrow
                currentFocus--;
                addActive(items);
            } else if (e.keyCode == 13) { // Enter
                e.preventDefault();
                if (currentFocus > -1 && items) {
                    items[currentFocus].click();
                }
            }
        });
        
        function addActive(items) {
            if (!items) return false;
            removeActive(items);
            if (currentFocus >= items.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (items.length - 1);
            items[currentFocus].classList.add('autocomplete-active');
        }
        
        function removeActive(items) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('autocomplete-active');
            }
        }
        
        function closeAllLists(elmnt) {
            const items = document.getElementsByClassName('autocomplete-items');
            for (let i = 0; i < items.length; i++) {
                if (elmnt != items[i] && elmnt != input) {
                    items[i].parentNode.removeChild(items[i]);
                }
            }
        }
        
        document.addEventListener('click', function(e) {
            closeAllLists(e.target);
        });
    }
    
    setupEventListeners() {
        const form = this.container.querySelector('.tracking-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        const origin = this.container.querySelector('#origin').value;
        const destination = this.container.querySelector('#destination').value;
        const weight = this.options.showWeight 
            ? parseFloat(this.container.querySelector('#weight').value) 
            : 1;
            
        if (this.options.onSubmit) {
            await this.options.onSubmit({ origin, destination, weight });
        }
    }
    
    showResult(html) {
        const resultDiv = this.container.querySelector('.shipping-result');
        resultDiv.innerHTML = html;
        resultDiv.style.display = 'block';
    }
}
