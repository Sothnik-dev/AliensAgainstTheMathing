const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

//Define qual player ficará com a aura verde

export function newRoundStyle(playerRound) {
    if (playerRound) {
        player1Skin.style.filter = `drop-shadow(0px 0px 5px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`
    } else {
        player2Skin.style.filter = `drop-shadow(0px 0px 5px green)`
        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
    }
}