//imports de componentes
import { Person } from "./components/player.js";
import { Weapon } from "./components/weapon.js";

//imports de funções
import { randomMath } from "./functions/randomMath.js";

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

// "Inicia o jogo"
startBtn.addEventListener('click', () => {
    gameStarted = true;
    gameContainer.style.visibility = 'visible'
    startBtnContainer.style.visibility = 'hidden'

    while (gameStarted) {
        randomMath();

        if (player1.health >= 0 || player2.health >= 0) {
            gameStarted = !gameStarted;
        }
    }
})

