// ===========================
// PAGE 2
// OUR MEMORIES
// ===========================

function nextPage(){

    // Efek fade sebelum pindah halaman
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "page3.html";

    }, 500);

}

// Efek muncul saat halaman dibuka
window.onload = () => {

    document.body.style.opacity = "1";

};