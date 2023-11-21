import { categorieButton, activedCategorie, verifyed } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';
import Checkmark from '@/assets/svgs/checkmark-outline.svg';

function CategorieButton({ name, ImageCategorie, id, userCategories, setUserCategories }) {
    const isActived = userCategories.find(categorie => categorie === id), text = isActived ? ` ${activedCategorie}` : '';

    return <li className={`${categorieButton + text}`} id={id} onClick={({ target }) => setCategorie(target, { userCategories, setUserCategories })}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
        <div className={verifyed}>
            <Checkmark/>
        </div>
    </li>
};

export default CategorieButton;