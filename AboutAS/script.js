const popup = document.getElementById("popup");

const openBtn = document.getElementById("openBtn");

openBtn.onclick = () =>{

    popup.style.display = "flex";

}

function checkPassword(){

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    // Ganti dengan tanggal jadian kalian
    const correctPassword = "15april2025";

    if(password === correctPassword){

        window.location.href="page1.html";

    }

    else{

        message.innerHTML="🥺 Ups... coba ingat lagi tanggal spesial kita ya.";

    }

}