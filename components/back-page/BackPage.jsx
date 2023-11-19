import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';
import { footerStyles, backCategories, arrow } from '../home/main-content/footer/Footer.module.scss';
import Link from "next/link";

function BackPage() {
    return <footer className={footerStyles}>
        <Link className={backCategories} href={'/'}>Voltar para o site<ArrowBack className={arrow}/></Link>
    </footer>
};

export default BackPage;