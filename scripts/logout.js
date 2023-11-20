function logout() {
    localStorage.clear();

    location.reload();
};

export default logout;