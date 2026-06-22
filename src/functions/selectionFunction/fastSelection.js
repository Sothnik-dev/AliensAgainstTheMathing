export function fastSelection(value, skinValue) {
    switch(value) {
        case 'Blormall': 
            skinValue.src = `./public/imgs/aliensSkins/aliensnshitestHurtv1.png`
            break;
        case 'Cröwboy':
            skinValue.src = `./public/imgs/aliensSkins/aliensnshitestHurtv2.png`
            break;
        case 'Bread Burst':
            skinValue.src = `./public/imgs/aliensSkins/aliensnshitestHurtv3.png`
            break;
    }
}

export function fastChrSelection(nameValue, skinValue, textValue) {
    switch(nameValue){
        case 'Blormall':
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv1.png`;
            sessionStorage.setItem(`${textValue}`, './public/imgs/aliensSkins/aliensnshiv1.png');
            break;
        case 'Cröwboy':
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv2.png`;
            sessionStorage.setItem(`${textValue}`, './public/imgs/aliensSkins/aliensnshiv2.png');
            break;
        case 'Bread Burst':
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv3.png`;
            sessionStorage.setItem(`${textValue}`, './public/imgs/aliensSkins/aliensnshiv3.png');
            break;
    }
}

export function fastMainChrSelection(nameValue, skinValue) {
    switch(nameValue){
        case 1:
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv1.png`;
            break;
        case 2:
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv2.png`;
            break;
        case 3:
            skinValue.src = `./public/imgs/aliensSkins/aliensnshiv3.png`;
            break;
        default:
            skinValue.innerHTML = 'algo deu terrivelmente errado'
            break; 
    }
}

export function fastDeathSelection(nameValue, playerSkin) {
    switch (nameValue) {
        case 'Blormall':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshideathv1.png`;
            break;
        case 'Cröwboy':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshideathv2.png`;
            break;
        case 'Bread Burst':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshideathv3.png`;
            break;
    }
}

export function fastWinnerSelection(nameValue, playerSkin){
    switch(nameValue) {
        case 'Blormall':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshivictoryv1.png`;
            break;
        case 'Cröwboy':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshivictoryv2.png`;
            break;
        case 'Bread Burst':
            playerSkin.src = `./public/imgs/aliensSkins/aliensnshivictoryv3.png`;
            break;
    }
}