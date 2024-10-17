document.addEventListener('DOMContentLoaded', function() {
    const instaStoryButtons = document.querySelectorAll('.insta-story-button'); // Mengambil semua tombol dengan class insta-story-button
    const instaPopup = document.getElementById('insta-promotion-popup');
    const instaCloseBtn = document.querySelector('.insta-popup .insta-close');
    const instaStories = document.querySelectorAll('.insta-story-item');
    const instaProgressBarWrapper = document.querySelector('.insta-progress-bar-wrapper');
    let currentInstaStoryIndex = 0;
    let instaIntervalId;
    const instaStoryDuration = 15000; // 15 detik

    // Variabel untuk mendeteksi swipe up
    let touchstartY = 0;
    let touchendY = 0;
    const instaSwipeThreshold = 50; // Pixel threshold untuk swipe up

    // Fungsi untuk mendeteksi Safari
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    // Fungsi untuk membuka popup
    function showInstaPopup() {
        console.log('Instagram Promotion Popup dibuka');
        currentInstaStoryIndex = 0;
        setupInstaProgressBars();
        resetInstaAnimation(); // Pastikan animasi di-reset
        showInstaStory(currentInstaStoryIndex);
        updateInstaPopupBackground(currentInstaStoryIndex); // Update background ketika popup muncul
        instaPopup.style.display = 'flex';

        // Tambahkan class noscroll ke body dan html
        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll'); // Tambahkan ke html juga
        document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
        console.log('Class noscroll ditambahkan ke body dan html');

        startInstaStoryTimer();
    }

    // Fungsi untuk mempersiapkan progress bars
    function setupInstaProgressBars() {
        console.log('Mempersiapkan Instagram progress bar');
        instaProgressBarWrapper.innerHTML = ''; // Clear existing progress bars
        instaStories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('insta-progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('insta-progress-inner');
            progressBar.appendChild(progressInner);

            instaProgressBarWrapper.appendChild(progressBar);
        });
    }

    // Timer untuk cerita Instagram
    function startInstaStoryTimer() {
        console.log('Memulai timer Instagram cerita');
        const instaProgressBars = document.querySelectorAll('.insta-progress-inner');
        instaProgressBars.forEach(bar => {
            bar.style.transition = 'none'; // Reset transition
            bar.style.width = '0%'; // Reset width
        });

        const activeProgressBar = instaProgressBars[currentInstaStoryIndex];
        setTimeout(() => {
            console.log('Animasi Instagram progress dimulai');
            activeProgressBar.style.transition = `width ${instaStoryDuration / 1000}s linear`; // Apply new transition
            activeProgressBar.style.width = '100%';
        }, 50); // Sedikit delay untuk memastikan transisi diterapkan

        clearInterval(instaIntervalId);
        instaIntervalId = setInterval(() => {
            nextInstaStory();
        }, instaStoryDuration);
    }

    // Fungsi untuk menampilkan cerita tertentu
    function showInstaStory(index) {
        console.log('Menampilkan Instagram cerita indeks:', index);
        instaStories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
        updateInstaPopupBackground(index); // Update background setiap kali story berubah
    }

    // Fungsi untuk cerita berikutnya
    function nextInstaStory() {
        currentInstaStoryIndex++;
        if (currentInstaStoryIndex < instaStories.length) {
            showInstaStory(currentInstaStoryIndex);
            startInstaStoryTimer();
        } else {
            console.log('Instagram cerita terakhir, menutup popup');
            instaPopup.style.display = 'none';

            // Hapus class noscroll dari body dan html
            document.body.classList.remove('noscroll');
            document.documentElement.classList.remove('noscroll');
            document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
            console.log('Class noscroll dihapus dari body dan html');

            markAsViewed();
        }
    }

    // Fungsi untuk cerita sebelumnya
    function previousInstaStory() {
        if (currentInstaStoryIndex > 0) {
            currentInstaStoryIndex--;
            showInstaStory(currentInstaStoryIndex);
            startInstaStoryTimer();
        }
    }

    // Fungsi untuk update background popup
    function updateInstaPopupBackground(index) {
        const storyImage = instaStories[index].querySelector('img').src;
        instaPopup.style.backgroundImage = `url(${storyImage})`;
        instaPopup.style.backgroundSize = 'cover'; // Pastikan gambar memenuhi seluruh area
        instaPopup.style.backgroundPosition = 'center'; // Pastikan gambar terpusat
        instaPopup.style.backgroundRepeat = 'no-repeat'; // Pastikan gambar tidak mengulang
        instaPopup.offsetHeight; // Force reflow
        console.log('Background Instagram popup diperbarui');
    }

    // Fungsi untuk mereset animasi
    function resetInstaAnimation() {
        console.log('Mereset Instagram animasi');
        const instaProgressBars = document.querySelectorAll('.insta-progress-inner');
        instaProgressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none'; // Hilangkan transisi saat di-reset
            bar.offsetHeight; // Force reflow
        });
    }

    // Fungsi untuk menangani swipe up dan membuka link
    function handleInstaSwipeUp() {
        const activeInstaStory = instaStories[currentInstaStoryIndex];
        const instaStoryLink = activeInstaStory.getAttribute('data-link');
        if (instaStoryLink) {
            console.log('Membuka link Instagram:', instaStoryLink);
            if (isSafari()) {
                window.location.href = instaStoryLink; // Buka di tab yang sama di Safari
            } else {
                window.open(instaStoryLink, '_blank'); // Buka di tab baru di browser lain
            }
        }
    }

    // Event listener untuk mendeteksi swipe up
    instaPopup.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
        console.log('Touch start Y:', touchstartY);
    });

    instaPopup.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        console.log('Touch end Y:', touchendY);
        if (touchstartY - touchendY > instaSwipeThreshold) { // Jika swipe ke atas lebih dari threshold
            console.log('Swipe up Instagram terdeteksi');
            handleInstaSwipeUp();
        } else {
            console.log('Swipe up Instagram tidak cukup');
        }
    });

    // Tambahkan event listener ke semua tombol insta-story-button
    instaStoryButtons.forEach(button => {
        button.addEventListener('click', showInstaPopup);
    });

    // Event listener untuk tombol close
    instaCloseBtn.addEventListener('click', function() {
        console.log('Menutup Instagram popup');
        instaPopup.style.display = 'none';

        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
        console.log('Class noscroll dihapus dari body dan html');

        clearInterval(instaIntervalId);
    });

    // Event listener untuk navigasi antar cerita berdasarkan klik
    instaPopup.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            console.log('Navigasi ke Instagram cerita sebelumnya');
            previousInstaStory();
            updateInstaPopupBackground(currentInstaStoryIndex); // Update background saat previous story
        } else {
            console.log('Navigasi ke Instagram cerita berikutnya');
            nextInstaStory();
            updateInstaPopupBackground(currentInstaStoryIndex); // Update background saat next story
        }
    });

    // Fungsi dummy untuk menandai cerita sebagai sudah dilihat
    function markAsViewed() {
        console.log('Menandai Instagram cerita sebagai sudah dilihat');
        // Implementasikan logika Anda di sini
    }
});
