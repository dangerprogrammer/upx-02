'use client';

import productsList from "@/components/context/productsList";

function ProductPage({ params: {productID} }) {
    const { product: { name } } = productsList.find(({ product: {id} }) => id == productID);

    return <h1>Olá {name}</h1>
};

export default ProductPage;