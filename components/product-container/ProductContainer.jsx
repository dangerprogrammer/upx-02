import { pageContainer } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";

function ProductContainer({ name }) {
    return <div className={pageContainer}>
        <h1>{name}</h1>
        <BackPage/>
    </div>
};

export default ProductContainer;