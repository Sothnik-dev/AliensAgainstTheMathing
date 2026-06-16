import { selfInflictDamage } from "./generateDamage.js";
import { checkDificulty } from "./setTimeDiffValue.js";

//Capturas DOM
const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');
const victoryText = document.getElementById('victoryText');

const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById('player2Health');

let dificultyValue = sessionStorage.getItem('diffValue');

let nowTime = checkDificulty();

checkDificulty(nowTime);

//Prepara o valor do timer
sessionStorage.setItem('timerValue', nowTime);

export function generateTime() {
    if (player1Health.value > 0 || player2Health.value > 0) {
        setInterval(() => {
            timer.innerHTML = nowTime;
            nowTime--;
            if(nowTime == -1){
                nowTime = checkDificulty();
                selfInflictDamage();
            }
        }, 1000)
    }
}

confirmBtn.addEventListener('click', () => {
    nowTime = checkDificulty();
})