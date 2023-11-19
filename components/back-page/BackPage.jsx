import { useRouter } from "next/router";
import ArrowBack from '@/assets/svgs/arrow-back-outline.svg';
import { footerStyles, backCategories, arrow } from '../home/main-content/footer/Footer.module.scss';

function BackPage() {
    const { back } = useRouter();

    return <footer className={footerStyles}>
        <button className={backCategories} onClick={back}>Voltar para o site<ArrowBack className={arrow}/></button>
    </footer>
};

export default BackPage;