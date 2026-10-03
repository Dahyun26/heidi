

/*==================================================
            ELEMENTS
==================================================*/

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progressBar = document.getElementById("progressBar");

const playlistContainer =
document.getElementById("playlist");

const current =
document.getElementById("current");

const duration =
document.getElementById("duration");

let currentSong = 0;

/*==================================================
        LOAD SONG
==================================================*/

function loadSong(index){

const song = playlist[index];

audio.src = song.file;

cover.src = song.cover;

title.innerHTML = song.title;

artist.innerHTML = song.artist;

highlightSong();

}

/*==================================================
        PLAY
==================================================*/

function playSong(){

audio.play();

playBtn.innerHTML =
'<i class="fa-solid fa-pause"></i>';

}

/*==================================================
        PAUSE
==================================================*/

function pauseSong(){

audio.pause();

playBtn.innerHTML =
'<i class="fa-solid fa-play"></i>';

}

/*==================================================
        PLAY BUTTON
==================================================*/

playBtn.addEventListener("click",()=>{

if(audio.paused){

playSong();

}else{

pauseSong();

}

});

/*==================================================
        NEXT
==================================================*/

nextBtn.addEventListener("click",()=>{

currentSong++;

if(currentSong>=playlist.length){

currentSong=0;

}

loadSong(currentSong);

playSong();

});

/*==================================================
        PREVIOUS
==================================================*/

prevBtn.addEventListener("click",()=>{

currentSong--;

if(currentSong<0){

currentSong=
playlist.length-1;

}

loadSong(currentSong);

playSong();

});

/*==================================================
        PROGRESS BAR
==================================================*/

audio.addEventListener("timeupdate",()=>{

const percent =
(audio.currentTime/audio.duration)*100;

progressBar.style.width =
percent+"%";

current.innerHTML =
formatTime(audio.currentTime);

duration.innerHTML =
formatTime(audio.duration);

});

/*==================================================
        FORMAT TIME
==================================================*/

function formatTime(time){

if(isNaN(time))
return "0:00";

const minutes =
Math.floor(time/60);

const seconds =
Math.floor(time%60);

return minutes+":"+
(seconds<10?"0":"")+seconds;

}

/*==================================================
        AUTO NEXT
==================================================*/

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong>=playlist.length){

currentSong=0;

}

loadSong(currentSong);

playSong();

});

/*==================================================
        PLAYLIST
==================================================*/

function loadPlaylist(){

playlistContainer.innerHTML="";

playlist.forEach((song,index)=>{

const div =
document.createElement("div");

div.className="song";

div.innerHTML=`

<div class="song-left">

<img src="${song.cover}">

<div>

<div class="song-title">

${song.title}

</div>

<div class="song-artist">

${song.artist}

</div>

</div>

</div>

<i class="fa-solid fa-play"></i>

`;

div.onclick=()=>{

currentSong=index;

loadSong(index);

playSong();

};

playlistContainer.appendChild(div);

});

}

/*==================================================
        ACTIVE SONG
==================================================*/

function highlightSong(){

const songs =
document.querySelectorAll(".song");

songs.forEach((song,index)=>{

song.classList.remove("active");

if(index===currentSong){

song.classList.add("active");

}

});

}

/*==================================================
        START
==================================================*/

loadPlaylist();

loadSong(0);