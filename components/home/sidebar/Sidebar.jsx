import systemCategories from '@/components/context/systemCategories';
import { sidebarContainer, showCategories, headerContainer, mainContent, skipButton, arrow, footerContainer, lowerButton, gridCategories } from './Sidebar.module.scss';
import ArrowForward from '@/assets/svgs/arrow-forward-outline.svg';
import CategorieButton from '@/components/categorie-button/CategorieButton';
import { useEffect } from 'react';
import setFunctionsLater from '@/scripts/setFunctionsLater';
import scrollCategories from '@/scripts/scrollCategories';

function Sidebar({ given_name, userCategories, setUserCategories, setLaterFunctions }) {
    useEffect(() => {
        console.log(userCategories);
        if (userCategories) setFunctionsLater({ userCategories }, { setLaterFunctions });
    }, []);

    return <aside className={`${sidebarContainer} ${showCategories}`}>
        <header className={headerContainer}>
            <h1>{ given_name }, selecione as categorias de seu interesse</h1>
        </header>
        <main className={mainContent}>
            <ul className={gridCategories}>
                {systemCategories.map(({ ...props }, ind) =>
                    <CategorieButton key={ind} { ...props } userCategories={userCategories} setUserCategories={setUserCategories}/>
                )}
            </ul>
        </main>
        <footer className={footerContainer}>
            <button className={`${skipButton} ${lowerButton}`} onClick={() => scrollCategories(!1)}>Pular<ArrowForward className={arrow}/></button>
            <button className={skipButton} onClick={() => scrollCategories(!1)}>Continuar<ArrowForward className={arrow}/></button>
        </footer>
    </aside>
};

export default Sidebar;