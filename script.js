
const textArray = ["Web Developer", "Creative Coder", "UI / UX Designer"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}


function blinkCursor() {
  cursor.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
  setInterval(blinkCursor, 500); // blinking effect
});


function openModal(title, body) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = body;
}

document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};


const modeToggle = document.getElementById("modeToggle");
if (modeToggle) {
  modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("alt-accent", modeToggle.checked);
  });
}


const contactModal = document.getElementById("contactModal");
const openBtn = document.getElementById("openContactBtn");
const closeBtn = document.getElementById("closeModal");

if (openBtn && contactModal && closeBtn) {
  openBtn.onclick = () => (contactModal.style.display = "flex");
  closeBtn.onclick = () => (contactModal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === contactModal) contactModal.style.display = "none";
  };
}
