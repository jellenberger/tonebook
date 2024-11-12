"use strict";


const synth = new Tone.Synth().toDestination();
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", async () => {
    await Tone.start();
    console.log("audio is ready");
});

document.body.onkeyup = (e) => {
    synth.triggerAttackRelease("C4", "8n");
}