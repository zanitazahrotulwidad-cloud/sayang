// Ambil elemen dari HTML
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

// Saat tombol Open Letter diklik
openBtn.addEventListener("click", () => {

    // Efek amplop mengecil
    envelope.style.transform = "scale(0.8)";
    envelope.style.opacity = "0";

    // Sembunyikan tombol
    openBtn.style.display = "none";

    // Setelah animasi selesai, tampilkan surat
    setTimeout(() => {

        envelope.style.display = "none";
        letter.style.display = "block";

    }, 600);

});

// Tombol Next
function nextPage(){

    window.location.href = "page2.html";

}