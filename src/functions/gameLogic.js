import { mainCharacterSelection } from "./mainChrSelection.js";
import { generateTime } from "./setTime.js";

//Função que prepara a partida
export function startGame() {
    generateTime();
    mainCharacterSelection();
}
