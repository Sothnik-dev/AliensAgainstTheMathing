let actualPlayerRound = sessionStorage.getItem('playerRoundValue');

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

//captura do valor do nome dos players DOM
const player1NameDOM = document.getElementById('player1NameDOM');
const player2NameDOM = document.getElementById('player2NameDOM');

//Captura de valores através de DOM
const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

//Padronização de skin
player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`
player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`

export function mainCharacterSelection() {
    //switch para src do player
switch(player1NameValue){
    case 'Blormall':
        player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;
        break;
    case 'Cröwboy':
        player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv2.png`;
        break;
    case 'Bread Burst':
        player1Skin.src = `/public/imgs/aliensSkins/aliensnshiv3.png`;
        break;
}

switch(player2NameValue){
    case 'Blormall':
        player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv1.png`;
        break;
    case 'Cröwboy':
        player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv2.png`;
        break;
    case 'Bread Burst':
        player2Skin.src = `/public/imgs/aliensSkins/aliensnshiv3.png`;
        break;
}

player1NameDOM.innerHTML = player1NameValue;
player2NameDOM.innerHTML = player2NameValue;
}
