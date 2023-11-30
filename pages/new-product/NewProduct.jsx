import BackPage from '@/components/back-page/BackPage';
import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { newProduct, productContent } from './NewProduct.module.scss';
import { useEffect, useState } from 'react';
import Product from '@/components/product/Product';
import realCash from '@/scripts/realCash';

function NewProduct({ login: {uniqueID, given_name, name}, systemCategories, userProducts, setUserProducts, productsList }) {
    const [productPhoto, setProductPhoto] = useState(null),
        [categorie, setCategorie] = useState(systemCategories[0].id),
        [productName, setProductName] = useState(''),
        [productDesc, setProductDesc] = useState(),
        [productPrice, setProductPrice] = useState(0),
        productObject = {
        categorie,
        product: {
            name: productName,
            Desc:  ({ ...contexts }) => <span { ...contexts }>{productDesc || 'Description'}</span>,
            price: productPrice, photo: productPhoto, id: `product-${productsList.length + userProducts.length}`
        },
        user: name, local: 'Sorocaba, São Paulo (SP)'
    };

    return uniqueID ? <main className={newProduct}>
        <h1>Crie seu próprio produto, {given_name}!</h1>
        <section className={productContent}>
            <h1>Categoria do Produto</h1>
            <select onChange={({ target: {selectedIndex, options} }) => setCategorie(options[selectedIndex].value)}>
                {systemCategories.map(({ name, id }, ind) => <option key={ind} value={id}>{name}</option>)}
            </select>
        </section>
        <section className={productContent}>
            <h1>Nome do Produto</h1>
            <input type="text" onChange={({ target: {value} }) => setProductName(value)}/>
        </section>
        <section className={productContent}>
            <h1>Descrição</h1>
            <textarea cols="30" rows="3" onChange={({ target: {value} }) => (setProductDesc(<pre>{value || 'Description'}</pre>))}></textarea>
        </section>
        <section className={productContent}>
            <h1>Preço</h1>
            <span>
                <input type="number" min={0} onChange={({ target: {value} }) => setProductPrice(Math.max(+value, 0))}/>
                <p>{realCash(productPrice)}</p>
            </span>
        </section>
        <section className={productContent}>
            <h1>Foto do produto</h1>
            <input type="file" id="product-photo" onChange={({ target: {files} }) => files[0] && setProductPhoto(URL.createObjectURL(files[0]))}/>
            <label htmlFor="product-photo">
                {productPhoto ? <img src={productPhoto} alt=""/> : <span>Escolha a foto do produto!</span>}
            </label>
        </section>
        <span>
            <p>Prévia</p>
            <Product {...{...productObject, systemCategories, finishedProduct: !1}}/>
        </span>
        <BackPage/>
    </main> : <LoadingContainer/>
};

export default NewProduct;