import Image from 'next/image';
import { similarProducts, cart, paymentRequest, responsiveShadow, resRevShadow, pageContainer, mainProduct, categorieName, photoStyles, shadow, greenColor, description, paymentMethod, grid, localStyles } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";
import Home from '@/assets/svgs/home-outline.svg';
import Cart from '@/assets/svgs/cart-outline.svg';
import Trash from '@/assets/svgs/trash-outline.svg';
import realCash from '@/scripts/realCash';
import setCart from './setCart';
import { useState } from 'react';
import Product from '../../components/product/Product';
import LoadingContainer from '../../components/loading-container/LoadingContainer';

function ProductContainer(props) {
    return <div>Opa!</div>
    const productCategorie = systemCategories.find(({ id }) => id == categorie), filtredProducts = productsList.filter(({categorie: productCat, product: {id: productID}}) => productCat === categorie && productID != id);
    let userCart = [];

    setUserCart(cart => {
        userCart = cart;

        return cart;
    });

    const [inCart, setInCart] = useState(userCart.find(({ id: cartID }) => cartID === id));

    return uniqueID ? <div className={pageContainer}>
        <main>
            <main className={mainProduct}>
                <span>
                    <h1>{name}</h1>
                    <div className={categorieName}>
                        <span>{productCategorie.name}</span>
                    </div>
                    <div>
                        <Image alt='Photo from product' src={photo} className={photoStyles}/>
                        <Image alt='Photo from product' src={photo} className={`${photoStyles} ${shadow}`}/>
                    </div>
                    <h1 className={greenColor}>{realCash(price)}</h1>
                    <p className={description}>
                        "<Desc/>"
                    </p>
                </span>
                <span className={shadow}>
                    <h1>Veja produtos similares</h1>
                    <ul className={similarProducts}>
                        {filtredProducts.map(({ ...context }, ind) => <Product { ...{...context, systemCategories} } key={ind}/>)}
                    </ul>
                </span>
                <BackPage shadow addClass={` ${responsiveShadow}`}/>
            </main>
            <aside>
                <span>
                    <h1>Veja produtos similares</h1>
                    <ul className={similarProducts}>
                        {filtredProducts.map(({ ...context }, ind) => <Product { ...{...context, systemCategories} } key={ind}/>)}
                    </ul>
                </span>
                <span>
                    <section className={paymentMethod}>
                        <p>Selecione a forma de pagamento</p>
                        <div className={grid}>
                            <input type="radio" name="payment-method" id="debit" defaultChecked/>
                            <label htmlFor="debit">Cartão</label>
                            <input type="radio" name="payment-method" id="cash"/>
                            <label htmlFor="cash">Dinheiro</label>
                        </div>
                    </section>
                    <section className={paymentRequest}>
                        <button className={cart} onClick={() => (setCart({ add: !inCart, product }, { setUserCart }), setInCart(cart => !cart))}>{inCart ? <>Remover do carrinho<Trash/></> : <>Adicionar ao carrinho<Cart/></>}</button>
                        <button>Comprar Agora</button>
                    </section>
                    <p>
                        <span>{user}</span>
                        <h4 className={localStyles}><Home/>{local}</h4>
                    </p>
                </span>
                <BackPage shadow addClass={` ${resRevShadow}`}/>
            </aside>
        </main>
        <BackPage/>
    </div> : <LoadingContainer/>
};

export default ProductContainer;