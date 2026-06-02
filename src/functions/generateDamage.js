//Imports
import { Person } from "../components/player.js";
import { Weapon } from "../components/weapon.js";

import { NewNumber } from "./newNumber.js";
import { randomMath } from "./randomMath.js";

//Define de quem é a vez, true = p1 e false = p2
export let playerRound = true;

//Define quem venceu, segue a mesma lógica
let playerVictorious = undefined;

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

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

const timer = document.getElementById('nowTime');

const ending = document.getElementById('endingContainer');
const winMessage = document.getElementById('winMessage');
const victoryText = document.getElementById('victoryText');
winMessage.style.visibility = 'hidden';
 
//Algum dia eu otimizo isso
let fValue = Math.floor(Math.random() * 10) + 1;
let sValue = Math.floor(Math.random() * 10) + 1;
let result = fValue * sValue;

// Instancia um objeto
let gameNum = new NewNumber(fValue, sValue, result);

randomMath(fValue, sValue);

//Define qual player ficará com a aura verde
export function newRoundStyle() {
    if (playerRound) {
        player1Skin.style.filter = `drop-shadow(0px 0px 5px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`
    } else {
        player2Skin.style.filter = `drop-shadow(0px 0px 5px green)`
        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
    }
}

//Caso erre ou não responda, aciona essa função que dá dano no player atual
export function selfInflictDamage() {
    if (playerRound) {
        player1.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
        player1Health.value = player1.health;
    } else {
        player2.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
        player2Health.value = player2.health;
    }
}

//Define o estado de morte através do life do player
export function deathDefinition() {
    if (player1.health <= 0) {
        playerVictorious = false;
        
        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`

        switch (player1NameValue) {
            case 'Blormall':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv1.png`;
                break;
            case 'Cröwboy':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv2.png`;
                break;
            case 'Bread Burst':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv3.png`;
                break;
        }
    } else if (player2.health <= 0) {
        playerVictorious = true;

        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        
        switch (player2NameValue) {
            case 'Blormall':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv1.png`;
                break;
            case 'Cröwboy':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv2.png`;
                break;
            case 'Bread Burst':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv3.png`;
                break;
        }
    }
}

//Define o bool do vitorioso através do derrotado
export function victoryCase() {
    if (playerVictorious == true) {
        switch(player1NameValue) {
            case 'Blormall':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv1.png`;
                break;
            case 'Cröwboy':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv2.png`;
                break;
            case 'Bread Burst':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv3.png`;
                break;
        }
        endingContainer.style.visibility = `hidden`;
        timer.style.visibility = `hidden`;
        winMessage.style.visibility = `visible`;
        victoryText.src = `/public/imgs/deco/winStatep1.png`
        victoryText.addEventListener('click', () => {
            window.location.href = `/public/CharacterSelection/chrSelection.html`;
        })
    } else if (playerVictorious == false) {
        switch(player2NameValue) {
            case 'Blormall':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv1.png`;
                break;
            case 'Cröwboy':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv2.png`;
                break;
            case 'Bread Burst':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv3.png`;
                break;
        }    
        endingContainer.style.visibility = `hidden`;
        timer.style.visibility = `hidden`;
        winMessage.style.visibility = `visible`;
        victoryText.src = `/public/imgs/deco/winStatep2.png`  
        victoryText.addEventListener('click', () => {
            window.location.href = `/public/CharacterSelection/chrSelection.html`;
        })
    }
}

//Função principal
export function damageOutputAnalisy(){
    confirmBtn.addEventListener('click', () => {
        newRoundStyle(playerRound);
        deathDefinition();
        victoryCase();
    });
    
    if (answare.value == gameNum.result){
        if (playerRound){
            for (let i = 0; i < gunWeapon.attackAmount; i++){
                player2.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
            }
            player2Health.value = player2.health;
            playerRound = !playerRound;
            newRoundStyle(playerRound);

            gameNum.beRandom();
            randomMath(gameNum.x, gameNum.y);
        } else {
            for (let i = 0; i < gunWeapon.attackAmount; i++){
                player1.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
            }
            player1Health.value = player1.health;
            playerRound = !playerRound;
            newRoundStyle(playerRound);

            gameNum.beRandom();
            randomMath(gameNum.x, gameNum.y);
        } 
    } else {
        selfInflictDamage(playerRound);
        playerRound = !playerRound
        newRoundStyle(playerRound);
        gameNum.beRandom();
        randomMath(gameNum.x, gameNum.y);
    }
}