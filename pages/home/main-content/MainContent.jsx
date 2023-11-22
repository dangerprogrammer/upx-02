import { useEffect, useState } from 'react';
import { mainContent, gridProducts, hiddenText } from './MainContent.module.scss';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Product from '../../../components/product/Product';
import filterOptions from '@/scripts/filterOptions';

function MainContent({productsList, userCategories, systemCategories, ...contexts}) {
    const filtredCategories = productsList.filter(({categorie}) => userCategories.find(userCat => userCat == categorie)),
        [filtredProducts, setFiltredProducts] = useState(filtredCategories),
        initialSearchValue = '',
        [searchValue, setSearchValue] = useState(initialSearchValue),
        initialFilter = 'none',
        [filter, setFilter] = useState(initialFilter),
        [showSearch, setShowSearch] = useState(!1);

    useEffect(() => setFiltredProducts(() => {
        return productsList
        .filter(({categorie}) => userCategories.find(userCat => userCat == categorie))
        .filter(({product: {name}}) => name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter(filterOptions[filter])
    }), [userCategories, searchValue, filter]);

    useEffect(() => setShowSearch(() => searchValue != initialSearchValue || filter != initialFilter), [searchValue, filter]);
    
    return <main className={mainContent}>
        <Navbar {...{...contexts, setSearchValue, setFilter}}/>
        <section className={gridProducts}>
            {filtredProducts.length
            ? <>
                <Navbar {...{...contexts, setFiltredProducts}} shadow/>
                <h4 className={showSearch ? null : hiddenText}>Resultados da pesquisa (ou filtro): {filtredProducts.length}</h4>
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