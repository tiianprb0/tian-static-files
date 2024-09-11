document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.story-button'); // Mengambil semua tombol dengan class story-button
    const popup = document.getElementById('story-popup'); // Pastikan popup ini ada di HTML
    const closeBtn = document.querySelector('.popup .close'); // Pastikan ini ada di HTML
    
    // Fungsi untuk menampilkan popup
    function showPopup() {
        console.log('Popup dibuka');
        popup.style.display = 'flex';
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        console.log('Popup ditutup');
        popup.style.display = 'none';
    }

    // Tambahkan event listener ke semua tombol story-button
    storyButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', closePopup);
});
