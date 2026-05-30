import { NewNumber } from "./newNumber.js";
import { selfInflictDamage } from "./generateDamage.js";

import { deathDefinition } from "./generateDamage.js";
import { victoryCase } from "./generateDamage.js";

const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');

let nowTime = 10;

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
    nowTime = 10;
})