const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const answare = document.getElementById('answare');

const confirmBtn = document.getElementById('confirmBtn');


export function randomMath(){
    let firstValue = Math.floor(Math.random() * 10) + 1;
    let secondValue = Math.floor(Math.random() * 10) + 1;
    let result = firstValue * secondValue;

    val1.innerHTML = `${firstValue}`;
    val2.innerHTML = `${secondValue}`;

    confirmBtn.addEventListener('click', () => {
        let log = (answare.value == result) ? console.log('correto') : console.log('errado');
    })
}