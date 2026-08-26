/*==================================================
    FOR HEIDI ❤️
    Romantic Dashboard
==================================================*/

let passcode = "";
const correctCode = "072626"; // Change this to your own passcode

/*==================================================
    PAGE LOAD
==================================================*/

window.addEventListener("load", () => {

    const login = sessionStorage.getItem("loggedIn");

    if(login === "true"){

        document.getElementById("login-screen").style.display = "none";
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";

    }else{

        document.getElementById("login-screen").style.display = "flex";
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "none";

    }

});

/*==================================================
    PASSCODE DISPLAY
==================================================*/

function updateDots(){

    const dots = document.querySelectorAll("#passcode-display span");

    dots.forEach((dot,index)=>{

        if(index < passcode.length){

            dot.classList.add("active");

        }else{

            dot.classList.remove("active");

        }

    });

}

/*==================================================
    NUMBER PRESSED
==================================================*/

function addNumber(number){

    if(passcode.length >= 6)
        return;

    passcode += number;

    updateDots();

    if(passcode.length === 6){

        setTimeout(checkPasscode,250);

    }

}

/*==================================================
    DELETE
==================================================*/

function deleteNumber(){

    passcode = passcode.slice(0,-1);

    updateDots();

}

/*==================================================
    LOGIN
==================================================*/

function checkPasscode(){

    if(passcode === correctCode){

        sessionStorage.setItem("loggedIn","true");

        document.getElementById("login-screen").style.display = "none";

        document.getElementById("loading-screen").style.display = "flex";

        setTimeout(()=>{

            document.getElementById("loading-screen").style.display = "none";

            document.getElementById("main-content").style.display = "block";

        },2500);

    }else{

        document.getElementById("error").innerHTML =
        "Wrong passcode 💔";

        passcode = "";

        updateDots();

    }

}

/*==================================================
    LOGOUT
==================================================*/

function logout(){

    sessionStorage.removeItem("loggedIn");

    location.reload();

}
/*==================================================
    SINGLE PAGE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

function showSection(id){

    sections.forEach(section=>{

        section.style.display="none";

    });

    const target = document.getElementById(id);

    if(target){

        target.style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}
/*==================================================
    FLOATING HEARTS
==================================================*/

const heartContainer =
document.querySelector(".floating-hearts");

function createHeart(){

    if(!heartContainer)
        return;

    const heart =
    document.createElement("span");

    const hearts =
    ["💖","💕","💜","❤️","🌸"];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    (20+Math.random()*20)+"px";

    heart.style.position="fixed";

    heart.style.bottom="-50px";

    heart.style.animation=
    "heartFloat 8s linear forwards";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1200);

/*==================================================
    LOVE QUIZ
==================================================*/

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

if (noBtn) {

    noBtn.addEventListener("mouseover", () => {

        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 80);

        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

}

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        launchConfetti();

        setTimeout(() => {

            alert("Awww ❤️ I love you more, Heidi! 💜");

        },500);

    });

}
/*==================================================
    CONFETTI
==================================================*/

