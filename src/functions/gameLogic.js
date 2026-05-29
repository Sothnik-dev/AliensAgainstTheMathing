import { mainCharacterSelection } from "./mainChrSelection.js";
import { generateTime } from "./setTime.js";

export function startGame() {
    generateTime();
    mainCharacterSelection();
}
