import { Person } from "../components/player.js";
import { Weapon } from "../components/weapon.js";

import { NewNumber } from "./newNumber.js";
import { randomMath } from "./randomMath.js";

import { generateTime } from "./setTime.js";
import { damageOutputAnalisy } from "./generateDamage.js";
import { selfInflictDamage } from "./generateDamage.js";

//captura de valores da equação via DOM
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const answare = document.getElementById('answare');

const confirmBtn = document.getElementById('confirmBtn');

//instanciação dos valores para variáveis
let fValue = Math.floor(Math.random() * 10) + 1;
let sValue = Math.floor(Math.random() * 10) + 1;
let result = fValue * sValue;

let gameNum = new NewNumber(fValue, sValue, result);

randomMath(fValue, sValue);

export function checkAnsware() {
    confirmBtn.addEventListener('click', () => {
        if (answare.value == gameNum.result) {
            damageOutputAnalisy();
            console.log('Acertou');
            gameNum.beRandom();
            randomMath(gameNum.x, gameNum.y);
        } else {
            console.log("Errou!");
            selfInflictDamage();
            gameNum.beRandom();
            randomMath(gameNum.x, gameNum.y);
        }
        answare.value = null;
    })
}