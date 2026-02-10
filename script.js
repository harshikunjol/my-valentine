// ---------- INDEX PAGE ----------
function generateLink() {
  const from = document.getElementById("fromName")?.value.trim();
  const to = document.getElementById("toName")?.value.trim();
  const linkBox = document.getElementById("linkBox");

  if (!from || !to) {
    linkBox.innerText = "Please enter both names 💔";
    return;
  }

  const base =
    window.location.origin +
    window.location.pathname.replace("index.html", "");

  const link = `${base}ask.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

  linkBox.innerHTML = `
    <p>Share this link 💕</p>
    <a href="${link}" target="_blank">${link}</a>
  `;
}

// ---------- ASK PAGE ----------
const params = new URLSearchParams(window.location.search);
const from = params.get("from");
const to = params.get("to");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const yesBox = document.getElementById("yesBox");

if (question && from && to) {
  question.innerText = `${to}, will you be my Valentine? 💖\n– ${from}`;
}

// YES CLICK → KISSING CATS + POPPERS
if (yesBtn) {
  yesBtn.onclick = () => {
    questionBox.style.display = "none";
    yesBox.style.display = "block";
    poppers();
  };
}

// NO FLOATING (MOUSE + TOUCH)
function moveNo() {
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
}

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

// 🎉 POPPERS FUNCTION
function poppers() {
  const colors = ["#ff4d6d", "#ffd166", "#c77dff", "#4cc9f0", "#ffafcc"];

  for (let i = 0; i < 40; i++) {
    const pop = document.createElement("div");
    pop.className = "popper";

    pop.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    pop.style.left = Math.random() * 100 + "vw";
    pop.style.top = "60vh";

    pop.style.transform =
      `translate(${Math.random() * 200 - 100}px, ${Math.random() * -200}px)`;

    document.body.appendChild(pop);

    setTimeout(() => pop.remove(), 1200);
  }
}
