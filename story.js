document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.story-btn');
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

    // Fungsi untuk mendeteksi Safari
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    function showPopup() {
        console.log('Popup dibuka');
        currentStoryIndex = 0;
        setupProgressBars();
        resetAnimation(); // Pastikan animasi di-reset
        showStory(currentStoryIndex);
        updatePopupBackground(currentStoryIndex); // Update background ketika popup muncul
        popup.style.display = 'flex';

        // Tambahkan class noscroll ke body dan html
        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll'); // Tambahkan ke html juga
        document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
        console.log('Class noscroll ditambahkan ke body dan html');

        startStoryTimer();
    }

    function setupProgressBars() {
        console.log('Mempersiapkan progress bar');
        progressBarWrapper.innerHTML = ''; // Clear existing progress bars
        stories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('progress-inner');
            progressBar.appendChild(progressInner);

            progressBarWrapper.appendChild(progressBar);
        });
    }

    function startStoryTimer() {
        console.log('Memulai timer cerita');
        const progressBars = document.querySelectorAll('.progress-inner');
        progressBars.forEach(bar => {
            bar.style.transition = 'none'; // Reset transition
            bar.style.width = '0%'; // Reset width
        });

        const activeProgressBar = progressBars[currentStoryIndex];
        setTimeout(() => {
            console.log('Animasi progress dimulai');
            activeProgressBar.style.transition = `width ${storyDuration / 1000}s linear`; // Apply new transition
            activeProgressBar.style.width = '100%';
        }, 50); // Sedikit delay untuk memastikan transisi diterapkan

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            nextStory();
        }, storyDuration);
    }

    function showStory(index) {
        console.log('Menampilkan cerita indeks:', index);
        stories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
        updatePopupBackground(index); // Update background setiap kali story berubah
    }

    function nextStory() {
        currentStoryIndex++;
        if (currentStoryIndex < stories.length) {
            showStory(currentStoryIndex);
            startStoryTimer();
        } else {
            console.log('Cerita terakhir, menutup popup');
            popup.style.display = 'none';

            // Hapus class noscroll dari body dan html
            document.body.classList.remove('noscroll');
            document.documentElement.classList.remove('noscroll');
            document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
            console.log('Class noscroll dihapus dari body dan html');

            markAsViewed();
        }
    }

    function previousStory() {
        if (currentStoryIndex > 0) {
            currentStoryIndex--;
            showStory(currentStoryIndex);
            startStoryTimer();
        }
    }


    function updatePopupBackground(index) {
        const storyImage = stories[index].querySelector('img').src;
        popup.style.backgroundImage = `url(${storyImage})`;
        popup.style.backgroundSize = 'cover'; // Pastikan gambar memenuhi seluruh area
        popup.style.backgroundPosition = 'center'; // Pastikan gambar terpusat
        popup.style.backgroundRepeat = 'no-repeat'; // Pastikan gambar tidak mengulang
        popup.offsetHeight; // Force reflow
        console.log('Background popup diperbarui');
    }

    function resetAnimation() {
        console.log('Mereset animasi');
        const progressBars = document.querySelectorAll('.progress-inner');
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none'; // Hilangkan transisi saat di-reset
            bar.offsetHeight; // Force reflow
        });
    }

    // Fungsi untuk menangani swipe up dan membuka link
    function handleSwipeUp() {
        const activeStory = stories[currentStoryIndex];
        const storyLink = activeStory.getAttribute('data-link');
        if (storyLink) {
            console.log('Membuka link:', storyLink);
            if (isSafari()) {
                window.location.href = storyLink; // Buka di tab yang sama di Safari
            } else {
                window.open(storyLink, '_blank'); // Buka di tab baru di browser lain
            }
        }
    }

    // Event listener untuk mendeteksi swipe up
    popup.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
        console.log('Touch start Y:', touchstartY);
    });

    popup.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        console.log('Touch end Y:', touchendY);
        if (touchstartY - touchendY > swipeThreshold) { // Jika swipe ke atas lebih dari threshold
            console.log('Swipe up terdeteksi');
            handleSwipeUp();
        } else {
            console.log('Swipe up tidak cukup');
        }
    });



    storyButton.addEventListener('click', showPopup);

    closeBtn.addEventListener('click', function() {
        console.log('Menutup popup');
        popup.style.display = 'none';

        // Hapus class noscroll dari body dan html
        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight; // Memaksa reflow untuk memastikan perubahan diterapkan
        console.log('Class noscroll dihapus dari body dan html');

        clearInterval(intervalId);
    });

    popup.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            console.log('Navigasi ke cerita sebelumnya');
            previousStory();
            updatePopupBackground(currentStoryIndex); // Update background saat previous story
        } else {
            console.log('Navigasi ke cerita berikutnya');
            nextStory();
            updatePopupBackground(currentStoryIndex); // Update background saat next story
        }
    });
});
