document.addEventListener('DOMContentLoaded', function () {
    const storyButtons = document.querySelectorAll('.story-button'); // Mengambil semua tombol dengan class story-button
    const popup = document.getElementById('story-popup');
    const closeBtn = document.querySelector('.popup .close');
    const stories = document.querySelectorAll('.story-item');
    const progressBarWrapper = document.querySelector('.progress-bar-wrapper');
    let currentStoryIndex = 0;
    let intervalId;
    const storyDuration = 15000; // 15 detik

    // Variabel untuk mendeteksi swipe up
    let touchstartY = 0;
    let touchendY = 0;
    const swipeThreshold = 50; // Pixel threshold untuk swipe up

    // Fungsi untuk mencegah aksi default <a>
    function preventDefaultBehavior(event) {
        event.preventDefault(); // Mencegah <a> melakukan navigasi
    }

    // Fungsi untuk membuka popup
    function showPopup(event) {
        preventDefaultBehavior(event); // Pastikan tidak ada reload/navigasi
        console.log('Popup dibuka');
        currentStoryIndex = 0;
        setupProgressBars();
        resetAnimation();
        showStory(currentStoryIndex);
        updatePopupBackground(currentStoryIndex);
        popup.style.display = 'flex';

        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll');
        document.body.offsetHeight; // Memaksa reflow
        console.log('Class noscroll ditambahkan ke body dan html');

        startStoryTimer();
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        popup.style.display = 'none';
        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight; // Memaksa reflow
        console.log('Class noscroll dihapus dari body dan html');
        clearInterval(intervalId);
    }

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', closePopup);

    // Event listener untuk tombol story-button
    storyButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Mencegah perilaku default <a> pada setiap tombol
    storyButtons.forEach(button => {
        button.addEventListener('click', preventDefaultBehavior);
    });

    // Navigasi cerita berdasarkan klik
    popup.addEventListener('click', function (event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            console.log('Navigasi ke cerita sebelumnya');
            previousStory();
        } else {
            console.log('Navigasi ke cerita berikutnya');
            nextStory();
        }
        updatePopupBackground(currentStoryIndex);
    });
});
