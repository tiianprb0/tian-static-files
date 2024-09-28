// Simpan posisi scroll sebelumnya
let previousScrollY = window.scrollY;

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100; // 10% dari tinggi viewport atau bisa disesuaikan

    const header = document.getElementById('scroll-header-new');

    if (currentScrollY < scrollThreshold) {
        // Jika mendekati bagian atas, sembunyikan header
        header.classList.remove('show');
    } else if (currentScrollY < previousScrollY) {
        // Jika scroll ke atas, tampilkan header
        header.classList.add('show');
    } else {
        // Jika scroll ke bawah, sembunyikan header
        header.classList.remove('show');
    }

    // Update posisi scroll sebelumnya
    previousScrollY = currentScrollY;
});
