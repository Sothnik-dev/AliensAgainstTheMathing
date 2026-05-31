import { mainCharacterSelection } from "./mainChrSelection.js";
import { generateTime } from "./setTime.js";

const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

const timer = document.getElementById('nowTime');


export function startGame() {
    generateTime();
    mainCharacterSelection();
}
