import { loadingLogin } from '@/styles/login.module.scss';
import { redirect } from 'next/navigation';

function responseLogin(credential, googleLoginButton, setLogin) {
    if (!jwt_decode) return;

    const data = jwt_decode(credential);

    localStorage.setItem('user-data', JSON.stringify(data));

    googleLoginButton.classList.add(loadingLogin);

    setLogin(data);
    return redirect('/');
};

function initializeLogin(setLogin) {
    if (!window || !window.google || !window.jwt_decode) return;

    const parentButton = document.querySelector('#login-button'), googleLoginButton = document.createElement('div'), {initialize, renderButton, prompt} = window.google.accounts.id,
    buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "", size: "large", logo_alignment: "center"};

    googleLoginButton.id = 'google-login-button';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: ({ credential }) => responseLogin(credential, googleLoginButton, setLogin)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
};

export default initializeLogin;