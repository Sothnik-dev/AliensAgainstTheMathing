//Imports
import { Person } from "../../components/player.js";
import { Weapon } from "../../components/weapon.js";

import { NewNumber } from "../mathFunction/newNumber.js";
import { randomMath } from "../mathFunction/randomMath.js";

import { deathDefinition } from "../gameFunction/winDefeatCondition.js";
import { victoryCase } from "../gameFunction/winDefeatCondition.js";

import { newRoundStyle } from "../miscFunction/playerAura.js";
import { damageOutputVisual } from "./damageOutput.js";
import { checkDificultyDamage } from "./damageDiffValue.js"

//Define de quem é a vez, true = p1 e false = p2
export let playerRound = true;

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');
const diffValue = sessionStorage.getItem('diffValue')

//Instanciar os objetos
const gunWeapon = new Weapon('Gun', 3, 2, 10);
let player1 = new Person(player1NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);
let player2 = new Person(player2NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);

//Captura da barra de vida dos jogadores (progress)
const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

//Captura de valores através de DOM
const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

const confirmBtn = document.getElementById('confirmBtn');
const startBtn = document.getElementById('startBtn');
const answare = document.getElementById('answare');
 
//Algum dia eu otimizo isso, obs: ainda não otimizei obs2: e não vou otimizar kkkkkk
let fValue = Math.floor((Math.random() * 10) + 1) * checkDificultyDamage();
let sValue = Math.floor((Math.random() * 10) + 1) * checkDificultyDamage();

// Instancia um objeto
let gameNum = new NewNumber(fValue, sValue, fValue * sValue);

randomMath(fValue, sValue);

//function para facilitar o dano e logo abaixo para o selfDamage
const damageEntry = (amount, objBase, damage, kritz, playerHealth) => {
    for (let i = 0; i < amount; i++){
        objBase.damageOutput(damage, kritz);
    }
    playerHealth.value = objBase.health;
    damageOutputVisual(playerRound);
    playerRound = !playerRound;
    newRoundStyle(playerRound);
    gameNum.beRandom();
    randomMath(gameNum.x, gameNum.y);
}

const selfInflictShortCut = (player, damage, kritz, health, turn) => {
    player.damageOutput(damage, kritz);
    health.value = player.health;
    if (health.value > 0) {
        damageOutputVisual(turn);
    }
}

//Caso erre ou não responda, aciona essa função que dá dano no player atual
export function selfInflictDamage() {
    (playerRound) ? selfInflictShortCut(player1, gunWeapon.damage, gunWeapon.kritzProb, player1Health, false) : selfInflictShortCut(player2, gunWeapon.damage, gunWeapon.kritzProb, player2Health, true);
}

//Permite responder pelo enter, finalmente
answare.addEventListener('keyup', (event) => {
    if (event.key == 'Enter'){
        confirmBtn.click();
    }
})

//Função principal
export function damageOutputAnalisy(){
    confirmBtn.addEventListener('click', () => {
        newRoundStyle(playerRound);
        deathDefinition();
        victoryCase();
    });
    
    if (answare.value == gameNum.result){
        (playerRound) ? damageEntry(gunWeapon.attackAmount, player2, gunWeapon.damage, gunWeapon.kritzProb,  player2Health) : damageEntry(gunWeapon.attackAmount, player1, gunWeapon.damage, gunWeapon.kritzProb, player1Health);
    } else {
        selfInflictDamage(playerRound);
        playerRound = !playerRound
        newRoundStyle(playerRound);
        gameNum.beRandom();
        randomMath(gameNum.x, gameNum.y);
    }
}