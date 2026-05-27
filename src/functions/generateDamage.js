import { Person } from "../components/player.js";
import { Weapon } from "../components/weapon.js";

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

const gunWeapon = new Weapon('Gun', 3, 2, 10);
let player1 = new Person(player1NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);
let player2 = new Person(player2NameValue, 100, gunWeapon.weaponName, gunWeapon.damage);

let actualRound = sessionStorage.getItem('playerRoundValue');

//Captura da barra de vida dos jogadores (progress)
const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

//Atenção nisso aqui Enzo, implemente depois
const timer = document.getElementById('nowTime');

export function damageOutputAnalisy(){
    if (actualRound){
        for (let i = 0; i < gunWeapon.attackAmount; i++){
            player2.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
        }
        player2Health.value = player2.health;
        actualRound = !actualRound;
    } else {
        for (let i = 0; i < gunWeapon.attackAmount; i++){
            player1.damageOutput(gunWeapon.damage, gunWeapon.kritzProb);
        }
        player1Health.value = player1.health;
        actualRound = !actualRound;
    }
        
}
