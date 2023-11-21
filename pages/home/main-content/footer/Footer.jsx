import scrollCategories from '@/scripts/scrollCategories';
import { footerStyles, backCategories, arrow, shadowFooter } from './Footer.module.scss';
import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';

function Footer({ shadow = !1 }) {
    return <footer className={`${footerStyles}${shadow ? ` ${shadowFooter}` : ''}`}>
        <button className={backCategories} onClick={() => scrollCategories(!0)}>Ver categorias<ArrowBack className={arrow}/></button>
    </footer>
};

export default Footer;