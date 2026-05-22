export class NewNumber {
    constructor(x, y, result){
        this.x = x;
        this.y = y;
        this.result = result;
    }

    beRandom() {
        this.x = Math.floor(Math.random() * 10) + 1;
        this.y = Math.floor(Math.random() * 10) + 1;
        this.result = this.x * this.y;
    }
}