import { categorieButton } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';

function CategorieButton({ name, ImageCategorie, id, ...categories }) {
    return <li className={categorieButton} id={id} onClick={({ target }) => setCategorie(target, { ...categories })}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;