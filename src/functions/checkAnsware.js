import { Person } from "../components/player.js";
import { Weapon } from "../components/weapon.js";

import { NewNumber } from "./newNumber.js";
import { randomMath } from "./randomMath.js";

import { damageOutputAnalisy } from "./generateDamage.js";
import { selfInflictDamage } from "./generateDamage.js";
import { newRoundStyle } from "./generateDamage.js";

import { playerRound } from "./generateDamage.js";

let actualPlayerRound = sessionStorage.getItem('playerRoundValue');

//captura de valores da equação via DOM
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const answare = document.getElementById('answare');

const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

const timer = document.getElementById('nowTime');

const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

const confirmBtn = document.getElementById('confirmBtn');

export function checkAnsware() {
    confirmBtn.addEventListener('click', () => {
        damageOutputAnalisy();
                
        answare.value = null;
    })
}