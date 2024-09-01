// Pastikan kode ini ada dalam file .js eksternal, misalnya `redirect.js`

document.addEventListener("DOMContentLoaded", function() {
    // Cek jika URL mengandung path "/go/"
    const path = window.location.pathname.split("/go/")[1];
    if (path) {
        console.log("Mengakses /go/ path:", path); // Debugging log

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDYwtZf1DUqy5wb_ONXh6OupXvZ6rkzcEY",
            authDomain: "short-url-52b26.firebaseapp.com",
            projectId: "short-url-52b26",
            storageBucket: "short-url-52b26.appspot.com",
            messagingSenderId: "718509336898",
            appId: "1:718509336898:web:f8ae5e8d8ba53d735a80db",
            measurementId: "G-X7TQDT1Z88"
        };

        // Menggunakan dynamic import untuk modul ES6
        import("https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js").then(({ initializeApp }) => {
            console.log("Firebase App loaded"); // Debugging log
            import("https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js").then(({ getFirestore, doc, getDoc }) => {
                console.log("Firestore loaded"); // Debugging log

                // Inisialisasi Firebase
                const app = initializeApp(firebaseConfig);
                console.log("Firebase Initialized"); // Debugging log

                // Inisialisasi Firestore
                const db = getFirestore(app);

                // Lakukan pengecekan dan redirect
                if (path) {
                    getDoc(doc(db, "shorturls", path)).then(docSnap => {
                        if (docSnap.exists()) {
                            const url = docSnap.data().url;
                            console.log("URL yang ditemukan di Firestore:", url); // Debugging log
                            // Arahkan ke URL tujuan
                            window.location.href = url;
                        } else {
                            document.body.innerHTML = "URL tidak ditemukan!";
                        }
                    }).catch(error => {
                        console.error("Error getting document:", error);
                        document.body.innerHTML = "Terjadi kesalahan!";
                    });
                } else {
                    document.body.innerHTML = "Path tidak tersedia!";
                }
            }).catch(error => {
                console.error("Error loading Firestore:", error);
            });
        }).catch(error => {
            console.error("Error loading Firebase:", error);
        });
    } else {
        console.error("Path tidak ditemukan di URL.");
    }
});
