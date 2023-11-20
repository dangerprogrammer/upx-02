import { redirect } from 'next/navigation';
import generateID from './generateUniqueID';

function verifyLogin(setLogin) {
    const inputName = document.querySelector('#input-name'), inputEmail = document.querySelector('#input-email'),
        name = inputName.value, email = inputEmail.value;

    if (name.length && email.length) {
        const data = {email, name, given_name: name.split(' ')[0], uniqueID: generateID()};

        localStorage.setItem('user-data', JSON.stringify(data));
        setLogin(data);
        return redirect('/');
    } else window.alert('Por favor, preencha todos os campos!');
};

export default verifyLogin;