function launchConfetti(){

    const emojis = ["💖","💕","💜","❤️","🌸","✨"];

    for(let i=0;i<40;i++){

        const confetti=document.createElement("span");

        confetti.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        confetti.style.position="fixed";

        confetti.style.left=
        Math.random()*100+"vw";

        confetti.style.top="-50px";

        confetti.style.fontSize=
        (20+Math.random()*20)+"px";

        confetti.style.animation=
        "heartFloat 5s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}
/*==================================================
    LOVE METER
==================================================*/

const meter = document.querySelector(".meter-fill");

let love = 85;

setInterval(()=>{

    love++;

    if(love>100){

        love=85;

    }

    if(meter){

        meter.style.width = love+"%";

    }

},120);
/*==================================================
    LOVE QUOTES
==================================================*/

const loveQuotes=[

"Every day with you is my favorite day. ❤️",

"You are my safest place. 💜",

"I still fall in love with you every single day. 💕",

"Thank you for choosing me. ❤️",

"You are my favorite notification. 📱❤️",

"My forever starts with you. 💖",

"No matter what happens, I'll always choose you. 💜"

];

function loadDailyQuote(){

    const quote=document.getElementById("daily-quote");

    if(!quote) return;

    const day=new Date().getDate();

    quote.innerHTML=
    loveQuotes[day % loveQuotes.length];

}

loadDailyQuote();
/*==================================================
    RANDOM MEMORY
==================================================*/

const memories=[

"Our first long conversation ❤️",

"Our first date 💕",

"Our movie night 🍿",

"Our first selfie 📸",

"Our first gift 🎁",

"Our first monthsary 💜"

];

function randomMemory(){

    const box=document.getElementById("memory-text");

    if(!box) return;

    box.innerHTML=
    memories[Math.floor(Math.random()*memories.length)];

}

randomMemory();

setInterval(randomMemory,10000);
/*==================================================
    MEETSARY COUNTDOWN
==================================================*/

const meetDay = 5;

function updateCountdown(){

    const timer =
    document.getElementById("meetsary-timer");

    const number =
    document.getElementById("meetsary-number");

    if(!timer || !number)
        return;

    const now = new Date();

    let year = now.getFullYear();

    let month = now.getMonth();

    if(now.getDate()>=meetDay){

        month++;

        if(month>11){

            month=0;
            year++;

        }

    }

    const next =
    new Date(year,month,meetDay);

    const diff =
    next-now;

    const days =
    Math.floor(diff/1000/60/60/24);

    const hours =
    Math.floor(diff/1000/60/60)%24;

    const minutes =
    Math.floor(diff/1000/60)%60;

    const seconds =
    Math.floor(diff/1000)%60;

    timer.innerHTML=
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const start =
    new Date(2026,2,5);

    let months =
    (now.getFullYear()-start.getFullYear())*12+
    (now.getMonth()-start.getMonth());

    if(now.getDate()<meetDay){

        months--;

    }

    number.innerHTML=
    `${months+1}<sup>th</sup> Meetsary`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==================================================
    MONTHSARY COUNTDOWN
==================================================*/

const monthsaryDay = 26;

// First monthsary: July 26, 2026
const monthsaryStart = new Date(2026, 6, 26);

function updateMonthsaryCountdown(){

    const timer =
    document.getElementById("monthsary-timer");

    const number =
    document.getElementById("monthsary-number");

    if(!timer || !number)
        return;

    const now = new Date();

    let year = now.getFullYear();

    let month = now.getMonth();

    // Get next monthsary date
    if(now.getDate() >= monthsaryDay){

        month++;

        if(month > 11){

            month = 0;
            year++;

        }

    }

    const next =
    new Date(year, month, monthsaryDay);

    const diff =
    next - now;

    const days =
    Math.floor(diff / 1000 / 60 / 60 / 24);

    const hours =
    Math.floor(diff / 1000 / 60 / 60) % 24;

    const minutes =
    Math.floor(diff / 1000 / 60) % 60;

    const seconds =
    Math.floor(diff / 1000) % 60;

    timer.innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Calculate monthsary number
    let months =
    (now.getFullYear() - monthsaryStart.getFullYear()) * 12 +
    (now.getMonth() - monthsaryStart.getMonth());

    if(now.getDate() < monthsaryDay){

        months--;

    }

    const monthsaryNumber = Math.max(1, months + 1);

    number.innerHTML =
    `${getOrdinal(monthsaryNumber)} Monthsary`;

}

// Convert number to ordinal (1st, 2nd, 3rd...)
function getOrdinal(n){

    if(n % 100 >= 11 && n % 100 <= 13){

        return n + "th";

    }

    switch(n % 10){

        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
        default: return n + "th";

    }

}

updateMonthsaryCountdown();

setInterval(updateMonthsaryCountdown,1000);

/*==================================================
    Romantic Dashboard Extras
==================================================*/


/*==================================================
    GALLERY LIGHTBOX
==================================================*/

const galleryImages = document.querySelectorAll(".gallery img");

if(galleryImages.length > 0){

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImage">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
    document.getElementById("lightboxImage");

    galleryImages.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.style.display="flex";

            lightboxImage.src=img.src;

        });

    });

    document.getElementById("closeLightbox")
    .onclick=function(){

        lightbox.style.display="none";

    };

    lightbox.onclick=function(e){

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    };

}

/*==================================================
    MUSIC PLAYER
==================================================*/

const bgMusic=document.getElementById("bgMusic");

const playBtn=document.getElementById("playMusic");

