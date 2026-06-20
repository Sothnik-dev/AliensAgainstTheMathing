import { mainCharacterSelection } from "../selectionFunction/mainChrSelection.js";
import { generateTime } from "../timeFunction/setTime.js";

//Função que prepara a partida
export function startGame() {
    generateTime();
    mainCharacterSelection();
}
