import { navbar, searchbarContainer, searchbar, searchIcon } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';

function Navbar() {
    return <nav className={navbar}>
        <main className={searchbarContainer}>
            <SearchIcon className={searchIcon}/>
            <input type="text" id="searchbar" placeholder='Pesquise por algum produto!' className={searchbar}/>
        </main>
    </nav>
};

export default Navbar;