let dificultyValue = sessionStorage.getItem('diffValue');

export function checkDificultyDamage() {
    switch(dificultyValue) {
        case 'Easy':
            return 1;
            break;
        case 'Medium':
            return 1;
            break;
        case 'Hard':
            return 2;
            break;
        case 'Hell on earth':
            return 3;
            break;
        default:
            return 1;
            break;
    }
}