'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import productsList from "@/components/context/productsList";
import ProductContainer from "@/components/product-container/ProductContainer";
import onLoadedPage from "@/scripts/onLoadedPage";

function ProductPage({ params: {productID} }) {
    const { ...contexts } = useContext(ContextApp);

    useEffect(() => onLoadedPage({ ...contexts }), []);

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