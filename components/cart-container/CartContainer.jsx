import { useEffect, useState } from 'react';
import BackPage from '../back-page/BackPage';
import Product from '../home/main-content/product/Product';
import setCart from '../product-container/setCart';
import { cartContainer } from './CartContainer.module.scss';

function CartContainer({ systemCategories, productsList, userCart, setUserCart }) {
    const [ cartProducts, setCardProducts ] = useState([]);

    useEffect(() => 
        setCardProducts(productsList.filter(({ product: {id: productID} }) => userCart.find(({ id }) => productID == id)))
    , [userCart]);

    return <main className={cartContainer}>
        <h1>Aqui estão seus itens do carrinho! </h1>
        <ul>
            {cartProducts.map(({ product, product: {id}, inCart, ...context }, ind) => {
                console.log(inCart);
                return <Product { ...{...context, product, systemCategories} }
                removeCart={() => (setCart({ add: !inCart, product }, { setUserCart }), setCardProducts(cProducts => {
                    // const cloneProducts = [...cProducts], mapIDs = cProducts.map(({ id }) => )
    
                    console.log(cProducts);
                    return cProducts;
                }), (inCart = !inCart))}
                key={ind}/>
            })}
        </ul>
        <BackPage/>
    </main>
};

export default CartContainer;