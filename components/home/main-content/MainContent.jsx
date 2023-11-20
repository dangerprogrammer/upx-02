import { useEffect, useState } from 'react';
import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Product from './product/Product';
import filterOptions from '@/scripts/filterOptions';

function MainContent({productsList, userCategories, systemCategories, ...contexts}) {
    const filtredCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie)),
        [filtredProducts, setFiltredProducts] = useState(filtredCategories),
        [searchValue, setSearchValue] = useState(''),
        [filter, setFilter] = useState('none');

    useEffect(() => setFiltredProducts(() => {
        return productsList
        .filter(({categorie}) => userCategories.find(userCat => userCat == categorie))
        .filter(({product: {name}}) => name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter(filterOptions[filter])
    }), [userCategories, searchValue, filter]);

    useEffect(() => {
        console.log(filter);
    }, [filter]);
    
    return <main className={mainContent}>
        <Navbar {...{...contexts, setSearchValue, setFilter}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? <>
                <Navbar {...{...contexts, setFiltredProducts}} shadow/>
                <h4>Resultados da pesquisa: {filtredProducts.length}</h4>
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