const diffValue = document.getElementById('dificultyValue');
const gayValue = document.getElementById('gayValue');

const goToMain = document.getElementById('optBtn').addEventListener('click', () => {
    sessionStorage.setItem('diffValue', diffValue.value);
    sessionStorage.setItem('gayValue', gayValue.value);
    
    window.location.href = `/public/mainMenu/menu.html`
})