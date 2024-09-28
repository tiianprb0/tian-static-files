
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function() {
    var scrollHeaderNew = document.getElementById("scroll-header-new");
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    var hideThreshold = totalScrollableHeight * 0.1; // 10% before the top

    if (st > lastScrollTop) {
        // Scrolling down
        scrollHeaderNew.classList.remove("show-scroll-header-new");
    } else {
        // Scrolling up
        if (st <= hideThreshold) {
            // Within 10% from the top; hide the header
            scrollHeaderNew.classList.remove("show-scroll-header-new");
        } else {
            // Not near the top; show the header
            scrollHeaderNew.classList.add("show-scroll-header-new");
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
]]>
