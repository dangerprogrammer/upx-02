import BackPage from '@/components/back-page/BackPage';
import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { newProduct, productContent } from './NewProduct.module.scss';
import { useEffect } from 'react';

function NewProduct({ login: {uniqueID, given_name, name}, systemCategories, userProducts, setUserProducts, productsList }) {
    console.clear();
    const productObject = {
        categorie: systemCategories[0].id,
        product: {
            id: `product-${productsList.length + userProducts.length}`
        },
    };

    console.log(productsList);

    useEffect(() => {
        console.log(productObject);
    }, [productObject.categorie, productObject.product.name, productObject.product.Desc]);

    return uniqueID ? <main className={newProduct}>
        <h1>Crie seu próprio produto {given_name}!</h1>
        <section className={productContent}>
            <h1>Categoria do produto</h1>
            <select>
                {systemCategories.map(({ name, id }, ind) => <option key={ind} value={id}>{name}</option>)}
            </select>
        </section>
        <section className={productContent}>
            <h1>Nome do Produto</h1>
            <input type="text" onChange={({ target: {value} }) => (productObject.product.name = value, console.log(productObject))}/>
        </section>
        <section className={productContent}>
            <h1>Descrição</h1>
            <textarea cols="30" rows="3" onChange={({ target: {value} }) => (productObject.product.Desc = ({ ...contexts }) => <span { ...contexts }>
                {value}
            </span>)}></textarea>
        </section>
        <section className={productContent}>
            <h1>Preço</h1>
            <input type="text" onChange={({ target: {value} }) => (productObject.product.price = +value)}/>
        </section>
        <p>Descrição do produto, preço, foto</p>
        <BackPage/>
    </main> : <LoadingContainer/>
};

export default NewProduct;