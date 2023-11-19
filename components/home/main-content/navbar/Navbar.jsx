import { navbar, searchbarContainer, searchbar, searchContainer, searchIcon, personContainer } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';

function Navbar({ setFiltredProducts, filtedCategories }) {
    return <nav className={navbar}>
        <main className={searchContainer}>
            <section className={searchbarContainer}>
                <SearchIcon className={searchIcon}/>
                <input type="text" id="searchbar" placeholder='Pesquise por algum produto!' className={searchbar} onChange={({ target: {value} }) =>
                setFiltredProducts(() =>
                    filtedCategories.filter(({product: {name}}) => name.toLowerCase().includes(value.toLowerCase()))
                )
                }/>
            </section>
        </main>
        <button className={personContainer}>Button!</button>
    </nav>
};

export default Navbar;