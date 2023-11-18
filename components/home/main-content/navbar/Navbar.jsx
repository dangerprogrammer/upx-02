import { navbar, searchbarContainer, searchbar, searchIcon } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';

function Navbar({ setFiltredProducts, filtedCategories }) {
    return <nav className={navbar}>
        <main className={searchbarContainer}>
            <SearchIcon className={searchIcon}/>
            <input type="text" id="searchbar" placeholder='Pesquise por algum produto!' className={searchbar} onChange={({ target: {value} }) => setFiltredProducts(() => filtedCategories.filter(({product: {name}}) => name.startsWith(value)))}/>
        </main>
    </nav>
};

export default Navbar;