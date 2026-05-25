//imports de componentes
import { Person } from "./components/player.js";
import { Weapon } from "./components/weapon.js";

//imports de funções
import { randomMath } from "./functions/randomMath.js";

const mainPanel = document.getElementById('mainPanel');
const gameContainer = document.getElementById('gameContainer');
const startBtnContainer = document.getElementById('startBtnContainer');

const startBtn = document.getElementById('startBtn');
const confirmBtn = document.getElementById('confirmBtn');

let gameStarted = false;

gameContainer.style.visibility = (gameStarted) ? 'visible' : 'hidden';

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

