import { checkMusicValue } from "./src/functions/musicFunction/checkMusicValue.js";
import { musicPlayer } from "./src/functions/musicFunction/musicPlayer.js";
import { updateVolume } from "./src/functions/musicFunction/volumeFunction.js";

const menuMusic = document.getElementById('mainMenuAudio');
const audioIcon = document.getElementById('audioIcon');

//Área de testes
let gayValue = sessionStorage.getItem('gayValue');

if (gayValue == ''){
    gayValue = 'Nah'
}

if (gayValue == 'Yeah') {
    if (window.innerHeight < 600 || window.innerWidth < 600) {
        document.body.style.backgroundImage = `url('./public/imgs/aliensBgCell/bgCellToAliensPride.png')`

    } else {
        document.body.style.backgroundImage = `url('./public/imgs/aliensBg/bgToAliensMenuPride.png')`
    }
}

let canPlay = true;
let musicVolume = sessionStorage.getItem("volumeValue");

musicPlayer(menuMusic);
checkMusicValue(audioIcon, menuMusic, canPlay);
updateVolume(menuMusic, musicVolume);

//leva o player para a lore page
const goTo = document.getElementById('startBtn').addEventListener('click', () => {
    window.location.href = './public/LoreZone/lorezone.html';
})

//leva o player para a página de options
const goToOpt = document.getElementById('optionsBtn').addEventListener('click', () => {
    window.location.href = `./public/optionsAndStuff/options.html`;
})

const creditsBtn = document.getElementById('creditsBtn').addEventListener('click', () => {
    window.location.href = `./public/CreditsArea/credits.html`
})