if(playBtn && music){

    playBtn.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            playBtn.innerHTML="⏸ Pause";

        }else{

            music.pause();

            playBtn.innerHTML="▶ Play";

        }

    });

}

/*==================================================
    TYPING EFFECT
==================================================*/

const typing=document.getElementById("typing-message");

if(typing){

const message=

`Hi love ❤️

Thank you for every smile,
every laugh,
every hug,
and every memory.

I love you endlessly.

Forever yours,
Errol 💜`;

let index=0;

function typeWriter(){

    if(index<message.length){

        typing.innerHTML+=message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

typeWriter();

}

/*==================================================
    WELCOME MESSAGE
==================================================*/

const welcome=document.getElementById("welcome");

if(welcome){

const hour=new Date().getHours();

let greet="";

if(hour<12){

greet="Good Morning";

}else if(hour<18){

greet="Good Afternoon";

}else{

greet="Good Evening";

}

welcome.innerHTML=
`${greet}, Heidi ❤️`;

}

/*==================================================
    SECRET SURPRISE
==================================================*/

let clickCount=0;

const secret=document.getElementById("secret-heart");

if(secret){

secret.addEventListener("click",()=>{

clickCount++;

if(clickCount>=10){

alert("🎉 Secret Unlocked!\n\nI Love You Forever ❤️");

clickCount=0;

}

});

}

/*==================================================
    CARD ANIMATION
==================================================*/

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});

/*==================================================
    RANDOM BACKGROUND
==================================================*/

const gradients=[

"linear-gradient(135deg,#FFF0F5,#F4E9FF)",

"linear-gradient(135deg,#FFE8F2,#FFF7FC)",

"linear-gradient(135deg,#FFF8F8,#F2ECFF)",

"linear-gradient(135deg,#FFF0FA,#F4EEFF)"

];

document.body.style.background=

gradients[Math.floor(Math.random()*gradients.length)];

/*=========================================
        MUSIC PLAYER
=========================================*/

const music = document.getElementById("musicPlayer");
const play = document.getElementById("playPause");
const progress = document.getElementById("progressBar");

if (music && play && progress) {

    play.onclick = () => {

        if (music.paused) {

            music.play();
            play.innerHTML = "⏸";

        } else {

            music.pause();
            play.innerHTML = "▶";

        }

    };

    music.ontimeupdate = () => {

        if (music.duration) {

            const percent =
                (music.currentTime / music.duration) * 100;

            progress.style.width = percent + "%";

        }

    };

}

/*==================================================
        DASHBOARD MUSIC PLAYER
==================================================*/

const dashboardAudio =
document.getElementById("dashboardAudio");

const dashboardCover =
document.getElementById("dashboardCover");

const dashboardTitle =
document.getElementById("dashboardTitle");

const dashboardArtist =
document.getElementById("dashboardArtist");

const dashboardPlay =
document.getElementById("dashboardPlay");

const dashboardNext =
document.getElementById("dashboardNext");

const dashboardPrev =
document.getElementById("dashboardPrev");

let dashboardSong = 0;

if(
dashboardAudio &&
dashboardCover &&
dashboardTitle &&
dashboardArtist
){

function loadDashboardSong(){

const song = playlist[dashboardSong];

dashboardAudio.src = song.file;

dashboardCover.src = song.cover;

dashboardTitle.innerHTML = song.title;

dashboardArtist.innerHTML = song.artist;

}

loadDashboardSong();

dashboardPlay.onclick=()=>{

if(dashboardAudio.paused){

dashboardAudio.play();

dashboardPlay.innerHTML="⏸";

}else{

dashboardAudio.pause();

dashboardPlay.innerHTML="▶";

}

};

dashboardNext.onclick=()=>{

dashboardSong++;

if(dashboardSong>=playlist.length){

dashboardSong=0;

}

loadDashboardSong();

dashboardAudio.play();

dashboardPlay.innerHTML="⏸";

};

dashboardPrev.onclick=()=>{

dashboardSong--;

if(dashboardSong<0){

dashboardSong=playlist.length-1;

}

loadDashboardSong();

dashboardAudio.play();

dashboardPlay.innerHTML="⏸";

};

dashboardAudio.onended=()=>{

dashboardNext.click();

};

}


/*==================================================
    END
==================================================*/

console.log("❤️ For Heidi Loaded Successfully ❤️");

