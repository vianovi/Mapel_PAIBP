// ==================================================================
// == DAFTAR LINK VALID ANDA ==
// ==================================================================
const links = {
  "instagram": "https://www.instagram.com/nama_anda/",
  "promo": "https://www.tokopedia.com/toko-anda/promo",
  "portofolio": "https://situs-portofolio-anda.com/",
  "kontak": "https://wa.me/6281234567890"
};

// --- Dari sini ke bawah, sebaiknya tidak perlu diubah ---

// 1. Ambil semua elemen yang akan kita ubah
const container = document.querySelector('.container');
const errorIcon = document.getElementById('error-icon');
const heading = document.getElementById('main-heading');
const paragraph = document.getElementById('main-paragraph');
const loader = document.getElementById('loader');
const manualLink = document.getElementById('manual-link');


// 2. Fungsi untuk mengambil parameter dari URL
function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// 3. Cari target dari parameter URL dengan nama "to"
const target = getParam("to");

// 4. Periksa apakah target ada di dalam daftar 'links'
if (target && links[target]) {
  // === JIKA LINK VALID ===
  const destination = links[target];

  // Update link manual (tombol)
  manualLink.href = destination;

  // Redirect otomatis setelah 2 detik
  setTimeout(() => {
    window.location.href = destination;
  }, 2000);

} else {
  // === JIKA LINK TIDAK VALID / KOSONG ===

  // Ganti judul halaman
  document.title = "Tautan Tidak Ditemukan";

  // Tambahkan kelas error ke container untuk mengubah gaya
  container.classList.add('error-mode');

  // Tampilkan ikon error
  errorIcon.style.display = 'block';

  // Ubah teks heading dan paragraf
  heading.textContent = "Tautan Tidak Ditemukan";
  paragraph.innerHTML = "Maaf, link yang Anda tuju sepertinya keliru atau sudah tidak tersedia. <br>Mohon hubungi pemilik QR Code ini untuk informasi lebih lanjut.";

  // Sembunyikan loader dan tombol link manual
  loader.style.display = 'none';
  manualLink.style.display = 'none';
}