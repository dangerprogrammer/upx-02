import { useEffect, useState } from 'react';
import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/Footer.jsx';
import Navbar from './navbar/Navbar.jsx';
import Product from './product/Product';

function MainContent({productsList, userCategories}) {
    const [searchValue, setSearchValue] = useState(""),
        filtedCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie));
    
    let filtredProducts = filtedCategories;

    useEffect(() => {
        filtredProducts = filtedCategories.filter(({product: {name}}) => name.startsWith(searchValue));
    }, [searchValue]);

    return <main className={mainContent}>
        <Navbar {...{setSearchValue}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? filtredProducts.map(({ ...context }, ind) => <Product { ...context } key={ind}/>)
            : <h1>Não há produtos disponíveis na(s) categoria(s) selecionada(s)!</h1>}
        </section>
        <Footer />
    </main>
};

export default MainContent;