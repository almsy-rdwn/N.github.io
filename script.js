document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk memperbarui waktu dan tanggal
    function updateWaktu() {
        var waktuSekarang = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        var waktuFormatted = waktuSekarang.toLocaleDateString('id-ID', options);

        // Perbarui elemen HTML
        document.getElementById("tampilan-waktu").innerHTML = waktuFormatted;
    }

    // Perbarui waktu setiap detik
    setInterval(updateWaktu, 1000);

    // Panggil fungsi untuk pertama kali
    updateWaktu();
});
