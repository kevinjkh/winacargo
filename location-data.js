// Data provinsi dan kota di Indonesia
const provincesData = {
  Aceh: ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam"],
  "Sumatera Utara": [
    "Medan",
    "Binjai",
    "Gunungsitoli",
    "Padang Sidempuan",
    "Pematangsiantar",
    "Sibolga",
    "Tanjungbalai",
    "Tebing Tinggi",
  ],
  "Sumatera Barat": [
    "Padang",
    "Bukittinggi",
    "Padangpanjang",
    "Pariaman",
    "Payakumbuh",
    "Sawahlunto",
    "Solok",
  ],
  Riau: ["Pekanbaru", "Dumai", "Bengkalis", "Pelalawan", "Siak"],
  "Kepulauan Riau": [
    "Tanjungpinang",
    "Batam",
    "Bintan",
    "Karimun",
    "Lingga",
    "Natuna",
  ],
  Jambi: [
    "Jambi",
    "Sungai Penuh",
    "Batanghari",
    "Bungo",
    "Kerinci",
    "Merangin",
    "Muaro Jambi",
  ],
  "Sumatera Selatan": [
    "Palembang",
    "Lubuklinggau",
    "Pagar Alam",
    "Prabumulih",
    "Banyuasin",
    "Empat Lawang",
  ],
  "Bangka Belitung": [
    "Pangkalpinang",
    "Bangka",
    "Bangka Barat",
    "Bangka Selatan",
    "Bangka Tengah",
    "Belitung",
    "Belitung Timur",
  ],
  Bengkulu: ["Bengkulu", "Kepahiang", "Lebong", "Muko Muko", "Seluma"],
  Lampung: [
    "Bandar Lampung",
    "Metro",
    "Lampung Barat",
    "Lampung Selatan",
    "Lampung Tengah",
    "Lampung Timur",
    "Lampung Utara",
  ],
  "DKI Jakarta": [
    "Jakarta Pusat",
    "Jakarta Utara",
    "Jakarta Timur",
    "Jakarta Selatan",
    "Jakarta Barat",
    "Kepulauan Seribu",
  ],
  "Jawa Barat": [
    "Bandung",
    "Bogor",
    "Bekasi",
    "Depok",
    "Cirebon",
    "Tasikmalaya",
    "Sukabumi",
    "Banjar",
    "Cimahi",
    "Garut",
  ],
  Banten: ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan"],
  "Jawa Tengah": [
    "Semarang",
    "Surakarta",
    "Salatiga",
    "Pekalongan",
    "Tegal",
    "Magelang",
    "Purwokerto",
    "Kudus",
  ],
  "DI Yogyakarta": [
    "Yogyakarta",
    "Bantul",
    "Gunungkidul",
    "Kulon Progo",
    "Sleman",
  ],
  "Jawa Timur": [
    "Surabaya",
    "Malang",
    "Madiun",
    "Kediri",
    "Mojokerto",
    "Blitar",
    "Pasuruan",
    "Probolinggo",
    "Batu",
  ],
  Bali: [
    "Denpasar",
    "Badung",
    "Bangli",
    "Buleleng",
    "Gianyar",
    "Jembrana",
    "Karangasem",
    "Klungkung",
    "Tabanan",
  ],
  "Nusa Tenggara Barat": [
    "Mataram",
    "Bima",
    "Dompu",
    "Lombok Barat",
    "Lombok Tengah",
    "Lombok Timur",
    "Lombok Utara",
    "Sumbawa",
  ],
  "Nusa Tenggara Timur": [
    "Kupang",
    "Ende",
    "Flores Timur",
    "Manggarai",
    "Sikka",
    "Sumba Barat",
    "Sumba Timur",
    "Timor Tengah Selatan",
  ],
  "Kalimantan Barat": [
    "Pontianak",
    "Singkawang",
    "Bengkayang",
    "Kapuas Hulu",
    "Ketapang",
    "Landak",
    "Melawi",
    "Sambas",
  ],
  "Kalimantan Tengah": [
    "Palangka Raya",
    "Barito Selatan",
    "Barito Timur",
    "Barito Utara",
    "Gunung Mas",
    "Kapuas",
    "Katingan",
  ],
  "Kalimantan Selatan": [
    "Banjarmasin",
    "Banjarbaru",
    "Balangan",
    "Banjar",
    "Barito Kuala",
    "Hulu Sungai Selatan",
  ],
  "Kalimantan Timur": [
    "Samarinda",
    "Balikpapan",
    "Bontang",
    "Berau",
    "Kutai Barat",
    "Kutai Kartanegara",
    "Kutai Timur",
  ],
  "Kalimantan Utara": [
    "Tanjung Selor",
    "Tarakan",
    "Bulungan",
    "Malinau",
    "Nunukan",
  ],
  "Sulawesi Utara": [
    "Manado",
    "Bitung",
    "Kotamobagu",
    "Tomohon",
    "Bolaang Mongondow",
    "Kepulauan Sangihe",
  ],
  Gorontalo: ["Gorontalo", "Boalemo", "Bone Bolango", "Pohuwato"],
  "Sulawesi Tengah": [
    "Palu",
    "Banggai",
    "Banggai Kepulauan",
    "Buol",
    "Donggala",
    "Morowali",
    "Parigi Moutong",
  ],
  "Sulawesi Selatan": [
    "Makassar",
    "Palopo",
    "Parepare",
    "Bantaeng",
    "Barru",
    "Bone",
    "Bulukumba",
    "Enrekang",
  ],
  "Sulawesi Tenggara": [
    "Kendari",
    "Baubau",
    "Bombana",
    "Buton",
    "Kolaka",
    "Konawe",
    "Muna",
    "Wakatobi",
  ],
  "Sulawesi Barat": [
    "Mamuju",
    "Majene",
    "Mamasa",
    "Mamuju Tengah",
    "Mamuju Utara",
    "Polewali Mandar",
  ],
  Maluku: [
    "Ambon",
    "Tual",
    "Kepulauan Aru",
    "Maluku Barat Daya",
    "Maluku Tengah",
    "Maluku Tenggara",
  ],
  "Maluku Utara": [
    "Ternate",
    "Tidore Kepulauan",
    "Halmahera Barat",
    "Halmahera Tengah",
    "Kepulauan Sula",
  ],
  Papua: [
    "Jayapura",
    "Merauke",
    "Asmat",
    "Biak Numfor",
    "Jayawijaya",
    "Keerom",
    "Mimika",
    "Nabire",
  ],
  "Papua Barat": [
    "Manokwari",
    "Sorong",
    "Fakfak",
    "Kaimana",
    "Raja Ampat",
    "Teluk Bintuni",
    "Teluk Wondama",
  ],
};

