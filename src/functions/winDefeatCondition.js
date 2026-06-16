//Define quem venceu, segue a mesma lógica
let playerVictorious = null;

//Captura de valores através de DOM
const player1Skin = document.getElementsByClassName('player')[0];
const player2Skin = document.getElementsByClassName('player')[1];

const ending = document.getElementById('endingContainer');
const winMessage = document.getElementById('winMessage');
const victoryText = document.getElementById('victoryText');
winMessage.style.visibility = 'hidden';

const timerContainer = document.getElementById('nowTimeStyle');

//Captura da barra de vida dos jogadores (progress)
const player1Health = document.getElementById('player1Health');
const player2Health = document.getElementById("player2Health");

//Recebimento de variáveis externas
const player1NameValue = sessionStorage.getItem('player1name');
const player2NameValue = sessionStorage.getItem('player2name');

//Define o estado de morte através do life do player
export function deathDefinition() {
    if (player1Health.value <= 0) {
        playerVictorious = false;
        sessionStorage.setItem('playerVictorious', playerVictorious)
        
        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`

        switch (player1NameValue) {
            case 'Blormall':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv1.png`;
                break;
            case 'Cröwboy':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv2.png`;
                break;
            case 'Bread Burst':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshideathv3.png`;
                break;
        }
    } else if (player2Health.value <= 0) {
        playerVictorious = true;
        sessionStorage.setItem('playerVictorious', playerVictorious)

        player1Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        player2Skin.style.filter = `drop-shadow(0px 0px 0px green)`
        
        switch (player2NameValue) {
            case 'Blormall':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv1.png`;
                break;
            case 'Cröwboy':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv2.png`;
                break;
            case 'Bread Burst':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshideathv3.png`;
                break;
        }
    }
}

//Define o bool do vitorioso através do derrotado
export function victoryCase() {
    if (playerVictorious == true) {
        switch(player1NameValue) {
            case 'Blormall':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv1.png`;
                break;
            case 'Cröwboy':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv2.png`;
                break;
            case 'Bread Burst':
                player1Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv3.png`;
                break;
        }
        endingContainer.style.visibility = `hidden`;
        timerContainer.style.visibility = `hidden`;
        winMessage.style.visibility = `visible`;
        victoryText.src = `/public/imgs/deco/winStatep1.png`

        victoryText.addEventListener('click', () => {
        playerVictorious = null
        sessionStorage.setItem('playerVictorious', playerVictorious)
        window.location.href = `/public/CharacterSelection/chrSelection.html`;
    })
    } else if (playerVictorious == false) {
        switch(player2NameValue) {
            case 'Blormall':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv1.png`;
                break;
            case 'Cröwboy':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv2.png`;
                break;
            case 'Bread Burst':
                player2Skin.src = `/public/imgs/aliensSkins/aliensnshivictoryv3.png`;
                break;
        }    
        endingContainer.style.visibility = `hidden`;
        timerContainer.style.visibility = `hidden`;
        winMessage.style.visibility = `visible`;
        victoryText.src = `/public/imgs/deco/winStatep2.png` 

        victoryText.addEventListener('click', () => {
        playerVictorious = null
        sessionStorage.setItem('playerVictorious', playerVictorious)
        window.location.href = `/public/CharacterSelection/chrSelection.html`;
    }) 
    }
}