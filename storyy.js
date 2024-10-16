document.addEventListener('DOMContentLoaded', function () {
    const storyButton = document.getElementById('story-button-container'); // Tombol Promotion
    const popup = document.getElementById('story-popup'); // Popup
    const closeBtn = document.querySelector('.popup .close'); // Tombol close
    const stories = document.querySelectorAll('.story-item'); // Semua cerita
    const progressBarWrapper = document.querySelector('.progress-bar-wrapper'); // Wrapper progress bar
    let currentStoryIndex = 0;
    let intervalId;
    const storyDuration = 15000; // 15 detik

    // Fungsi untuk membuka popup
function showPopup(event) {
    event.preventDefault(); // Cegah navigasi default <a>
    console.log('Popup dibuka');
    popup.style.display = 'flex'; // Tampilkan popup
    console.log('Popup display:', popup.style.display); // Tambahan log
    
    document.body.classList.add('noscroll');
    document.documentElement.classList.add('noscroll');
}


    // Fungsi untuk menutup popup
    function closePopup() {
        popup.style.display = 'none';
        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        clearInterval(intervalId);
    }

    // Fungsi untuk menampilkan cerita tertentu
    function showStory(index) {
        stories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
    }

    // Fungsi untuk mempersiapkan progress bar
    function setupProgressBars() {
        progressBarWrapper.innerHTML = '';
        stories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('progress-inner');
            progressBar.appendChild(progressInner);

            progressBarWrapper.appendChild(progressBar);
        });
    }

    // Fungsi untuk mereset animasi progress bar
    function resetAnimation() {
        const progressBars = document.querySelectorAll('.progress-inner');
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none';
        });
    }

    // Fungsi untuk memulai timer cerita
    function startStoryTimer() {
        const progressBars = document.querySelectorAll('.progress-inner');
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

    // Event listener untuk tombol Promotion
    storyButton.addEventListener('click', showPopup);

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', closePopup);

    // Navigasi cerita dengan klik di dalam popup
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
});
