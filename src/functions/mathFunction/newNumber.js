import { checkDificultyDamage } from "../damageFunction/damageDiffValue.js";

export class NewNumber {
    constructor(x, y, result){
        this.x = x;
        this.y = y;
        this.result = result;
    }

    //gera uma equação aleatória
    beRandom() {
        this.x = Math.floor((Math.random() * 10) + 1) * checkDificultyDamage();
        this.y = Math.floor((Math.random() * 10) + 1) * checkDificultyDamage();
        this.result = this.x * this.y;
    }
}