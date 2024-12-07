
   let canDownload = true;
    let timerInterval;
    let remainingTime = 30;

    function handlePlatformChange() {
        const platform = document.getElementById("platformSelect").value;
        const youtubeOptions = document.getElementById("youtubeOptions");
        const igInputs = document.getElementById("igInputs");
        const generalUrlInput = document.getElementById("generalUrlInput");
        const downloadButton = document.getElementById("downloadButton");
        
        youtubeOptions.style.display = "none";
        igInputs.style.display = "none";
        generalUrlInput.style.display = "none";

        resetAdditionalOptions();

        if (platform === "youtube") {
            youtubeOptions.style.display = "block";
            downloadButton.textContent = "Snatch Link";
            generalUrlInput.style.display = "block"; // YouTube butuh URL
        } else if (platform === "instagram") {
            igInputs.style.display = "block";
            downloadButton.textContent = "Snatch Link";
        } else {
            // TikTok, Twitter
            if (platform === "tiktok" || platform === "twitter") {
                generalUrlInput.style.display = "block";
            }
            downloadButton.textContent = "Snatch Link";
        }
    }

    function resetAdditionalOptions() {
        document.getElementById("youtubeType").value = "";
        document.getElementById("youtubeQuality").value = "";
        document.getElementById("youtubeQualityContainer").style.display = "none";
    }

    function handleYouTubeTypeChange() {
        var youtubeType = document.getElementById("youtubeType").value;
        var youtubeQualityContainer = document.getElementById("youtubeQualityContainer");
        var downloadButton = document.getElementById("downloadButton");
        
        if (youtubeType === "video") {
            youtubeQualityContainer.style.display = "block";
            downloadButton.textContent = "Snatch Link";
        } else if (youtubeType === "audio") {
            youtubeQualityContainer.style.display = "none";
            document.getElementById("youtubeQuality").value = "";
            downloadButton.textContent = "Snatch Link";
        } else {
            youtubeQualityContainer.style.display = "none";
            document.getElementById("youtubeQuality").value = "";
            downloadButton.textContent = "Snatch Link";
        }
    }

    async function pasteFromClipboard() {
        try {
            const text = await navigator.clipboard.readText();
            if (text) {
                const platform = document.getElementById("platformSelect").value;
                if (platform === "instagram") {
                    // Paste ke instagramLink
                    document.getElementById("instagramLink").value = text;
                } else {
                    // platform lain paste ke mediaUrl
                    document.getElementById("mediaUrl").value = text;
                }
            } else {
                alert("Clipboard kosong atau tidak dapat membaca data.");
            }
        } catch (err) {
            console.error('Gagal menempelkan teks: ', err);
            alert("Gagal menempelkan teks. Pastikan situs ini memiliki izin untuk mengakses clipboard.");
        }
    }

    function downloadMedia() {
        if (!canDownload) {
            alert("Silakan tunggu " + remainingTime + " detik sebelum melakukan unduhan berikutnya.");
            return;
        }

        const platform = document.getElementById("platformSelect").value;

        if (platform === "") {
            alert("Pilih platform terlebih dahulu.");
            return;
        }

        let urlForApi = "";
        let endpoints = [];

        let youtubeType = "";
        let youtubeQuality = "";

        if (platform === "youtube") {
            youtubeType = document.getElementById("youtubeType").value;
            youtubeQuality = document.getElementById("youtubeQuality").value;
            const mediaUrl = document.getElementById("mediaUrl").value.trim();
            if (!mediaUrl) {
                alert("Masukkan URL media YouTube.");
                return;
            }

            if (youtubeType === "") {
                alert("Pilih tipe download untuk YouTube.");
                return;
            }

            if (youtubeType === "video" && youtubeQuality === "") {
                alert("Pilih kualitas video untuk YouTube.");
                return;
            }

        } else if (platform === "instagram") {
            const username = document.getElementById("instagramUsername").value.trim();
            const link = document.getElementById("instagramLink").value.trim();

            if (!username && !link) {
                alert("Isi username untuk Story atau Link untuk Post/Reels! Salah satu wajib diisi.");
                return;
            }

        } else {
            // TikTok / Twitter
            const mediaUrl = document.getElementById("mediaUrl").value.trim();
            if (!mediaUrl) {
                alert("Masukkan URL media.");
                return;
            }
        }

        const baseApiUrl = "https://api.ryzendesu.vip";
        const apiEndpoints = {
            "tiktok": ["/api/downloader/ttdl", "/api/downloader/v2/ttdl"],
            "twitter": ["/api/downloader/twitter"],
            "instagram_post": ["/api/downloader/igdl"],
            "youtube_video": ["/api/downloader/ytmp4"],
            "youtube_audio": ["/api/downloader/ytmp3", "/api/downloader/ytdl"]
        };

        if (platform === "youtube") {
            const mediaUrl = document.getElementById("mediaUrl").value.trim();
            if (youtubeType === "video") {
                endpoints = apiEndpoints["youtube_video"];
                urlForApi = `${baseApiUrl}${endpoints[0]}?url=${encodeURIComponent(mediaUrl)}&quality=${encodeURIComponent(youtubeQuality)}`;
            } else {
                endpoints = apiEndpoints["youtube_audio"];
                urlForApi = `${baseApiUrl}${endpoints[0]}?url=${encodeURIComponent(mediaUrl)}`;
            }
        } else if (platform === "instagram") {
            const username = document.getElementById("instagramUsername").value.trim();
            const link = document.getElementById("instagramLink").value.trim();

            endpoints = apiEndpoints["instagram_post"];

            let finalURL = "";
            if (username && !link) {
                finalURL = `https://www.instagram.com/stories/${username}/`;
            } else if (!username && link) {
                finalURL = link;
            } else if (username && link) {
                // Jika user isi keduanya, prioritaskan username untuk ambil story
                finalURL = `https://www.instagram.com/stories/${username}/`;
            }

            urlForApi = `${baseApiUrl}${endpoints[0]}?url=${encodeURIComponent(finalURL)}`;
        } else {
            // TikTok/Twitter
            const mediaUrl = document.getElementById("mediaUrl").value.trim();
            if (platform === "tiktok") {
                endpoints = apiEndpoints["tiktok"];
            } else if (platform === "twitter") {
                endpoints = apiEndpoints["twitter"];
            }
            urlForApi = `${baseApiUrl}${endpoints[0]}?url=${encodeURIComponent(mediaUrl)}`;
        }

        showLoading();

        function tryEndpoint(i) {
            if (i >= endpoints.length) {
                hideLoading();
                alert("Gagal mengambil media. Silakan coba lagi nanti.");
                return;
            }

            let finalUrl = urlForApi;

            const isYoutubeAudio = (platform === "youtube" && youtubeType === "audio");
            if (isYoutubeAudio && i > 0) {
                const mediaUrl = document.getElementById("mediaUrl").value.trim();
                finalUrl = `${baseApiUrl}${endpoints[i]}?url=${encodeURIComponent(mediaUrl)}`;
            }

            fetch(finalUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(r => r.json())
            .then(data => {
                if (isSuccess(data, platform, youtubeType)) {
                    displayResult(data, platform, youtubeType);
                    hideLoading();
                    canDownload = false;
                    startTimer();
                } else {
                    tryEndpoint(i+1);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                tryEndpoint(i+1);
            });
        }

        tryEndpoint(0);
    }

    function isSuccess(data, platform, youtubeType) {
        switch(platform) {
            case "tiktok":
                return data.success === true && data.data && data.data.code === 0;
            case "twitter":
                return data.status === true && data.type === "video" && data.media && data.media.length > 0;
            case "instagram":
                return data.status === true && data.data && data.data.length > 0;
            case "youtube":
                if (youtubeType === "video") {
                    return data.status === "tunnel" && data.url;
                } else if (youtubeType === "audio") {
                    return data.status === "tunnel" && data.url;
                }
                return false;
            default:
                return false;
        }
    }

    function displayResult(data, platform, youtubeType) {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        if (platform === "tiktok") {
            var videoData = data.data.data;
            resultDiv.innerHTML = `
                <button class="download-link" onclick="forceDownload('${videoData.play}', 'tiktok_video.mp4')">Download Video Tanpa Watermark</button>
            `;
        } else if (platform === "instagram") {
            var mediaItems = data.data;
            // Gunakan Set untuk menghindari duplikasi
            let uniqueUrls = new Set();
            var htmlContent = `<div class="multi-download-button">`;
            mediaItems.forEach(function(item, idx) {
                if (!uniqueUrls.has(item.url)) { // Periksa menggunakan item.url untuk duplikasi
                    uniqueUrls.add(item.url);
                    // Tentukan jenis media berdasarkan URL atau informasi lain yang tersedia
                    let isVideo = item.url.toLowerCase().endsWith('.mp4'); // Asumsi berdasarkan ekstensi
                    let downloadUrl = isVideo ? item.url : item.thumbnail;
                    let extension = isVideo ? 'mp4' : 'jpg'; // Tetapkan ekstensi yang sesuai
                    let filename = `ig_media_${uniqueUrls.size}.${extension}`;
                    htmlContent += `
                        <button class="download-link" onclick="forceDownload('${downloadUrl}', '${filename}')">Media ${uniqueUrls.size}</button>
                    `;
                }
            });
            htmlContent += `</div>`;
            resultDiv.innerHTML = htmlContent;
        } else if (platform === "youtube") {
            var youtubeData = data;
            if (youtubeType === "video") {
                var quality = document.getElementById("youtubeQuality").value;
                resultDiv.innerHTML = `
                    <button class="download-link" onclick="forceDownload('${youtubeData.url}', 'youtube_video_${quality}.mp4')">Download Video (${quality})</button>
                `;
            } else if (youtubeType === "audio") {
                resultDiv.innerHTML = `
                    <button class="download-link" onclick="forceDownload('${youtubeData.url}', 'youtube_audio.mp3')">Download Audio</button>
                `;
            }
        } else if (platform === "twitter") {
            var mediaItems = data.media;
            var htmlContent = `<div class="multi-download-button">`;
            mediaItems.forEach(function(item) {
                htmlContent += `
                    <button class="download-link" onclick="forceDownload('${item.url}', 'twitter_${item.quality}p.mp4')">Video ${item.quality}p</button>
                `;
            });
            htmlContent += `</div>`;
            resultDiv.innerHTML = htmlContent;
        } else {
            resultDiv.innerHTML = `<p>Platform tidak dikenali.</p>`;
        }
    }

    async function forceDownload(url, filename) {
        try {
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const blob = await response.blob(); // Mengambil Blob dengan tipe MIME asli
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = filename; // Menetapkan nama file dengan ekstensi yang benar
            document.body.appendChild(a);
            a.click();
            // Tambahkan delay sebelum mencabut URL objek untuk memastikan unduhan dimulai
            setTimeout(() => {
                window.URL.revokeObjectURL(blobUrl);
                document.body.removeChild(a);
            }, 1000);
        } catch (err) {
            console.error('Error downloading file:', err);
            alert('Gagal mendownload file.');
        }
    }

    function showLoading() {
        document.getElementById("loading").style.display = "flex";
    }

    function hideLoading() {
        document.getElementById("loading").style.display = "none";
    }

    function startTimer() {
        var downloadButton = document.getElementById("downloadButton");
        downloadButton.disabled = true;
        remainingTime = 30;
        downloadButton.textContent = `Snatch Link (${remainingTime}s)`;

        timerInterval = setInterval(function() {
            remainingTime--;
            if (remainingTime > 0) {
                downloadButton.textContent = `Snatch Link (${remainingTime}s)`;
            } else {
                clearInterval(timerInterval);
                downloadButton.disabled = false;
                downloadButton.textContent = "Snatch Link";
                canDownload = true;
            }
        }, 1000);
    }
    
