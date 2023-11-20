'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useContext } from "react";
import productsList from "@/components/context/productsList";
import ProductContainer from "@/components/product-container/ProductContainer";

function ProductPage({ params: {productID} }) {
    const { ...contexts } = useContext(ContextApp);

    try {
        const { ...productContexts } = productsList.find(({ product: {id} }) => id == productID);

        return <ProductContainer { ...{...productContexts, ...contexts} }/>
    } catch (error) {
        return <>
        <h1>Erro!</h1>
        </>
    }
};

export default ProductPage;