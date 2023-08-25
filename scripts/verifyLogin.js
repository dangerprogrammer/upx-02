function verifyLogin(e, setLogin) {
    e.preventDefault();
    console.log("Opa!");
    const inputName = document.querySelector('#input-name'), inputEmail = document.querySelector('#input-email'),
        name = inputName.value, email = inputEmail.value;

    if (name.length && email.length) {
        setLogin({email, name, given_name: name.split(' ')[0]});
        return redirect('/');
    } else window.alert('Por favor, preencha todos os campos!');
};

export default verifyLogin;