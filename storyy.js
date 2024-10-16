document.addEventListener('DOMContentLoaded', function() {
    const promoButtons = document.querySelectorAll('.custom-promo-button'); // Updated class for promo buttons
    const popup = document.getElementById('custom-insta-promo-popup');
    const closeBtn = document.querySelector('.custom-insta-promo-popup .custom-insta-close');
    const promos = document.querySelectorAll('.custom-insta-promo-item');
    const progressBarWrapper = document.querySelector('.custom-insta-progress-bar-wrapper');
    let currentPromoIndex = 0;
    let intervalId;
    const promoDuration = 15000; // 15 seconds

    // Variables to detect swipe up
    let touchstartY = 0;
    let touchendY = 0;
    const swipeThreshold = 50; // Pixel threshold for swipe up

    // Function to detect Safari
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    // Function to open popup
    function showPopup() {
        console.log('Popup opened');
        currentPromoIndex = 0;
        setupProgressBars();
        resetAnimation(); // Ensure animation is reset
        showPromo(currentPromoIndex);
        updatePopupBackground(currentPromoIndex); // Update background when popup appears
        popup.style.display = 'flex';

        // Add noscroll class to body and html
        document.body.classList.add('noscroll');
        document.documentElement.classList.add('noscroll'); // Also add to html
        document.body.offsetHeight; // Force reflow to ensure changes are applied
        console.log('noscroll class added to body and html');

        startPromoTimer();
    }

    // Function to prepare progress bars
    function setupProgressBars() {
        console.log('Setting up progress bars');
        progressBarWrapper.innerHTML = ''; // Clear existing progress bars
        promos.forEach(() => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('custom-insta-progress');

            const progressInner = document.createElement('div');
            progressInner.classList.add('custom-insta-progress-inner');
            progressBar.appendChild(progressInner);

            progressBarWrapper.appendChild(progressBar);
        });
    }

    // Timer for promotions
    function startPromoTimer() {
        console.log('Starting promo timer');
        const progressBars = document.querySelectorAll('.custom-insta-progress-inner');
        progressBars.forEach(bar => {
            bar.style.transition = 'none'; // Reset transition
            bar.style.width = '0%'; // Reset width
        });

        const activeProgressBar = progressBars[currentPromoIndex];
        setTimeout(() => {
            console.log('Starting progress animation');
            activeProgressBar.style.transition = `width ${promoDuration / 1000}s linear`; // Apply new transition
            activeProgressBar.style.width = '100%';
        }, 50); // Slight delay to ensure transition is applied

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            nextPromo();
        }, promoDuration);
    }

    // Function to display a specific promotion
    function showPromo(index) {
        console.log('Displaying promo index:', index);
        promos.forEach((promo, i) => {
            promo.classList.toggle('active', i === index);
        });
        updatePopupBackground(index); // Update background each time promo changes
    }

    // Function for the next promotion
    function nextPromo() {
        currentPromoIndex++;
        if (currentPromoIndex < promos.length) {
            showPromo(currentPromoIndex);
            startPromoTimer();
        } else {
            console.log('Last promo, closing popup');
            popup.style.display = 'none';

            // Remove noscroll class from body and html
            document.body.classList.remove('noscroll');
            document.documentElement.classList.remove('noscroll');
            document.body.offsetHeight; // Force reflow to ensure changes are applied
            console.log('noscroll class removed from body and html');

            markAsViewed(); // Function to mark promos as viewed (implement as needed)
        }
    }

    // Function for the previous promotion
    function previousPromo() {
        if (currentPromoIndex > 0) {
            currentPromoIndex--;
            showPromo(currentPromoIndex);
            startPromoTimer();
        }
    }

    // Function to update popup background
    function updatePopupBackground(index) {
        const promoImage = promos[index].querySelector('img').src;
        popup.style.backgroundImage = `url(${promoImage})`;
        popup.style.backgroundSize = 'cover'; // Ensure image covers entire area
        popup.style.backgroundPosition = 'center'; // Center the image
        popup.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
        popup.offsetHeight; // Force reflow
        console.log('Popup background updated');
    }

    // Function to reset animations
    function resetAnimation() {
        console.log('Resetting animations');
        const progressBars = document.querySelectorAll('.custom-insta-progress-inner');
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none'; // Remove transition when resetting
            bar.offsetHeight; // Force reflow
        });
    }

    // Function to handle swipe up and open link
    function handleSwipeUp() {
        const activePromo = promos[currentPromoIndex];
        const promoLink = activePromo.getAttribute('data-link');
        if (promoLink) {
            console.log('Opening link:', promoLink);
            if (isSafari()) {
                window.location.href = promoLink; // Open in the same tab in Safari
            } else {
                window.open(promoLink, '_blank'); // Open in a new tab in other browsers
            }
        }
    }

    // Event listener to detect swipe up
    popup.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
        console.log('Touch start Y:', touchstartY);
    });

    popup.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        console.log('Touch end Y:', touchendY);
        if (touchstartY - touchendY > swipeThreshold) { // If swipe up exceeds threshold
            console.log('Swipe up detected');
            handleSwipeUp();
        } else {
            console.log('Swipe up not sufficient');
        }
    });

    // Add event listener to all promo buttons
    promoButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Event listener for the close button
    closeBtn.addEventListener('click', function() {
        console.log('Closing popup');
        popup.style.display = 'none';

        document.body.classList.remove('noscroll');
        document.documentElement.classList.remove('noscroll');
        document.body.offsetHeight; // Force reflow to ensure changes are applied
        console.log('noscroll class removed from body and html');

        clearInterval(intervalId);
    });

    // Event listener for navigating between promos based on click
    popup.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            console.log('Navigating to previous promo');
            previousPromo();
            updatePopupBackground(currentPromoIndex); // Update background when previous promo
        } else {
            console.log('Navigating to next promo');
            nextPromo();
            updatePopupBackground(currentPromoIndex); // Update background when next promo
        }
    });

    // Placeholder function to mark promotions as viewed
    function markAsViewed() {
        // Implement functionality as needed, e.g., setting a flag in localStorage
        console.log('Promotions marked as viewed');
    }
});
