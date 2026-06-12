import { selfInflictDamage } from "./generateDamage.js";
import { checkDificulty } from "./setTimeDiffValue.js";

//Capturas DOM
const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');

let dificultyValue = sessionStorage.getItem('diffValue');

console.log(dificultyValue);

let nowTime = checkDificulty();

checkDificulty(nowTime);

//Prepara o valor do timer
sessionStorage.setItem('timerValue', nowTime);

export function generateTime() {

    setInterval(() => {
        timer.innerHTML = nowTime;
        nowTime--;

        if(nowTime == -1){
            nowTime = checkDificulty();
            selfInflictDamage();
        }
    }, 1000)
}

confirmBtn.addEventListener('click', () => {
    nowTime = checkDificulty();
})