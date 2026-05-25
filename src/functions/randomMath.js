import { Person } from "../components/player.js";
import { Weapon } from "../components/weapon.js";
import { NewNumber } from "./newNumber.js";

const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const answare = document.getElementById('answare');

const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

const confirmBtn = document.getElementById('confirmBtn');

const timer = document.getElementById('nowTime');
let theNow = 10;

let playerRound = true;

const gunWeapon = new Weapon('Gun', 3, 2, 10);
let player1 = new Person(player1NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);
let player2 = new Person(player2NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);

let fValue = Math.floor(Math.random() * 10) + 1;
let sValue = Math.floor(Math.random() * 10) + 1;
let result = fValue * sValue;

switch(player1NameValue){
    case 'Blormall':
        player1Skin.src = `./imgs/aliensnshiv1.png`;
        break;
    case 'Cröwboy':
        player1Skin.src = `./imgs/aliensnshiv2.png`;
        break;
    case 'Bread Burst':
        player1Skin.src = `./imgs/aliensnshiv3.png`;
        break;
}

switch(player2NameValue){
    case 'Blormall':
        player2Skin.src = `./imgs/aliensnshiv1.png`;
        break;
    case 'Cröwboy':
        player2Skin.src = `./imgs/aliensnshiv2.png`;
        break;
    case 'Bread Burst':
        player2Skin.src = `./imgs/aliensnshiv3.png`;
        break;
}

export function randomMath(){
    let gameNum = new NewNumber(fValue, sValue, result);
    console.log(gameNum);
    val1.innerHTML = `${gameNum.x}`;
    val2.innerHTML = `${gameNum.y}`;

    setInterval(() => {
        timer.innerHTML = theNow;
        theNow--

        if(theNow == -1){
            theNow = 10;
            playerRound = !playerRound;
            gameNum.beRandom();

            val1.innerHTML = `${gameNum.x}`;
            val2.innerHTML = `${gameNum.y}`;
        }
    }, 1000)

    confirmBtn.addEventListener('click', () => {
        if (answare.value == gameNum.result) {
            if (playerRound){
                player2.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
                player2Health.value = player2.health;
                console.log(`${player2.name} está com ${player2.health}`);
            } else {
                player1.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
                player1Health.value = player1.health;
                console.log(`${player1.name} está com ${player1.health}`);
            }
            console.log('Acertou');
            playerRound = !playerRound;

            gameNum.beRandom();

            val1.innerHTML = `${gameNum.x}`;
            val2.innerHTML = `${gameNum.y}`;
            theNow = 10;
        } else {
            theNow = 10;
            playerRound = !playerRound;
            console.log("Errou!");

            gameNum.beRandom();

            val1.innerHTML = `${gameNum.x}`;
            val2.innerHTML = `${gameNum.y}`;
        }
        answare.value = null;
    })
}