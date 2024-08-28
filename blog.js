document.addEventListener('DOMContentLoaded', function() {
    const recentPostsUrl = "/feeds/posts/default?alt=json";
    const initialPostsToShow = 3; // Initial number of posts to display
    const postsIncrement = 3; // Number of posts to load on each click
    let totalPosts = 0; // Total number of posts available
    let currentPostsDisplayed = 0; // Current number of displayed posts
    const container = document.getElementById("recent-posts-container");
    const featuredContainer = document.getElementById("featured-post");
    let allPostsData = []; // Array to hold all posts data
    let loadMoreButton; // Reference to the Load More button

    // Fetch recent posts from the API
    function fetchRecentPosts() {
        fetch(recentPostsUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                allPostsData = data.feed.entry || []; // Store all posts data, use empty array if undefined
                totalPosts = allPostsData.length; // Get total number of posts

                // Display the initial set of posts
                displayPosts();

                // Create and show the Load More button if there are more posts to display
                if (totalPosts > currentPostsDisplayed) {
                    createLoadMoreButton();
                }
            })
            .catch(error => console.error('Error fetching posts:', error)); // Catch and log any errors
    }

    // Display posts on the page
    function displayPosts() {
        const entriesToShow = allPostsData.slice(currentPostsDisplayed, currentPostsDisplayed + postsIncrement);

        entriesToShow.forEach((entry, index) => {
            const postTitle = entry.title.$t;
            const postUrl = entry.link.find(link => link.rel === 'alternate').href;
            const postDate = new Date(entry.published.$t).toLocaleDateString();
            const postContent = entry.content ? entry.content.$t : entry.summary.$t;
            const postLabels = entry.category ? entry.category.map(cat => cat.term) : [];

            const labelsHTML = postLabels.map(label => {
                const labelUrl = `/search/label/${encodeURIComponent(label)}`;
                return `<a href="${labelUrl}" class="post-label">${label}</a>`;
            }).join(' ');

            const postItem = document.createElement('div');
            postItem.classList.add('post-item');
            postItem.innerHTML = `
                <div class="post-title-container">
                    <h2><a href="${postUrl}">${postTitle}</a></h2>
                </div>
                <p>${stripHtmlTags(postContent).substring(0, 150)}...</p>
                <div class="post-labels">${labelsHTML}</div>
                <div class="post-meta">
                    <span>By ${entry.author[0].name.$t} — ${postDate}</span>
                </div>
                <hr class="post-divider">
            `;

            // Jika ini adalah post pertama dan belum ada featured post, tambahkan ke featuredContainer
            if (currentPostsDisplayed === 0 && index === 0) {
                featuredContainer.appendChild(postItem.cloneNode(true));
            } else {
                // Tambahkan post sebelum tombol Load More atau di akhir container jika tombol belum ada
                if (loadMoreButton) {
                    container.insertBefore(postItem, loadMoreButton);
                } else {
                    container.appendChild(postItem);
                }
            }

            currentPostsDisplayed++;
        });

        // Jika semua post sudah ditampilkan, sembunyikan tombol Load More
        if (currentPostsDisplayed >= totalPosts && loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    }

    // Create Load More button
    function createLoadMoreButton() {
        loadMoreButton = document.createElement('button');
        loadMoreButton.textContent = 'Load More';
        loadMoreButton.id = 'load-more-button';
        loadMoreButton.classList.add('load-more-button');

        loadMoreButton.addEventListener('click', function() {
            loadMoreButton.disabled = true;
            loadMoreButton.textContent = 'Loading...';
            setTimeout(() => {
                displayPosts();
                loadMoreButton.disabled = false;
                loadMoreButton.textContent = 'Load More';

                // Scroll to the position where new posts start
                loadMoreButton.scrollIntoView({ behavior: 'smooth' });
            }, 500); // Simulate loading delay
        });

        container.appendChild(loadMoreButton);
    }

    // Utility function to strip HTML tags from content
    function stripHtmlTags(str) {
        const tmp = document.createElement('div');
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || '';
    }

    // Initialize fetching posts
    fetchRecentPosts();
});
