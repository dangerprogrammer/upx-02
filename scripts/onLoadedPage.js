import { redirect } from "next/navigation";

function onLoadedPage({ login, setLogin, setUserCategories, setUserCart }) {
    const userData = localStorage.getItem('user-data'),
      categoriesUser = localStorage.getItem('user-categories'),
      cartUser = localStorage.getItem('user-cart');

    if (!login) {
      if (userData) setLogin(JSON.parse(userData));
      else return redirect('/login');
    };

    if (categoriesUser) setUserCategories(JSON.parse(categoriesUser));
    if (cartUser) setUserCart(JSON.parse(cartUser));
};

export default onLoadedPage;