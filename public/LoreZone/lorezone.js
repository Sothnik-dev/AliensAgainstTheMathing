const lb1 = document.getElementsByClassName('loreBlock')[0];
const lb2 = document.getElementsByClassName('loreBlock')[1];
const lb3 = document.getElementsByClassName('loreBlock')[2];

let pageValue = 1;

switch (pageValue) {
    case 1:
        lb1.src = `/public/imgs/loreImgs/loreBlock1Val1.png`
        lb2.src = `/public/imgs/loreImgs/loreBlock2Val1.png`
        lb3.src = `/public/imgs/loreImgs/loreBlock3Val1.png`
}