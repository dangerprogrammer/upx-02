function logout() {
    localStorage.removeItem('user-data');
    localStorage.removeItem('user-categories');

    window.location.reload();
};

export default logout;