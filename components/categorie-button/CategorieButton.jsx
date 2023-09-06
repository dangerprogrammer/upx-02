import { categorieButton } from './CategorieButton.module.scss';

function CategorieButton({ name, ImageCategorie, id }) {
    return <li className={categorieButton} id={id}>
        <div>
            <ImageCategorie/>
        </div>
        <span>{name}</span>
    </li>
};

export default CategorieButton;