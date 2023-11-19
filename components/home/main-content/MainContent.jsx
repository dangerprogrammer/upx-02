import { useEffect, useState } from 'react';
import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Product from './product/Product';

function MainContent({productsList, userCategories, systemCategories}) {
    const filtedCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie)),
        [filtredProducts, setFiltredProducts] = useState(filtedCategories);

    useEffect(() => setFiltredProducts(filtedCategories), [userCategories]);

    return <main className={mainContent}>
        <Navbar {...{setFiltredProducts, filtedCategories}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? filtredProducts.map(({ ...context }, ind) => <Product { ...{...context, systemCategories} } key={ind}/>)
            : <h1>Não há produtos disponíveis!</h1>}
        </section>
        <Footer />
    </main>
};

export default MainContent;