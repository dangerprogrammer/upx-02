import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';
import { footerStyles, backCategories, arrow, shadowFooter } from '../pages/home/main-content/footer/Footer.module.scss';
import Link from "next/link";

function BackPage({ shadow, addClass }) {
    return <footer className={`${footerStyles}${shadow ? ` ${shadowFooter}` : ''}` + (addClass || '')}>
        <Link className={backCategories} href={'/'}>Voltar para o site<ArrowBack className={arrow}/></Link>
    </footer>
};

export default BackPage;