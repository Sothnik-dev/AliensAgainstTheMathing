import { fastChrSelection } from "./fastSelection.js";

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

//captura do valor do nome dos players DOM
const player1NameDOM = document.getElementById('player1NameDOM');
const player2NameDOM = document.getElementById('player2NameDOM');

//Captura de valores através de DOM
const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

//Padronização de skin
player1Skin.src = `././public/imgs/aliensSkins/aliensnshiv1.png`
player2Skin.src = `././public/imgs/aliensSkins/aliensnshiv1.png`

//A partir de switches, define a skin do player
export function mainCharacterSelection() {
    fastChrSelection(player1NameValue, player1Skin, "player1Skin");
    fastChrSelection(player2NameValue, player2Skin, "player2Skin");

    player1NameDOM.innerHTML = player1NameValue;
    player2NameDOM.innerHTML = player2NameValue;
}
