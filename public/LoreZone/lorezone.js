const lb1 = document.getElementsByClassName('loreBlock')[0];
const lb2 = document.getElementsByClassName('loreBlock')[1];
const lb3 = document.getElementsByClassName('loreBlock')[2];
const lb4 = document.getElementsByClassName('loreBlock')[3];

const backwardsBtn = document.getElementsByClassName('fowardBtn')[0];
const fowardBtn = document.getElementsByClassName('fowardBtn')[1];

let pageValue = 0;

if (pageValue < -1){
    pageValue = 0;
} else if (pageValue > 2){
    pageValue = 2;
}

backwardsBtn.addEventListener('click', () => {
    if (pageValue <= 0){
        pageValue = 0;
    } else {
        pageValue--;
    }
    console.log(pageValue);
    getValueInfo();
})

fowardBtn.addEventListener('click', () => {
    if (pageValue >= 2){
        pageValue = 2;
    } else {
        pageValue++;
    }
    console.log(pageValue);
    getValueInfo();
})

getValueInfo = () => {
    switch (pageValue) {
        case 0:
            lb1.src = `/public/imgs/loreImgs/loreBlock1Val1.png`
            lb2.src = `/public/imgs/loreImgs/loreBlock2Val1.png`
            lb3.src = `/public/imgs/loreImgs/loreBlock3Val1.png`
            lb4.src = `/public/imgs/loreImgs/loreBlock4Val1.png`
            break;
        case 1:
            lb1.src = `/public/imgs/loreImgs/loreBlock1Val2.png`
            lb2.src = `/public/imgs/loreImgs/loreBlock2Val2.png`
            lb3.src = `/public/imgs/loreImgs/loreBlock3Val2.png`
            lb4.src = `/public/imgs/loreImgs/loreBlock4Val2.png`
            break;
        case 2: 
            window.location.href = '/public/CharacterSelection/chrSelection.html'
    }
}
