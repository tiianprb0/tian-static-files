// scroll-header.js

var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var header = document.getElementById('scroll-header-new');

window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    var hideThreshold = totalScrollableHeight * 0.1; // 10% of total scrollable height

    if (st > lastScrollTop) {
        // Scrolling down
        header.classList.remove('show-scroll-header-new');
    } else if (st < lastScrollTop) {
        // Scrolling up
        if (st <= hideThreshold) {
            // Within 10% of the top; hide the header
            header.classList.remove('show-scroll-header-new');
        } else {
            // Not near the top; show the header
            header.classList.add('show-scroll-header-new');
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
