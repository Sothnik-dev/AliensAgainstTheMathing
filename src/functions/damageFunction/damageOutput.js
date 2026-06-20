import { victoryCase } from "../gameFunction/winDefeatCondition.js";
import { fastSelection } from "../selectionFunction/fastSelection.js";

const player1Skin = document.getElementsByClassName('player')[0]; 
const player2Skin = document.getElementsByClassName('player')[1];

//Captura da barra de vida dos jogadores (progress)
const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

let player1SkinValue = sessionStorage.getItem('player1SkinValue');
let player2SkinValue = sessionStorage.getItem('player2SkinValue');

let playerVictorious = sessionStorage.getItem('playerVictorious');

let p1PlayerRewind = player1SkinValue;
let p2PlayerRewind = player2SkinValue;

const timeSpam = (healthValue, skinValue, skinRewind, time) => {
    setTimeout(() => {
        if (healthValue.value > 0) {
            skinValue.src = skinRewind;
        }
    }, time)
} 

export function damageOutputVisual(round) {
    if (round) {
        if (player2Health.value > 0){
            fastSelection(player2NameValue, player2Skin);
            timeSpam(player2Health, player2Skin, p2PlayerRewind, 750);
        }
    } else {
        if (player1Health.value > 0) {
            fastSelection(player1NameValue, player1Skin);
            timeSpam(player1Health, player1Skin, p1PlayerRewind, 750);
        }
    }
}