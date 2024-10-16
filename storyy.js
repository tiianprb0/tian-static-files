document.addEventListener('DOMContentLoaded', function() {
    const promoPopup = document.getElementById('promo-story-popup');
    const closeBtn = document.querySelector('.promo-close');
    const stories = document.querySelectorAll('.promo-story-item');
    const progressWrapper = document.querySelector('.promo-progress-wrapper');
    let currentStoryIndex = 0;
    let intervalId;
    const storyDuration = 15000;

    function showPopup() {
        currentStoryIndex = 0;
        setupProgressBars();
        showStory(currentStoryIndex);
        promoPopup.style.display = 'flex';
        startStoryTimer();
    }

    function setupProgressBars() {
        progressWrapper.innerHTML = '';
        stories.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress');
            const progressInner = document.createElement('div');
            progressInner.classList.add('progress-inner');
            progressBar.appendChild(progressInner);
            progressWrapper.appendChild(progressBar);
        });
    }

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
        intervalId = setInterval(nextStory, storyDuration);
    }

    function showStory(index) {
        stories.forEach((story, i) => {
            story.classList.toggle('active', i === index);
        });
    }

    function nextStory() {
        currentStoryIndex++;
        if (currentStoryIndex < stories.length) {
            showStory(currentStoryIndex);
            startStoryTimer();
        } else {
            promoPopup.style.display = 'none';
            clearInterval(intervalId);
        }
    }

    closeBtn.addEventListener('click', function() {
        promoPopup.style.display = 'none';
        clearInterval(intervalId);
    });

    document.querySelectorAll('.promo-story-item').forEach(item => {
        item.addEventListener('click', () => {
            const link = item.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
    });

    showPopup(); // For demo purposes, this will auto-show the popup.
});
