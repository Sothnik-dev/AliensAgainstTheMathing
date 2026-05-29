import { NewNumber } from "./newNumber.js";

class numsGenerators {
    constructor(f, s, r) {
        this.f = f,
        this.s = s,
        this.r = r
    }
}

let fValue = Math.floor(Math.random() * 10) + 1;
let sValue = Math.floor(Math.random() * 10) + 1;
let result = fValue * sValue;

export function newGameNum() {
    let gameNum = new NewNumber(fValue, sValue, result);
}
//função principal
export function randomMath(x, y){
    val1.innerHTML = x
    val2.innerHTML = y
}