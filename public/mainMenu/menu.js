const menuMusic = document.getElementById('mainMenuAudio');
const audioIcon = document.getElementById('audioIcon');


//Área de testes
let diffValue = sessionStorage.getItem('diffValue')
let gayValue = sessionStorage.getItem('gayValue');

if (diffValue == ''){
    diffValue = 'Easy';
}

if (gayValue == ''){
    gayValue = 'Nah'
}

console.log(diffValue);
console.log(gayValue);

//Área de testes

let canPlay = true;

window.addEventListener('load', () => {
    if (typeof menuMusic.loop == 'boolean'){
        menuMusic.play();
        menuMusic.loop = true;
    } else {
            menuMusic.addEventListener('ended', () => {
            menuMusic.play();
        })
    }
})

audioIcon.addEventListener('click', () => {
    canPlay = !canPlay;
    audioIcon.src = (canPlay) ? `/public/imgs/AudioSettings/soundIcon.png` : `/public/imgs/AudioSettings/soundIconNo.png`

    if (canPlay){
        if (typeof menuMusic.loop == 'boolean'){
            menuMusic.play();
            menuMusic.loop = true;
        } else {
                menuMusic.addEventListener('ended', () => {
                menuMusic.play();
            })
        }
    } else {
        menuMusic.pause();
    }
})

//leva o player para a lore page
const goTo = document.getElementById('startBtn').addEventListener('click', () => {
    window.location.href = '/public/LoreZone/lorezone.html';
})

//leva o player para a página de options
const goToOpt = document.getElementById('optionsBtn').addEventListener('click', () => {
    window.location.href = `/public/optionsAndStuff/options.html`;
})