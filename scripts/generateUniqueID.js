import chars from './chars';

function generateID(size = 12) {
    const idChars = [];

    while (idChars.length < size) idChars.push(randomArray(chars.split('')));

    return idChars.join('');
};

function randomArray(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
};

export default generateID;