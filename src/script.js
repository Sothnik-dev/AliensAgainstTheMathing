import { startGame } from "./functions/gameLogic.js";
import { checkAnsware } from "./functions/checkAnsware.js";

// Conteiners capturado por DOM
const mainPanel = document.getElementById('mainPanel');
const gameContainer = document.getElementById('gameContainer');
const startBtnContainer = document.getElementById('startBtnContainer');

// Botões de começar e confirmar
const startBtn = document.getElementById('startBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Pra definir se começou ou não o jogo
let gameStarted = false;

gameContainer.style.visibility = (gameStarted) ? 'visible' : 'hidden';

let player1Health = sessionStorage.getItem('player1HealthValue');
let player2Health = sessionStorage.getItem('player2HealthValue');

const player1Skin = document.getElementsByClassName('player')[0];

// "Inicia o jogo"
startBtn.addEventListener('click', () => {
    gameStarted = true;
    gameContainer.style.visibility = 'visible'
    startBtnContainer.style.visibility = 'hidden'

    player1Skin.style.filter = `drop-shadow(0px 0px 15px green)`

    checkAnsware();

    while (gameStarted) {
        if (player1Health >= 0 || player1Health >= 0) {
            startGame();
            gameStarted = !gameStarted;
        }
    }
})