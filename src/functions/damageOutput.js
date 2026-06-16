import { victoryCase } from "./winDefeatCondition.js";

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

setTimeout(() => {
    console.log(playerVictorious);
})

export function damageOutputVisual(round) {
    if (round) {
        if (player2Health.value > 0){
            switch(player2NameValue) {
                case 'Blormall': 
                    player2Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv1.png`
                    break;
                case 'Cröwboy':
                    player2Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv2.png`
                    break;
                case 'Bread Burst':
                    player2Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv3.png`
                    break;
            }
            setTimeout(() => {
                if (player2Health.value > 0) {
                    player2Skin.src = p2PlayerRewind;
                } 
            }, 750)
        }
    } else {
        if (player1Health.value > 0) {
            switch(player1NameValue) {
                case 'Blormall': 
                    player1Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv1.png`
                    break;
                case 'Cröwboy':
                    player1Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv2.png`
                    break;
                case 'Bread Burst':
                    player1Skin.src = `./imgs/aliensSkins/aliensnshitestHurtv3.png`
                    break;
            }
            setTimeout(() => {
                player1Skin.src = p1PlayerRewind;
            }, 750)
        }
    }
}