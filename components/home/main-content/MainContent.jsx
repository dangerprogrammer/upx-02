import { useEffect, useState } from 'react';
import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Product from './product/Product';

function MainContent({productsList, userCategories, systemCategories, ...contexts}) {
    const filtedCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie)),
        [filtredProducts, setFiltredProducts] = useState(filtedCategories);

    useEffect(() => setFiltredProducts(filtedCategories), [userCategories]);
    
    return <main className={mainContent}>
        <Navbar {...{...contexts, setFiltredProducts, filtedCategories}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? <>
                <Navbar {...{...contexts, setFiltredProducts, filtedCategories}} shadow/>
                <ul>
                    {filtredProducts.map(({ ...context }, ind) => <Product { ...{...context, systemCategories} } key={ind}/>)}
                </ul>
                <Footer shadow/>
            </>
            : <h1>Não há produtos disponíveis!</h1>}
        </section>
        <Footer />
    </main>
};

export default MainContent;