import scrollCategories from '@/scripts/scrollCategories';
import { footerStyles, backCategories, arrow } from './Footer.module.scss';
import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';

function Footer() {
    return <footer className={footerStyles}>
        <button className={backCategories} onClick={() => scrollCategories(!0)}>Ver categorias<ArrowBack className={arrow}/></button>
    </footer>
};

export default Footer;