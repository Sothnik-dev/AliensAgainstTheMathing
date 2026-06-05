const menuMusic = document.getElementById('mainMenuAudio');
const audioIcon = document.getElementById('audioIcon');

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

//leva o player para a página de character selecion
const goTo = document.getElementById('startBtn').addEventListener('click', () => {
    window.location.href = '../CharacterSelection/chrSelection.html';
})