document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.story-button'); // Mengambil semua tombol dengan class story-button
    const popup = document.getElementById('story-popup');
    const closeBtn = document.querySelector('.popup .close');
   
    // Fungsi untuk menampilkan popup
    function showPopup() {
        console.log('Popup dibuka');
        popup.style.display = 'flex'; // Tampilkan popup
        document.body.classList.add('noscroll'); // Nonaktifkan scroll
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        console.log('Popup ditutup');
        popup.style.display = 'none'; // Sembunyikan popup
        document.body.classList.remove('noscroll'); // Aktifkan kembali scroll
    }

    // Tambahkan event listener ke semua tombol story-button
    storyButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', closePopup);
});
