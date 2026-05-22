//imports de componentes
import { Person } from "./components/player.js";
import { Weapon } from "./components/weapon.js";

//imports de funções
import { randomMath } from "./functions/randomMath.js";

const mainPanel = document.getElementById('mainPanel');
const gameContainer = document.getElementById('gameContainer');

const startBtn = document.getElementById('startBtn');

let gameStarted = false;
let playerRound = true;

const player1Health = document.getElementById('player1Health');

const kukriWeapon = new Weapon('Kukri', 3, 2, 10);
let player1 = new Person('Henry', 100, kukriWeapon.weaponName, kukriWeapon.damage);

randomMath();

player1.damageOutput(kukriWeapon.damage, kukriWeapon.kritzProb);