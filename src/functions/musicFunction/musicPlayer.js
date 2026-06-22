const volumeValue = sessionStorage.getItem("volumeValue");

export function musicPlayer(domValue) {
    window.addEventListener('load', () => {
        domValue.play();
    })
}

