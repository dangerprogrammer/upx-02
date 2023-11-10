import { categorieButton, activedCategorie } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';

function CategorieButton({ name, ImageCategorie, id, userCategories, setUserCategories }) {
    const isActived = userCategories.find(categorie => categorie === id), text = isActived ? ` ${activedCategorie}` : '';

    return <li className={`${categorieButton + text}`} id={id} onClick={({ target }) => setCategorie(target, { userCategories, setUserCategories })}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;