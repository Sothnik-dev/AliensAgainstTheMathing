import { fastDeathSelection, fastWinnerSelection } from "../selectionFunction/fastSelection.js";

//Define quem venceu, segue a mesma lógica
let playerVictorious = null;

//Captura de valores através de DOM
const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

const ending = document.getElementById('endingContainer');
const winMessage = document.getElementById('winMessage');
const victoryText = document.getElementById('victoryText');
winMessage.style.visibility = 'hidden';

const timerContainer = document.getElementById('nowTimeStyle');

//Captura da barra de vida dos jogadores (progress)
const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

const deathAura = () => {
    player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
    player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`
}

const winTemplate = () => {
        endingContainer.style.visibility = `hidden`;
        timerContainer.style.visibility = `hidden`;
        winMessage.style.visibility = `visible`;
}

//Define o estado de morte através do life do player
export function deathDefinition() {
    if (player1Health.value <= 0) {
        playerVictorious = false;
        sessionStorage.setItem('playerVictorious', playerVictorious)
        deathAura();

        fastDeathSelection(player1NameValue, player1Skin);

    } else if (player2Health.value <= 0) {
        playerVictorious = true;
        sessionStorage.setItem('playerVictorious', playerVictorious)
        deathAura();
        
        fastDeathSelection(player2NameValue, player2Skin);

    }
}

//Define o bool do vitorioso através do derrotado
export function victoryCase() {
    if (playerVictorious == true) {
        fastWinnerSelection(player1NameValue, player1Skin);
        winTemplate();
        victoryText.src = `../../public/imgs/deco/winStatep1.png`
    } else if (playerVictorious == false) {
        fastWinnerSelection(player2NameValue, player2Skin);
        winTemplate();
        victoryText.src = `../../public/imgs/deco/winStatep2.png` 
    }

    victoryText.addEventListener('click', () => {
        playerVictorious = null
        sessionStorage.setItem('playerVictorious', playerVictorious)
        window.location.href = `../../public/CharacterSelection/chrSelection.html`;
    }) 
}