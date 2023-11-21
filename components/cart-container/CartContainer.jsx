import { useEffect, useState } from 'react';
import BackPage from '../back-page/BackPage';
import Product from '../home/main-content/product/Product';
import setCart from '../product-container/setCart';
import { cartContainer } from './CartContainer.module.scss';

function CartContainer({ systemCategories, productsList, userCart, setUserCart }) {
    const [ cartProducts, setCartProducts ] = useState([]);

    useEffect(() => {
        console.log("opa! mudança");
        setCartProducts(productsList.filter(({ product: {id: productID} }) => userCart.find(({ id }) => productID == id)).map(cProducts => {
            const [cartText, setCartText] = useState(<>Remover do carrinho</>);

            return {
                ...cProducts,
                inCart: !0,
                cartText, setCartText
            };
        }));
    }, [userCart]);

    return <main className={cartContainer}>
        <h1>Aqui estão seus itens do carrinho! </h1>
        <ul>
            {cartProducts.map(({ product, product: {id}, inCart, ...context }, ind) => {
                return <Product { ...{...context, product, systemCategories} }
                removeCart={() => (setCart({ add: !inCart, product }, { setUserCart }), setCartProducts(cProducts => {
                    const findedProduct = cProducts.find(({ product: {id: productID} }) => productID == id);

                    findedProduct.cartText = inCart ? <>Remover do carrinho</> : <>Restaurar</>;

                    console.log(inCart);

                    return cProducts;
                }), (inCart = !inCart))}
                key={ind}/>
            })}
        </ul>
        <BackPage/>
    </main>
};

export default CartContainer;