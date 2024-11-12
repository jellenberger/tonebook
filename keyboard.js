"use strict";

// https://youtu.be/vZ-3uPGclF8

const synth = new Tone.Synth().toDestination();
const keyboard = new AudioKeys();

const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", async () => {
    await Tone.start();
    console.log("audio is ready");
});

keyboard.down((key) => {
    console.log(key);
    synth.triggerAttackRelease(key.frequency, "8n");
});

