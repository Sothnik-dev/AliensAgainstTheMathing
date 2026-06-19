export function updateVolumeOpt(domValue, volumeValue) {
    setInterval(() => {
        domValue.volume = volumeValue.value;
    }, 1000);

    document.getElementById('optBtn').addEventListener('click', () => {
    sessionStorage.setItem('volumeValue', volumeValue.value);
})
}

export function updateVolume(domValue, volumeValue) {
    if (volumeValue == null) {
        domValue.volume = 1;
    } else {
        domValue.volume = volumeValue;
    }
}