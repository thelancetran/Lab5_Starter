// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const parentDOM = document.getElementById("expose");
  const audioEle = parentDOM.getElementsByClassName("hidden")[0];
  const imgElements = parentDOM.getElementsByTagName('img');
  

  const jsConfetti = new JSConfetti();

  const hornImg = imgElements[0];  // get first <img> element (horn img)
  const soundImg = imgElements[1]; // get second <img> element (volume img)
  let hornType = "";

  const selectHorn = document.getElementById("horn-select");

  selectHorn.addEventListener("change", (event) => {
    audioEle.src = 'assets/audio/' + event.target.value +'.mp3';
    hornImg.src = 'assets/images/' + event.target.value + '.svg';
    hornType = event.target.value;
  });

  const volumeCtrl = document.getElementById("volume");
  volumeCtrl.addEventListener("input", () => {
    if(volumeCtrl.value == 0) {
      soundImg.src = 'assets/icons/volume-level-0.svg';
    }
    if(volumeCtrl.value > 0 && volumeCtrl.value < 33) {
      soundImg.src = 'assets/icons/volume-level-1.svg';
    }
    if(volumeCtrl.value > 33 && volumeCtrl.value < 67) {
      soundImg.src = 'assets/icons/volume-level-2.svg';
    }
    if(volumeCtrl.value > 67) {
      soundImg.src = 'assets/icons/volume-level-3.svg';
    }
    audioEle.volume = volumeCtrl.value / 100;
  });

  const playButton = document.querySelector("button");

  playButton.addEventListener("click", () => {
    audioEle.play();
    if (hornType == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}