import { navbar, searchbarContainer, searchbar, searchContainer, searchIcon, personContainer, menuContainer, hideMenu } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';
import MenuIcon from '@/assets/svgs/menu-outline.svg';

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
        <button className={personContainer} onClick={({ target }) => target.classList.toggle(hideMenu)}>
            <MenuIcon/>
            <main className={menuContainer}>Texto!</main>
        </button>
    </nav>
};

export default Navbar;