const diffValue = document.getElementById('dificultyValue');
const gayValue = document.getElementById('gayValue');

//Área de musica
const optBackgroundMusic = document.getElementById('optBackgroundMusic');
const AudioSettings = document.getElementById('audioIcon');

let canPlay = true;

window.addEventListener('load', () => {
    if (typeof optBackgroundMusic.loop == 'boolean'){
        optBackgroundMusic.play();
        optBackgroundMusic.loop = true;
    } else {
            optBackgroundMusic.addEventListener('ended', () => {
            optBackgroundMusic.play();
        })
    }
}) 

AudioSettings.addEventListener('click', () => {
    canPlay = !canPlay;
    AudioSettings.src = (canPlay) ? `/public/imgs/AudioSettings/soundIcon.png` : `/public/imgs/AudioSettings/soundIconNo.png`

    if (canPlay){
        if (typeof optBackgroundMusic.loop == 'boolean'){
            optBackgroundMusic.play();
            optBackgroundMusic.loop = true;
        } else {
                optBackgroundMusic.addEventListener('ended', () => {
                optBackgroundMusic.play();
            })
        }
    } else {
        optBackgroundMusic.pause();
    }
})

const goToMain = document.getElementById('optBtn').addEventListener('click', () => {
    sessionStorage.setItem('diffValue', diffValue.value);
    sessionStorage.setItem('gayValue', gayValue.value);
    
    window.location.href = `/public/mainMenu/menu.html`
})