const drums = document.querySelectorAll(".drum-kit__key");

const keys = {
  KeyZ: "tom1",
  KeyX: "tom2",
  KeyC: "tom3",
  KeyV: "tom4",
  KeyB: "snare",
  KeyN: "crash",
  KeyM: "kick",
};

drums.forEach((drum) =>
  drum.addEventListener("click", () => {
    const audio = new Audio(`./assets/sounds/${drum.attributes.id.value}.mp3`);
    audio.play();
    drum.classList.remove("clicked-key");
  })
);

drums.forEach((drum) =>
  drum.addEventListener("mousedown", () => {
    drum.classList.add("clicked-key");
  })
);

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyZ":
      const tom1Audio = new Audio(`./assets/sounds/${keys["KeyZ"]}.mp3`);
      tom1Audio.play();
      drums[0].classList.add("clicked-key");
      break;
    case "KeyX":
      const tom2Audio = new Audio(`./assets/sounds/${keys["KeyX"]}.mp3`);
      tom2Audio.play();
      drums[1].classList.add("clicked-key");
      break;
    case "KeyC":
      const tom3Audio = new Audio(`./assets/sounds/${keys["KeyC"]}.mp3`);
      tom3Audio.play();
      drums[2].classList.add("clicked-key");
      break;
    case "KeyV":
      const tom4Audio = new Audio(`./assets/sounds/${keys["KeyV"]}.mp3`);
      tom4Audio.play();
      drums[3].classList.add("clicked-key");
      break;
    case "KeyB":
      const snareAudio = new Audio(`./assets/sounds/${keys["KeyB"]}.mp3`);
      snareAudio.play();
      drums[4].classList.add("clicked-key");
      break;
    case "KeyN":
      const crashAudio = new Audio(`./assets/sounds/${keys["KeyN"]}.mp3`);
      crashAudio.play();
      drums[5].classList.add("clicked-key");
      break;
    case "KeyM":
      const kickAudio = new Audio(`./assets/sounds/${keys["KeyM"]}.mp3`);
      kickAudio.play();
      drums[6].classList.add("clicked-key");
      break;

    default:
      break;
  }
});

document.addEventListener("keyup", () => {
  drums.forEach((drum) => {
    drum.classList.remove("clicked-key");
  });
});
