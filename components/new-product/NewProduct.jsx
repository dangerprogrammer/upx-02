import LoadingContainer from '../loading-container/LoadingContainer';
import { newProduct } from './NewProduct.module.scss';

function NewProduct({ login: {uniqueID} }) {
    return uniqueID ? <main className={newProduct}>
        Opa!
    </main> : <LoadingContainer/>
};

export default NewProduct;