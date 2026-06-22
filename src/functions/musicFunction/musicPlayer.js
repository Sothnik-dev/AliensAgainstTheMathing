const volumeValue = sessionStorage.getItem("volumeValue");

export function musicPlayer(domValue) {
    window.addEventListener('load', () => {
        if (typeof domValue.loop == 'boolean'){
            domValue.play();
            domValue.loop = true;
        } else {
                domValue.addEventListener('ended', () => {
                domValue.play();
            })
        }
    })
}

