// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const inputTxt = document.querySelector("textarea");
  const playButton = document.querySelector("button");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const smileImg = document.querySelector("img");

  playButton.addEventListener("click", (event) => {
    event.preventDefault();

    const sayThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        sayThis.voice = voices[i];
      }
    }
    synth.speak(sayThis);  
    sayThis.onstart = function() {
      smileImg.src = "assets/images/smiling-open.png";
    }
    sayThis.onend = function() {
      smileImg.src = "assets/images/smiling.png";
    }
    inputTxt.blur();
  });
}