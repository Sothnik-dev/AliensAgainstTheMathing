export function checkMusicValue(domValueBtn, domValue, canPlay) {
    domValueBtn.addEventListener('click', () => {
    canPlay = !canPlay;
    domValueBtn.src = (canPlay) ? `/public/imgs/AudioSettings/soundIcon.png` : `/public/imgs/AudioSettings/soundIconNo.png`

    if (canPlay){
        if (typeof domValue.loop == 'boolean'){
            domValue.play();
            domValue.loop = true;
        } else {
                domValue.addEventListener('ended', () => {
                domValue.play();
            })
        }
    } else {
        domValue.pause();
    }
})
}