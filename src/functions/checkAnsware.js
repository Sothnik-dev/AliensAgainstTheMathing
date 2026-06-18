import { damageOutputAnalisy } from "./generateDamage.js";

//captura o valor da equação via DOM
const answare = document.getElementById('answare');

//Ativa a função através do click
export function checkAnsware() {
    confirmBtn.addEventListener('click', () => {
        damageOutputAnalisy();
        answare.value = null;
    })
}