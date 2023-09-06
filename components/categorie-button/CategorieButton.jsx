import { categorieButton } from './CategorieButton.module.scss';
import setCategorie from './setCategorie';

function CategorieButton({ name, ImageCategorie, id }) {
    return <li className={categorieButton} id={id} onClick={({ target }) => setCategorie(target)}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;