import { useEffect, useState } from 'react';
import { categorieButton, activedCategorie, verifyed } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';
import Checkmark from '@/assets/svgs/checkmark-outline.svg';
import Image from "next/image";

function CategorieButton({ name, imageSrc, id, userCategories, setUserCategories, activeButton, changeButton }) {
    return;
    const [isActived, setActived] = useState(userCategories.find(categorie => categorie === id) || activeButton),
        text = (isActived) ? ` ${activedCategorie}` : '';

    useEffect(() => {
        if (!activeButton) return;

        setActived(userCategories.find(categorie => categorie === id) || activeButton);
        const button = document.getElementById(id);
        
        setCategorie(button, { setUserCategories, changeButton, force: activeButton });
    }, [activeButton]);

    return <li className={`${categorieButton + text}`} id={id} onClick={({ target }) => setCategorie(target, { setUserCategories, changeButton })}>
        <div>
            <Image alt='' src={imageSrc}/>
        </div>
        <span>{name}</span>
        <div className={verifyed}>
            <Checkmark/>
        </div>
    </li>
};

export default CategorieButton;