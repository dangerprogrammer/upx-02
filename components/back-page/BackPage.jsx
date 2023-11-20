import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';
import { footerStyles, backCategories, arrow, shadowFooter } from '../home/main-content/footer/Footer.module.scss';
import Link from "next/link";

function BackPage({ shadow }) {
    return <footer className={`${footerStyles}${shadow ? ` ${shadowFooter}` : ''}`}>
        <Link className={backCategories} href={'/'}>Voltar para o site<ArrowBack className={arrow}/></Link>
    </footer>
};

export default BackPage;