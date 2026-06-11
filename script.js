// ===== Interactive Buttons =====

const noBtn = document.getElementById("no");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "%";
    noBtn.style.top = y + "%";
  });
}

const yesBtn = document.getElementById("yes");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");

      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.top = "0px";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.borderRadius = "50%";
      confetti.style.backgroundColor =
        `hsl(${Math.random() * 360}, 100%, 50%)`;

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 2000);
    }

    alert("I love you too! 🥰");
  });
}

// ===== MEET-SARY SETTINGS =====

// First meet-sary: March 5, 2026
const meetsaryStart = new Date(2026, 2, 5); // March = 2
const MEET_DAY = 5;

// Get next monthly meet-sary (5th every month)
function getNextMeetDate() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();

  if (now.getDate() >= MEET_DAY) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  return new Date(year, month, MEET_DAY, 0, 0, 0);
}

// SIMPLE FIX: correct month counting from start date
function getMeetNumber(startDate, currentDate) {
  let months =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  // only count if we passed the 5th of the month
  if (currentDate.getDate() < MEET_DAY) {
    months--;
  }

  return Math.max(1, months + 1);
}

// ordinal (1st, 2nd, 3rd, 4th...)
function getOrdinal(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return n + "th";

  switch (n % 10) {
    case 1: return n + "st";
    case 2: return n + "nd";
    case 3: return n + "rd";
    default: return n + "th";
  }
}

// UPDATE UI
function updateCountdown() {
  const timerEl = document.getElementById("meetsary-timer");
  const numberEl = document.getElementById("meetsary-number");

  if (!timerEl || !numberEl) return;

  const now = new Date();
  const next = getNextMeetDate();

  const diff = next - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const meetNumber = getMeetNumber(meetsaryStart, now);

  timerEl.innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  numberEl.innerText = getOrdinal(meetNumber);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== TIMELINE =====

const timeline = document.querySelector(".timeline");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

if (timeline && scrollLeftBtn && scrollRightBtn) {

  scrollLeftBtn.addEventListener("click", () => {
    timeline.scrollBy({ left: -250, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    timeline.scrollBy({ left: 250, behavior: "smooth" });
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  timeline.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });

  timeline.addEventListener("mouseleave", () => isDown = false);
  timeline.addEventListener("mouseup", () => isDown = false);

  timeline.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX) * 2;
    timeline.scrollLeft = scrollLeft - walk;
  });
}