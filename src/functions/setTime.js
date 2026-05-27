import { NewNumber } from "./newNumber.js";

const timer = document.getElementById('nowTime');
const confirmBtn = document.getElementById('confirmBtn');

let gameNum = new NewNumber();

let nowTime = 10;

let actualRound = sessionStorage.getItem('playerRoundValue')

sessionStorage.setItem('timerValue', nowTime);

export function generateTime () {
        setInterval(() => {
        timer.innerHTML = nowTime;
        nowTime--;
        
        if(nowTime == -1){
            nowTime = 10;
            actualRound = !actualRound;

            gameNum.beRandom();

            val1.innerHTML = `${gameNum.x}`;
            val2.innerHTML = `${gameNum.y}`;

        }
    }, 1000)
}

confirmBtn.addEventListener('click', () => {
    nowTime = 10
    actualRound = !actualRound;
})

