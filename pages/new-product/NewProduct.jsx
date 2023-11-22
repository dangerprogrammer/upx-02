import BackPage from '@/components/back-page/BackPage';
import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { newProduct, productContent } from './NewProduct.module.scss';
import { useEffect } from 'react';

function NewProduct({ login: {uniqueID, given_name, name}, systemCategories }) {
    return;
    const productObject = {
        categorie: systemCategories[0].id,
        product: {
            name: '',
            Desc: ({ ...contexts }) => <span {...contexts}></span>
        }
    };

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
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
        <p>Descrição do produto, preço, foto</p>
        <BackPage/>
    </main> : <LoadingContainer/>
};

export default NewProduct;