function onLoadedPage({ login, setLogin, userCategories, setUserCategories }) {
    const userData = localStorage.getItem('user-data'), categoriesUser = localStorage.getItem('user-categories');

    if (!login) {
      if (userData) setLogin(JSON.parse(userData));
      else return redirect('/login');
    };

    if (categoriesUser) setUserCategories(JSON.parse(categoriesUser));
};

export default onLoadedPage;