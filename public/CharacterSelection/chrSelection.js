// Valores de seleção p1 e p2
let selection1Value = 1;
let selection2Value = 1;

//captura as skins com DOM
const player1Skin = document.getElementsByClassName('player')[0]; 
const player2Skin = document.getElementsByClassName('player')[1];

//Botões definidos para alterar os valores dos selections
const valueBtn1 = document.getElementsByClassName('changeBtn')[0];
const valueBtn2 = document.getElementsByClassName('changeBtn')[1];
const valueBtn3 = document.getElementsByClassName('changeBtn')[2];
const valueBtn4 = document.getElementsByClassName('changeBtn')[3];
const startBtn = document.getElementById('startBtn');

//valor inicial da skin base
player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;
player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;

//Área para o audio
const chrSelectionMusic = document.getElementById('chrSelectionMusic');
const soundIcon = document.getElementById('soundIcon');

let canPlay = true;

window.addEventListener('load', () => {
    if (typeof chrSelectionMusic.loop == 'boolean'){
        chrSelectionMusic.play();
        chrSelectionMusic.loop = true;
    } else {
            chrSelectionMusic.addEventListener('ended', () => {
            chrSelectionMusic.play();
        })
    }
})

soundIcon.addEventListener('click', () => {
    canPlay = !canPlay;
    soundIcon.src = (canPlay) ? `/public/imgs/AudioSettings/soundIcon.png` : `/public/imgs/AudioSettings/soundIconNo.png`

    if (canPlay){
        if (typeof chrSelectionMusic.loop == 'boolean'){
            chrSelectionMusic.play();
            chrSelectionMusic.loop = true;
        } else {
                chrSelectionMusic.addEventListener('ended', () => {
                chrSelectionMusic.play();
            })
        }
    } else {
        chrSelectionMusic.pause();
    }
})

//Switches que definem o valor da src
playerSelection = (x) => {
    if(x = 1){
        switch (selection1Value){
            case 1:
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;
                break;
            case 2:
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv2.png`;
                break;
            case 3:
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv3.png`;
                break
            default:
                player1Skin.innerHTML = 'algo deu terrivelmente errado'
                break;   
        }
    }

    if (x = 2){
        switch (selection2Value){
            case 1:
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;
                break;
            case 2:
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv2.png`;
                break;
            case 3:
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv3.png`;
                break
            default:
                player2Skin.innerHTML = 'algo deu terrivelmente errado'
                break;   
        }
    }
}

// Diminui o valor do selection pro player1 e player2
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

// Aumenta o valor do selection pro player1 e player 2
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

//Event listeners nos botões chamando as funções definidas acima
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

//SessionStorage para utilizar os dados em outro
startBtn.addEventListener('click', () => {
    switch(selection1Value){
        case 1:
            sessionStorage.setItem('player1name', 'Blormall');
            break;
        case 2:
            sessionStorage.setItem('player1name', 'Cröwboy');
            break;
        case 3:
            sessionStorage.setItem('player1name', 'Bread Burst');
    }

    switch(selection2Value){
        case 1:
            sessionStorage.setItem('player2name', 'Blormall');
            break;
        case 2:
            sessionStorage.setItem('player2name', 'Cröwboy');
            break;
        case 3:
            sessionStorage.setItem('player2name', 'Bread Burst');
    }

    window.location.href = '/public/index.html'
}) 