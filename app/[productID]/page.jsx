'use client';

import BackPage from "@/components/back-page/BackPage";
import productsList from "@/components/context/productsList";

function ProductPage({ params: {productID} }) {
    try {
        const { product: { name } } = productsList.find(({ product: {id} }) => id == productID);

        return <>
        <h1>{name}</h1>
        <BackPage/>
        </>
    } catch (error) {
        return <>
        <h1>Erro!</h1>
        </>
    }
};

export default ProductPage;