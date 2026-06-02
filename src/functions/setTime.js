import { selfInflictDamage } from "./generateDamage.js";

//Capturas DOM
const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');

let nowTime = 10;

//Prepara o valor do timer
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