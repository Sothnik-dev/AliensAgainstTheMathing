let dificultyValue = sessionStorage.getItem('diffValue');

export function checkDificulty() {
    switch(dificultyValue) {
        case 'Easy':
            return 15;
            break;
        case 'Medium':
            return 10;
            break;
        case 'Hard':
            return 5;
            break;
        case 'Hell on earth':
            return 3;
            break;
        default:
            return 10;
            break;
    }
}