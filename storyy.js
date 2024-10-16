document.addEventListener('DOMContentLoaded', function () {
    const storyButton = document.getElementById('story-button-container');
    const popup = document.getElementById('story-popup');
    const closeBtn = document.querySelector('.popup .close');
    const stories = document.querySelectorAll('.story-item');
    const progressBarWrapper = document.querySelector('.progress-bar-wrapper');
    let currentStoryIndex = 0;
    let intervalId;
    const storyDuration = 15000; // 15 detik

    // Fungsi untuk membuka popup
    function showPopup(event) {
        event.preventDefault();
        console.log('Popup dibuka');
        popup.style.display = 'flex';
        popup.style.opacity = '0'; // Set opacity to 0
        popup.offsetHeight; // Force reflow
        popup.style.transition = 'opacity 0.3s'; // Add transition
        popup.style.opacity = '1'; // Fade in

        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll');
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        console.log('Popup ditutup');
        popup.style.opacity = '0'; // Fade out
        popup.addEventListener('transitionend', function () {
            popup.style.display = 'none'; // Hide after transition
        }, { once: true });

        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        clearInterval(intervalId);
    }

    // Event listener untuk membuka popup
    storyButton.addEventListener('click', showPopup);

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', closePopup);

    // Navigasi cerita berdasarkan klik di dalam popup
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
    });

    // Fungsi untuk cerita berikutnya
    function nextStory() {
        currentStoryIndex++;
        if (currentStoryIndex < stories.length) {
            showStory(currentStoryIndex);
            startStoryTimer();
        } else {
            closePopup();
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

    // Fungsi untuk menampilkan cerita tertentu
    function showStory(index) {
        stories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
    }
});
