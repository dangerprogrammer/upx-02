import { categorieButton } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';

function CategorieButton({ name, ImageCategorie, id, userCategories, setUserCategories }) {
    return <li className={categorieButton} id={id} onClick={({ target }) => setCategorie(target, { userCategories, setUserCategories })}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;