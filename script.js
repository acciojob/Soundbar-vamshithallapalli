const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let currentAudio = null;

// Play sound when clicking a button
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    playSound(btn.textContent);
  });
});

function playSound(name) {
  stopSound();
  currentAudio = new Audio(`sounds/${name}.mp3`);
  currentAudio.play();
}

// Stop button
document.querySelector(".stop").addEventListener("click", stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
