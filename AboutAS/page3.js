// ===============================
// LOVE QUIZ
// ===============================

const questions = [

{
    question:"Kapan tanggal lahir kamu?",
    answer:"05mei2005", // GANTI
    image:"foto1.jpeg",
    caption:"❤️ Kamu lucu banget sih pengen dijadiin suami deh."
},

{
    question:"Kapan tanggal lahir aku?",
    answer:"26juni2006", // GANTI
    image:"foto2.jpeg",
    caption:"🥰 Sunsetnya bangus ya besok besok bawa aku kesana lagi ya."
},

{
    question:"Kapan tanggal jadian kita?",
    answer:"15april2025", // GANTI
    image:"foto3.jpeg",
    caption:"💕 aku lucu kan hihihihii."
},

{
    question:"Di mana pertama kali kita ketemu?",
    answer:"depan kost", // GANTI
    image:"foto4.jpeg",
    caption:"🌸 aku sayang kamu selamanyaaaa."
},

{
    question:"Pertama kali kita jalan ke mana?",
    answer:"utama raya", // GANTI
    image:"foto5.jpeg",
    caption:"❤️ Sama aku terus ya sayanggggggg"
}

];

let current = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const message = document.getElementById("message");

const photoBox = document.getElementById("photoBox");
const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

loadQuestion();

function loadQuestion(){

    question.innerHTML =
    "💕 Question " + (current+1) + "/5 <br><br>" +
    questions[current].question;

    answer.value="";

    message.innerHTML="";

    photoBox.style.display="none";

}

function checkAnswer(){

    let userAnswer = answer.value
    .trim()
    .toLowerCase();

    let correctAnswer = questions[current].answer
    .trim()
    .toLowerCase();

    if(userAnswer===correctAnswer){

        message.style.color="#EC407A";

        message.innerHTML="🥹 Yeay... Kamu masih ingat ❤️";

        setTimeout(()=>{

            photo.src=questions[current].image;

            caption.innerHTML=questions[current].caption;

            photoBox.style.display="block";

        },700);

    }

    else{

        message.style.color="red";

        message.innerHTML="🤭 Yakin nih? Coba ingat lagi ya sayang ❤️";

    }

}

function nextQuestion(){

    current++;

    if(current<questions.length){

        loadQuestion();

    }

    else{

        alert("🥹 Yeayy... Kamu berhasil menjawab semuanya..loveyouuu ❤️");

        window.location.href="page4.html";

    }

}