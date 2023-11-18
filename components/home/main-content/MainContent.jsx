import { useState } from 'react';
import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/Footer.jsx';
import Navbar from './navbar/Navbar.jsx';
import Product from './product/Product';

function MainContent({productsList, userCategories}) {
    const filtedCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie)),
        [filtredProducts, setFiltredProducts] = useState(filtedCategories);

    return <main className={mainContent}>
        <Navbar {...{setFiltredProducts, filtedCategories}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? filtredProducts.map(({ ...context }, ind) => <Product { ...context } key={ind}/>)
            : <h1>Não há produtos disponíveis na(s) categoria(s) selecionada(s)!</h1>}
        </section>
        <Footer />
    </main>
};

export default MainContent;