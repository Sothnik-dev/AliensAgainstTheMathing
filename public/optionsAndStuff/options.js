import { musicPlayer } from "../../src/functions/musicPlayer.js";
import { checkMusicValue } from "../../src/functions/checkMusicValue.js";

const diffValue = document.getElementById('dificultyValue');
const gayValue = document.getElementById('gayValue');

//Área de musica
const optBackgroundMusic = document.getElementById('optBackgroundMusic');
const audioIcon = document.getElementById('audioIcon');

let canPlay = true;

musicPlayer(optBackgroundMusic)
checkMusicValue(audioIcon, optBackgroundMusic, canPlay)

const goToMain = document.getElementById('optBtn').addEventListener('click', () => {
    sessionStorage.setItem('diffValue', diffValue.value);
    sessionStorage.setItem('gayValue', gayValue.value);
    
    window.location.href = `/public/mainMenu/menu.html`
})