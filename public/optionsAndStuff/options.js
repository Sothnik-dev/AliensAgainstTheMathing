import { checkMusicValue } from "../../src/functions/musicFunction/checkMusicValue.js";
import { musicPlayer } from "../../src/functions/musicFunction/musicPlayer.js";
import { updateVolume, updateVolumeOpt } from "../../src/functions/musicFunction/volumeFunction.js";

const dificultyImg = document.getElementById('dificultyImg');

const diffValue = document.getElementById('dificultyValue');
const volumeValue = document.getElementById('rangeVolume');
const gayValue = document.getElementById('gayValue');

//Área de musica
const optBackgroundMusic = document.getElementById('optBackgroundMusic');
const audioIcon = document.getElementById('audioIcon');

let canPlay = true;

musicPlayer(optBackgroundMusic)
checkMusicValue(audioIcon, optBackgroundMusic, canPlay)
updateVolumeOpt(optBackgroundMusic, volumeValue);

diffValue.addEventListener('click', () => {
    switch (diffValue.value) {
    case 'Easy':
        dificultyImg.src = `./public/imgs/deco/btnEasy.png`
        break;
    case 'Medium':
        dificultyImg.src = `./public/imgs/deco/btnMedium.png`
        break;
    case 'Hard':
        dificultyImg.src = `./public/imgs/deco/btnHard.png`
        break;
    case 'Hell on earth':
        dificultyImg.src = `./public/imgs/deco/btnHOE.png`
        break;
    default:
        dificultyImg.src = `./public/imgs/deco/btnMedium.png`
        break;
}
})



const goToMain = document.getElementById('optBtn').addEventListener('click', () => {
    sessionStorage.setItem('diffValue', diffValue.value);
    sessionStorage.setItem('gayValue', gayValue.value);
    
    window.location.href = `/index.html`
})

