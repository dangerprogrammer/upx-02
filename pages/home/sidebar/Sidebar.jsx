import systemCategories from '@/components/context/systemCategories';
import { allActive, sidebarContainer, showCategories, headerContainer, mainContent, skipButton, arrow, footerContainer, lowerButton, gridCategories } from './Sidebar.module.scss';
import ArrowForward from '@/assets/svgs/arrow-forward-outline.svg';
import CategorieButton from '@/pages/home/sidebar/categorie-button/CategorieButton';
import { useEffect, useState } from 'react';
import scrollCategories from '@/scripts/scrollCategories';
import Checkmark from '@/assets/svgs/checkmark-outline.svg';

function Sidebar({ uniqueID, given_name, userCategories, setUserCategories }) {
    return;
    const [ force, isForce ] = useState(systemCategories.length == userCategories.length);

    useEffect(() => {
        if (!uniqueID) return; 

        scrollCategories(!userCategories.length);
    }, [uniqueID]);

    return <aside className={`${sidebarContainer} ${showCategories}`}>
        <header className={headerContainer}>
            <h1>{ given_name }, selecione as categorias de seu interesse</h1>
            <button onClick={() => isForce(!0)} className={force ? null : allActive}>Selecionar todas<Checkmark className={arrow}/></button>
        </header>
        <main className={mainContent}>
            <ul className={gridCategories}>
                {systemCategories.map(({ ...props }, ind) =>
                    <CategorieButton key={ind} {...{...props, userCategories, setUserCategories, activeButton: force, changeButton: isForce}}/>
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