import { logoutButton, navbar, searchbarContainer, searchbar, searchContainer, searchIcon, personContainer, menuContainer, hideMenu, navShadow } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';
import MenuIcon from '@/assets/svgs/menu-outline.svg';
import LogoutIcon from '@/assets/svgs/log-out-outline.svg';
import logout from '@/scripts/logout';

function Navbar({ shadow, setSearchValue, setFilter }) {
    return <nav className={`${navbar}${shadow ? ` ${navShadow}` : ''}`}>
        <main className={searchContainer}>
            <section className={searchbarContainer}>
                <SearchIcon className={searchIcon}/>
                <input type="text" id="searchbar" placeholder='Pesquise por algum produto!' className={searchbar}
                onChange={({ target: {value} }) => setSearchValue(value)}/>
            </section>
        </main>
        <button className={personContainer} onClick={({ target }) => target.classList.toggle(hideMenu)}>
            <MenuIcon/>
            <main className={menuContainer}>
                <h4>Filtros</h4>
                <button>Filtrar por <select onChange={({ target: { options, selectedIndex } }) => setFilter(options[selectedIndex].value)}>
                    <option value="none" selected>Nenhum</option>
                    <option value="price-under-200">Abaixo de 200</option>
                    <option value="price-upper-200">Acima de 200</option>
                    <option value="price-upper-400">Acima de 400</option>
                    <option value="phone">Celulares e Notebooks</option>
                    <option value="desktop">Desktops e TVs</option>
                    </select></button>
                <h4>Conta</h4>
                <button className={logoutButton} onClick={logout}><LogoutIcon/>Logout</button>
            </main>
        </button>
    </nav>
};

export default Navbar;