// Fungsi untuk mengisi dropdown provinsi
function populateProvinces() {
  const provinceSelect = document.getElementById("province");
  Object.keys(provincesData).forEach((province) => {
    const option = document.createElement("option");
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
  });
}

// Fungsi untuk mengisi dropdown kota berdasarkan provinsi yang dipilih
function populateCities(province) {
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = '<option value="">-- Pilih Kota/Kabupaten --</option>';

  if (province) {
    const cities = provincesData[province];
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
    citySelect.disabled = false;
  } else {
    citySelect.disabled = true;
  }
}

// Fungsi untuk menampilkan/menyembunyikan input custom
function toggleCustomInput(selectElement, customInputId) {
  const customInput = document.getElementById(customInputId);
  if (selectElement.value === "other") {
    customInput.style.display = "block";
    customInput.querySelector("input").required = true;
  } else {
    customInput.style.display = "none";
    customInput.querySelector("input").required = false;
  }
}

// Fungsi untuk mengaktifkan dropdown kota untuk provinsi kustom
function enableCityForCustomProvince(customProvinceName) {
  const citySelect = document.getElementById("city");
  citySelect.disabled = false;
  citySelect.innerHTML = '<option value="">-- Pilih Kota/Kabupaten --</option>';
  const otherOption = document.createElement("option");
  otherOption.value = "other";
  otherOption.textContent = "Lainnya";
  citySelect.appendChild(otherOption);
}

// Event listener untuk perubahan provinsi
document.addEventListener("DOMContentLoaded", function () {
  populateProvinces();

  // Tambahkan opsi "Other" ke dropdown provinsi
  const provinceSelect = document.getElementById("province");
  const customProvinceInput = document.getElementById("customProvince");

  if (provinceSelect) {
    const otherOption = document.createElement("option");
    otherOption.value = "other";
    otherOption.textContent = "Lainnya";
    provinceSelect.appendChild(otherOption);

    provinceSelect.addEventListener("change", function () {
      if (this.value === "other") {
        document.getElementById("city").disabled = true;
        toggleCustomInput(this, "customProvinceInput");
      } else {
        toggleCustomInput(this, "customProvinceInput");
        document.getElementById("city").disabled = false;
        populateCities(this.value);
      }
    });
  }

  // Event listener untuk custom province input
  if (customProvinceInput) {
    customProvinceInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        if (this.value.trim() !== "") {
          enableCityForCustomProvince(this.value.trim());
          this.blur(); // Remove focus from the input
        }
      }
    });
  }

  // Setup untuk dropdown kota
  const citySelect = document.getElementById("city");
  if (citySelect) {
    const otherOption = document.createElement("option");
    otherOption.value = "other";
    otherOption.textContent = "Lainnya";
    citySelect.appendChild(otherOption);

    citySelect.addEventListener("change", function () {
      toggleCustomInput(this, "customCityInput");
    });
  }
});
