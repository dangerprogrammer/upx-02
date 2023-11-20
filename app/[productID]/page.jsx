'use client';

import productsList from "@/components/context/productsList";
import ProductContainer from "@/components/product-container/ProductContainer";

function ProductPage({ params: {productID} }) {
    try {
        const { product: { name } } = productsList.find(({ product: {id} }) => id == productID);

        return <ProductContainer {...{name}}/>
    } catch (error) {
        return <>
        <h1>Erro!</h1>
        </>
    }
};

export default ProductPage;