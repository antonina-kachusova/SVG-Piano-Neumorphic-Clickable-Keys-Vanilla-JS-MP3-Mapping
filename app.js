const whiteKeys = [...document.querySelectorAll("path.white-keys")];
const blackKeys = [...document.querySelectorAll("path.black-keys")];
const keys = [...whiteKeys, ...blackKeys];

let audio;
const playSound = (keyPlayNow) => {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(`./audio/key-${keyPlayNow}.mp3`);
  audio.play();
};

keys.forEach((key, i) => {
  key.dataset.index = i + 1;
  key.addEventListener("click", (e) => {
    const el = e.target;
    playSound(el.dataset.index);

    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 100);
  });
});
