import { logoutButton, navbar, searchbarContainer, searchbar, searchContainer, searchIcon, personContainer, menuContainer, hideMenu, navShadow } from './Navbar.module.scss';
import SearchIcon from '@/assets/svgs/search.svg';
import MenuIcon from '@/assets/svgs/menu-outline.svg';
import LogoutIcon from '@/assets/svgs/log-out-outline.svg';
import Cart from '@/assets/svgs/cart-outline.svg';
import Plus from '@/assets/svgs/add-outline.svg';
import logout from '@/scripts/logout';
import { useRouter } from 'next/navigation';
import realCash from '@/scripts/realCash';

function Navbar({ shadow, setSearchValue, setFilter }) {
    const { push } = useRouter();

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
                <div>
                    <h4>Filtros</h4>
                    <button>Filtrar por
                        <select onChange={({ target: { options, selectedIndex } }) => setFilter(options[selectedIndex].value)}>
                        <option value="none" defaultValue>Nenhum</option>
                        <option value="price-under-200">Abaixo de {realCash(200)}</option>
                        <option value="price-upper-200">Acima de {realCash(200)}</option>
                        <option value="price-upper-400">Acima de {realCash(400)}</option>
                        <option value="phone">Celulares e Notebooks</option>
                        <option value="desktop">Desktops e TVs</option>
                        </select>
                    </button>
                </div>
                <div>
                    <h4>Conta</h4>
                    <button className={logoutButton} onClick={() => push('/carrinho')}><Cart/>Ver Carrinho</button>
                    <button className={logoutButton} onClick={() => push('/create-product')}><Plus/>Adicionar Produto</button>
                    <button className={logoutButton} onClick={logout}><LogoutIcon/>Logout</button>
                </div>
            </main>
        </button>
    </nav>
};

export default Navbar;