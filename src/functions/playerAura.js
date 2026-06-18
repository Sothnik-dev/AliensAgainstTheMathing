const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

//Define qual player ficará com a aura verde
const innerValues = (fSkin, sSkin) => {
    fSkin.style.filter = `drop-shadow(0px 0px 5px green)`
    sSkin.style.filter = `drop-shadow(0px 0px 0px green)`
}

export function newRoundStyle(playerRound) {
    if (playerRound) {
        innerValues(player1Skin, player2Skin);
    } else {
        innerValues(player2Skin, player1Skin);
    }
}