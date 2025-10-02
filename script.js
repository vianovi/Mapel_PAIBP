// ==================================================================
// == BAGIAN TERPENTING: EDIT DAFTAR LINK DAN DEFAULT ANDA DI SINI ==
// ==================================================================
const links = {
  // LINK DEFAULT WAJIB ADA. Arahkan ini ke URL halaman error Anda.
    "default": "error.html",

  // Daftar URL tujuan dengan kata kunci
    "simulasi": "https://docs.google.com/forms/d/e/1FAIpQLSee8sYM0UhNvIzGp1NSG6pLJsmkw-dlcrTKewDHwCYIbvUVcw/viewform?usp=dialog",
    "paket1": "https://URL-tujuan-anda-untuk-paket-1.com",
    "paket2": "https://URL-tujuan-anda-untuk-paket-2.com",
    "paket3": "https://URL-tujuan-anda-untuk-paket-3.com",
};


// --- Dari sini ke bawah, tidak perlu diubah ---

// Fungsi untuk mengambil parameter dari URL
function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Cari target dari parameter URL dengan nama "to"
const target = getParam("to");

// Tentukan URL tujuan (LOGIKA INTI)
const destination = links[target] || links["simulasi"];

// Update link manual (tombol) agar sesuai dengan tujuan akhir
document.getElementById('manual-link').href = destination;

// Redirect otomatis setelah 2 detik
setTimeout(() => {
    window.location.href = destination;
}, 5000);