import { useState } from 'react';
import { categorieButton, activedCategorie, verifyed } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';
import Checkmark from '@/assets/svgs/checkmark-outline.svg';
import Image from "next/image";

function CategorieButton({ name, imageSrc, id, userCategories, setUserCategories }) {
    const [isActived, setActived] = useState(userCategories.find(categorie => categorie === id)),
        text = isActived ? ` ${activedCategorie}` : '';

    return <li className={`${categorieButton + text}`} id={id} onClick={({ target }) => setCategorie(target, { userCategories, setUserCategories })}>
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