import { redirect } from "next/navigation";

function onLoadedPage({ login, setLogin, setUserCategories, laterFunctions }) {
    const userData = localStorage.getItem('user-data'), categoriesUser = localStorage.getItem('user-categories');

    if (!login) {
      if (userData) setLogin(JSON.parse(userData));
      else return redirect('/login');
    };

    if (categoriesUser) {
      setUserCategories(JSON.parse(categoriesUser));

      laterFunctions.map(lFunc => lFunc());
    };
};

export default onLoadedPage;