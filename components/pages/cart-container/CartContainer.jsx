import { useEffect, useState } from 'react';
import BackPage from '../../back-page/BackPage';
import Product from '../../product/Product';
import setCart from '../product-container/setCart';
import { cartContainer } from './CartContainer.module.scss';
import LoadingContainer from '../../loading-container/LoadingContainer';

function CartContainer({ login: {uniqueID}, systemCategories, productsList, userCart, setUserCart }) {
    const [ cartProducts, setCartProducts ] = useState([]);

    useEffect(() => setCartProducts(productsList.filter(({ product: {id: productID} }) => userCart.find(({ id }) => productID == id))), [userCart]);

    return uniqueID ? <main className={cartContainer}>
        <h1>Aqui estão seus itens do carrinho! </h1>
        <ul>
            {cartProducts.map(({ product, ...context }, ind) =>
            <Product { ...{...context, product, systemCategories} }
                removeCart={(inCart) => setCart({ add: !inCart, product }, { setUserCart })}
                key={ind}/>
            )}
        </ul>
        <BackPage/>
    </main> : <LoadingContainer/>
};

export default CartContainer;