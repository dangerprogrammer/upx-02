// import { useContext } from 'react';
import { categorieButton, activedCategorie } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';
// import { ContextApp } from '../context/ContextApp';

function CategorieButton({ name, ImageCategorie, id }) {
    /*const { userCategories } = useContext(ContextApp), findedCategorie = userCategories.find(categorie => categorie == id),
        text = findedCategorie ? ` ${findedCategorie}` : '';*/
    const text = '';

    return <li className={`${categorieButton}${text}`} id={id} onClick={({ target }) => setCategorie(target)}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;