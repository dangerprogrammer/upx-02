import { redirect } from 'next/navigation';
import chars from './chars';

function verifyLogin(setLogin) {
    const allChars = chars.split(''), inputName = document.querySelector('#input-name'), inputEmail = document.querySelector('#input-email'),
        name = inputName.value, email = inputEmail.value;

    if (name.length && email.length) {
        const data = {email, name, given_name: name.split(' ')[0], uniqueID: generateID(allChars)};

        localStorage.setItem('user-data', JSON.stringify(data));
        setLogin(data);
        return redirect('/');
    } else window.alert('Por favor, preencha todos os campos!');
};

function generateID(allChars, size = 12) {
    const idChars = [];

    while (idChars.length < size) idChars.push(randomArray(allChars));

    return idChars.join('');
};

function randomArray(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
};

export default verifyLogin;