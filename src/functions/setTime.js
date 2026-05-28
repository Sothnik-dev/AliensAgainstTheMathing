import { NewNumber } from "./newNumber.js";
import { selfInflictDamage } from "./generateDamage.js";

const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');

let playerRound = false;
sessionStorage.setItem('playerRoundValue', playerRound);

let gameNum = new NewNumber();

let nowTime = 10;

let actualRound = sessionStorage.getItem('playerRoundValue')

sessionStorage.setItem('timerValue', nowTime);

export function generateTime() {
        setInterval(() => {
        timer.innerHTML = nowTime;
        nowTime--;

        if(nowTime == -1){
            nowTime = 10;
            selfInflictDamage();
        }
    }, 1000)
}

confirmBtn.addEventListener('click', () => {
    nowTime = 10
    playerRound = !playerRound;
})