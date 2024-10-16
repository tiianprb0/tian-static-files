document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.promotion-story-button');
    const popup = document.getElementById('promotion-story-popup');
    const closeBtn = document.querySelector('.promotion-story-popup .promotion-close');
    const stories = document.querySelectorAll('.promotion-story-item');
    const progressBarWrapper = document.querySelector('.promotion-progress-bar-wrapper');
    let currentStoryIndex = 0;
    let intervalId;
    const storyDuration = 15000; // 15 detik

    // Variabel untuk mendeteksi swipe up
    let touchstartY = 0;
    let touchendY = 0;
    const swipeThreshold = 50;

    // Fungsi untuk mendeteksi Safari
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    // Fungsi untuk membuka popup
    function showPopup() {
        currentStoryIndex = 0;
        setupProgressBars();
        resetAnimation();
        showStory(currentStoryIndex);
        updatePopupBackground(currentStoryIndex);
        popup.style.display = 'flex';

        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll');
        document.body.offsetHeight;

        startStoryTimer();
    }

    // Fungsi untuk mempersiapkan progress bars
    function setupProgressBars() {
        progressBarWrapper.innerHTML = '';
        stories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('promotion-progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('promotion-progress-inner');
            progressBar.appendChild(progressInner);

            progressBarWrapper.appendChild(progressBar);
        });
    }

    // Timer untuk cerita
    function startStoryTimer() {
        const progressBars = document.querySelectorAll('.promotion-progress-inner');
        progressBars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
        });

        const activeProgressBar = progressBars[currentStoryIndex];
        setTimeout(() => {
            activeProgressBar.style.transition = `width ${storyDuration / 1000}s linear`;
            activeProgressBar.style.width = '100%';
        }, 50);

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            nextStory();
        }, storyDuration);
    }

    // Fungsi untuk menampilkan cerita tertentu
    function showStory(index) {
        stories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
        updatePopupBackground(index);
    }

    // Fungsi untuk cerita berikutnya
    function nextStory() {
        currentStoryIndex++;
        if (currentStoryIndex < stories.length) {
            showStory(currentStoryIndex);
            startStoryTimer();
        } else {
            popup.style.display = 'none';
            document.body.classList.remove('noscroll');
            document.documentElement.classList.remove('noscroll');
            document.body.offsetHeight;
            clearInterval(intervalId);
        }
    }

    // Fungsi untuk cerita sebelumnya
    function previousStory() {
        if (currentStoryIndex > 0) {
            currentStoryIndex--;
            showStory(currentStoryIndex);
            startStoryTimer();
        }
    }

    // Fungsi untuk update background popup
    function updatePopupBackground(index) {
        const storyImage = stories[index].querySelector('img').src;
        popup.style.backgroundImage = `url(${storyImage})`;
        popup.style.backgroundSize = 'cover';
        popup.style.backgroundPosition = 'center';
        popup.style.backgroundRepeat = 'no-repeat';
        popup.offsetHeight;
    }

    // Fungsi untuk mereset animasi
    function resetAnimation() {
        const progressBars = document.querySelectorAll('.promotion-progress-inner');
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none';
            bar.offsetHeight;
        });
    }

    // Fungsi untuk menangani swipe up dan membuka link
    function handleSwipeUp() {
        const activeStory = stories[currentStoryIndex];
        const storyLink = activeStory.getAttribute('data-link');
        if (storyLink) {
            if (isSafari()) {
                window.location.href = storyLink;
            } else {
                window.open(storyLink, '_blank');
            }
        }
    }

    // Event listener untuk mendeteksi swipe up
    popup.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    });

    popup.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchstartY - touchendY > swipeThreshold) {
            handleSwipeUp();
        }
    });

    // Tambahkan event listener ke semua tombol promotion-story-button
    storyButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight;
        clearInterval(intervalId);
    });

    // Event listener untuk navigasi antar cerita berdasarkan klik
    popup.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            previousStory();
            updatePopupBackground(currentStoryIndex);
        } else {
            nextStory();
            updatePopupBackground(currentStoryIndex);
        }
    });
});
