// Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/serviceworker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}

// Deteksi mode standalone dengan lebih baik
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

// Deteksi Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Tangani banner untuk Safari
document.addEventListener('DOMContentLoaded', () => {
  const safariInstallPrompt = document.getElementById('safariInstallPrompt');

  if (!isStandalone && isSafari && safariInstallPrompt) {
    safariInstallPrompt.style.display = 'block'; // Tampilkan banner
  }

  if (isStandalone && safariInstallPrompt) {
    safariInstallPrompt.style.display = 'none'; // Sembunyikan banner
  }
});

// Deteksi saat aplikasi berhasil diinstal
window.addEventListener('appinstalled', () => {
  console.log('PWA berhasil diinstal');
  const safariInstallPrompt = document.getElementById('safariInstallPrompt');
  if (safariInstallPrompt) safariInstallPrompt.style.display = 'none'; // Sembunyikan notifikasi
});

// Navigasi AJAX untuk GitHub Pages atau Blogspot
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    const url = link.getAttribute('href');

    // Tangani hanya tautan internal
    if (url && (url.startsWith('/p/') || url.match(/\d{4}\/\d{2}\/.+\.html$/))) {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Cegah reload halaman

        // Navigasi AJAX
        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            // Parsing halaman baru
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Ganti isi body tanpa reload
            const newContent = doc.body.innerHTML;
            document.body.innerHTML = newContent;

            // Perbarui URL di address bar
            history.pushState(null, '', url);

            // Jalankan ulang script atau inisialisasi ulang
            console.log('Navigasi ke:', url);
          })
          .catch((error) => console.error('Navigasi AJAX gagal:', error));
      });
    }
  });
});

// Tangani tombol back/forward pada browser
window.addEventListener('popstate', () => {
  location.reload(); // Reload halaman saat back/forward
});
