document.addEventListener('DOMContentLoaded', function() {
    const instaStoryButton = document.getElementById('insta-story-button'); // Mengambil tombol dengan ID insta-story-button
    const instaPopup = document.getElementById('insta-promotion-popup');
    const instaCloseBtn = document.querySelector('.insta-popup .insta-close');
    const instaStories = document.querySelectorAll('.insta-story-item');
    const instaProgressBarWrapper = document.querySelector('.insta-progress-bar-wrapper');
    let currentInstaStoryIndex = 0;
    let instaIntervalId;
    const instaStoryDuration = 15000; // 15 detik

    let touchstartY = 0;
    let touchendY = 0;
    const instaSwipeThreshold = 50; // Pixel threshold untuk swipe up

    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    function showInstaPopup() {
        console.log('Instagram Promotion Popup dibuka');
        currentInstaStoryIndex = 0;
        setupInstaProgressBars();
        resetInstaAnimation();
        showInstaStory(currentInstaStoryIndex);
        updateInstaPopupBackground(currentInstaStoryIndex);
        instaPopup.style.display = 'flex';

        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll');
        document.body.offsetHeight;
        console.log('Class noscroll ditambahkan ke body dan html');

        startInstaStoryTimer();
    }

    function setupInstaProgressBars() {
        console.log('Mempersiapkan Instagram progress bar');
        instaProgressBarWrapper.innerHTML = '';
        instaStories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('insta-progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('insta-progress-inner');
            progressBar.appendChild(progressInner);

            instaProgressBarWrapper.appendChild(progressBar);
        });
    }

    function startInstaStoryTimer() {
        console.log('Memulai timer Instagram cerita');
        const instaProgressBars = document.querySelectorAll('.insta-progress-inner');
        instaProgressBars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
        });

        const activeProgressBar = instaProgressBars[currentInstaStoryIndex];
        setTimeout(() => {
            console.log('Animasi Instagram progress dimulai');
            activeProgressBar.style.transition = `width ${instaStoryDuration / 1000}s linear`;
            activeProgressBar.style.width = '100%';
        }, 50);

        clearInterval(instaIntervalId);
        instaIntervalId = setInterval(() => {
            nextInstaStory();
        }, instaStoryDuration);
    }

    function showInstaStory(index) {
        console.log('Menampilkan Instagram cerita indeks:', index);
        instaStories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
        updateInstaPopupBackground(index);
    }

    function nextInstaStory() {
        currentInstaStoryIndex++;
        if (currentInstaStoryIndex < instaStories.length) {
            showInstaStory(currentInstaStoryIndex);
            startInstaStoryTimer();
        } else {
            console.log('Instagram cerita terakhir, menutup popup');
            instaPopup.style.display = 'none';

            document.body.classList.remove('noscroll');
            document.documentElement.classList.remove('noscroll');
            document.body.offsetHeight;
            console.log('Class noscroll dihapus dari body dan html');

            markAsViewed();
        }
    }

    function previousInstaStory() {
        if (currentInstaStoryIndex > 0) {
            currentInstaStoryIndex--;
            showInstaStory(currentInstaStoryIndex);
            startInstaStoryTimer();
        }
    }

    function updateInstaPopupBackground(index) {
        const storyImage = instaStories[index].querySelector('img').src;
        instaPopup.style.backgroundImage = `url(${storyImage})`;
        instaPopup.style.backgroundSize = 'cover';
        instaPopup.style.backgroundPosition = 'center';
        instaPopup.style.backgroundRepeat = 'no-repeat';
        instaPopup.offsetHeight;
        console.log('Background Instagram popup diperbarui');
    }

    function resetInstaAnimation() {
        console.log('Mereset Instagram animasi');
        const instaProgressBars = document.querySelectorAll('.insta-progress-inner');
        instaProgressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none';
            bar.offsetHeight;
        });
    }

    function handleInstaSwipeUp() {
        const activeInstaStory = instaStories[currentInstaStoryIndex];
        const instaStoryLink = activeInstaStory.getAttribute('data-link');
        if (instaStoryLink) {
            console.log('Membuka link Instagram:', instaStoryLink);
            if (isSafari()) {
                window.location.href = instaStoryLink;
            } else {
                window.open(instaStoryLink, '_blank');
            }
        }
    }

    instaPopup.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
        console.log('Touch start Y:', touchstartY);
    });

    instaPopup.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        console.log('Touch end Y:', touchendY);
        if (touchstartY - touchendY > instaSwipeThreshold) {
            console.log('Swipe up Instagram terdeteksi');
            handleInstaSwipeUp();
        } else {
            console.log('Swipe up Instagram tidak cukup');
        }
    });

    if (instaStoryButton) {
        instaStoryButton.addEventListener('click', showInstaPopup);
    }

    instaCloseBtn.addEventListener('click', function() {
        console.log('Menutup Instagram popup');
        instaPopup.style.display = 'none';

        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight;
        console.log('Class noscroll dihapus dari body dan html');

        clearInterval(instaIntervalId);
    });

    instaPopup.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            console.log('Navigasi ke Instagram cerita sebelumnya');
            previousInstaStory();
            updateInstaPopupBackground(currentInstaStoryIndex);
        } else {
            console.log('Navigasi ke Instagram cerita berikutnya');
            nextInstaStory();
            updateInstaPopupBackground(currentInstaStoryIndex);
        }
    });

    function markAsViewed() {
        console.log('Menandai Instagram cerita sebagai sudah dilihat');
        // Implementasikan logika Anda di sini
    }
});
