
  // Deteksi apakah aplikasi dijalankan dalam mode standalone
  const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

  // Deteksi apakah browser adalah Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Tampilkan banner "Add to Home Screen" hanya untuk Safari yang belum diinstal
  const safariInstallPrompt = document.getElementById('safariInstallPrompt');
  if (!isStandalone && isSafari && safariInstallPrompt) {
    safariInstallPrompt.style.display = 'block'; // Tampilkan instruksi
  }

  // Sembunyikan banner jika aplikasi sudah diinstal
  if (isStandalone && safariInstallPrompt) {
    safariInstallPrompt.style.display = 'none'; // Sembunyikan instruksi
  }

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }

  // Handle beforeinstallprompt event (untuk browser selain Safari)
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Mencegah prompt default
    deferredPrompt = e;
  });

  // Deteksi ketika aplikasi berhasil diinstal
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (safariInstallPrompt) safariInstallPrompt.style.display = 'none'; // Sembunyikan banner
  });

  // Navigasi AJAX untuk GitHub Pages
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      const url = link.getAttribute('href');

      // Pastikan hanya memproses tautan internal
      if (url && (url.startsWith('/') || url.startsWith('./') || url.startsWith('../'))) {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // Cegah reload halaman

          // Muat halaman menggunakan fetch API
          fetch(url)
            .then(response => response.text())
            .then(html => {
              // Parsing HTML respon
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');

              // Ganti isi <body> dengan konten halaman baru
              const newContent = doc.body.innerHTML;
              document.body.innerHTML = newContent;

              // Perbarui URL di address bar tanpa reload
              history.pushState(null, '', url);

              // Jalankan ulang script setelah navigasi (opsional)
              console.log('Navigasi AJAX selesai untuk URL:', url);
            })
            .catch(error => {
              console.error('Kesalahan saat navigasi:', error);
            });
        });
      }
    });
  });

  // Tangani navigasi melalui tombol back/forward browser
  window.addEventListener('popstate', () => {
    location.reload(); // Reload halaman saat tombol back/forward ditekan
  });

