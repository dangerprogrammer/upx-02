'use client';

import BackPage from "@/components/back-page/BackPage";
import productsList from "@/components/context/productsList";

function ProductPage({ params: {productID} }) {
    const { product: { name } } = productsList.find(({ product: {id} }) => id == productID);

    return <>
    <h1>{name}</h1>
    <BackPage/>
    </>
};

export default ProductPage;