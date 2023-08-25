function responseLogin() {
    const data = jwt_decode(response.credential), {email} = data, hasEmail = !!authUsers.find(authUser => authUser === email);
};

function initializeLogin(parentButton, googleLoginButton) {
    if (!window || !window.google || !window.jwt_decode) return;

    const {initialize, renderButton, prompt} = window.google.accounts.id,
    buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "", size: "large", logo_alignment: "left"};

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: response => responseLogin(response, parentButton, googleLoginButton, socket, setSocket, setUsers)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
};

export default initializeLogin;