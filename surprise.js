/*==================================================
                ELEMENTS
==================================================*/

const giftSection = document.getElementById("giftSection");
const openWhenSection = document.getElementById("openWhenSection");

const giftBox = document.querySelector(".gift-box");

const cards = document.querySelectorAll(".open-card");

const viewer = document.getElementById("letterViewer");

const title = document.getElementById("letterTitle");

const message = document.getElementById("letterMessage");

const closeBtn = document.getElementById("closeLetter");

/*==================================================
                OPEN GIFT
==================================================*/

giftBox.addEventListener("click",()=>{

    giftBox.style.animation="none";

    giftBox.style.transform="scale(1.4)";

    setTimeout(()=>{

        giftSection.style.display="none";

        openWhenSection.style.display="block";

        createHearts();

    },700);

});

/*==================================================
                OPEN LETTER
==================================================*/

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        title.innerHTML=card.dataset.title;

        message.innerHTML=card.dataset.message;

        viewer.classList.add("show");

    });

});

/*==================================================
                CLOSE LETTER
==================================================*/

closeBtn.addEventListener("click",()=>{

    viewer.classList.remove("show");

});

/* Close when clicking outside */

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.classList.remove("show");

    }

});

/*==================================================
                FLOATING HEARTS
==================================================*/

function createHearts(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("span");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="999";

        heart.style.transition="4s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-100px";

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },4500);

    }

}