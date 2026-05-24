class Character {
    constructor(name, imgValue, idValue){
        this.name = name;
        this.imgValue = imgValue;
        this.idValue - idValue;
    }
}

let selection1Value = 1;
let selection2Value = 1;

const player1Skin = document.getElementsByClassName('player')[0]; 
const player2Skin = document.getElementsByClassName('player')[1];

const valueBtn1 = document.getElementsByClassName('changeBtn')[0];
const valueBtn2 = document.getElementsByClassName('changeBtn')[1];
const valueBtn3 = document.getElementsByClassName('changeBtn')[2];
const valueBtn4 = document.getElementsByClassName('changeBtn')[3];
const startBtn = document.getElementById('startBtn').addEventListener('click', () => {
    window.location.href = `../index.html`;
});

player1Skin.innerHTML = 'olá';
player2Skin.innerHTML = 'olá';

playerSelection = (x) => {
    if(x = 1){
        switch (selection1Value){
            case 1:
                player1Skin.innerHTML = 'olá'
                break;
            case 2:
                player1Skin.innerHTML = 'oi'
                break;
            case 3:
                player1Skin.innerHTML = 'iae'
                break
            default:
                player1Skin.innerHTML = 'algo deu terrivelmente errado'
                break;   
        }
    }

    if (x = 2){
        switch (selection2Value){
            case 1:
                player2Skin.innerHTML = 'olá'
                break;
            case 2:
                player2Skin.innerHTML = 'oi'
                break;
            case 3:
                player2Skin.innerHTML = 'iae'
                break
            default:
                player2Skin.innerHTML = 'algo deu terrivelmente errado'
                break;   
        }
    }
}

negValue = (x, y) => {
    if (x == 1){
        if (selection1Value <= 1){
        selection1Value = 3;
        } else {
            selection1Value--;
        }
    } else if (x == 2){
        if (selection2Value <= 1){
        selection2Value = 3;
        } else {
            selection2Value--;
        }
    } else {
        alert('algo deu terrivelmente errado!');
        selection1Value = 4;
    }

    playerSelection(y);
}

posValue = (x, y) => {
    if (x == 1){
        if (selection1Value >= 3){
            selection1Value = 1;
        } else {
            selection1Value++;
        }
    } else if (x == 2) {
        if (selection2Value >= 3){
            selection2Value = 1;
        } else {
            selection2Value++;
        }
    } else {
        alert('algo deu terrivelmente errado!');
        selection2Value = 4;
    }

    playerSelection(y);
}

valueBtn1.addEventListener('click', () => {
    negValue(1, 1);
});
valueBtn2.addEventListener('click', () => {
    posValue(1, 2);
});
valueBtn3.addEventListener('click', () => {
    negValue(2, 1);
});
valueBtn4.addEventListener('click', () => {
    posValue(2, 2);
});