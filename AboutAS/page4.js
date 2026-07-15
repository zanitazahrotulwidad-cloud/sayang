let photos = [

{
img:"foto6.jpeg",
text:"Awal cerita kecil yang aku simpan 🤍"
},

{
img:"foto7.jpeg",
text:"Hari biasa yang jadi kenangan luar biasa ✨"
},

{
img:"foto8.jpeg",
text:"Senyum yang selalu aku ingat"
},

{
img:"foto9.jpeg",
text:"Terima kasih sudah menemani perjalanan ini"
},

{
img:"foto10.jpeg",
text:"Banyak cerita yang kita lewati bersama"
},

{
img:"foto11.jpeg",
text:"Moment sederhana yang bikin bahagia"
},

{
img:"foto12.jpeg",
text:"Satu tahun penuh cerita 🤍"
},

{
img:"foto13.jpeg",
text:"Masih banyak hal yang ingin kita lakukan"
},

{
img:"foto14.jpeg",
text:"Semoga cerita ini terus berjalan"
},

{
img:"foto15.jpeg",
text:"Terima kasih sudah menjadi bagian dari hidupku ❤️"
}

];


let index = 0;



function openBox(){

    document.querySelector(".box-area")
    .classList.add("open");


    setTimeout(()=>{


        document.querySelector(".box-area")
        .style.display="none";


        document.querySelector(".memory")
        .classList.remove("hidden");


        showPhoto();


    },1000);


}



function showPhoto(){

    let img=document.getElementById("photo");
    let text=document.getElementById("caption");


    img.src=photos[index].img;

    text.innerHTML=photos[index].text;


}



function nextPhoto(){

    index++;


    if(index < photos.length){

        showPhoto();

    }

    else{

        document.querySelector(".memory")
        .innerHTML=
        `
        <h1>
        ❤️ Semua Kenangan Sudah Terbuka
        </h1>

        <p>
        LOVE YOU SAYANGGG.
        </p>
        `;

    }

}