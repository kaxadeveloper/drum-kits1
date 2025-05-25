const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

const sounds = {};

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(images/${kit}.png)`;
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);

    sounds[kit.slice(0, 1)] = { audioEl, btnEl };

    btnEl.addEventListener("click", () => {
        console.log("log");
        
        audioEl.currentTime = 0; 
        audioEl.play();
        btnEl.style.transform = "scale(0.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 100);
    });
});

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (sounds[key]) {
        const { audioEl, btnEl } = sounds[key];
        audioEl.currentTime = 0;
        audioEl.play();
        btnEl.style.transform = "scale(0.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 100);
    }
});
