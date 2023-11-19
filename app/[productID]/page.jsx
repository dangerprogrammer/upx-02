'use client';

function ProductPage({ params: {productID} }) {
    console.log(productID);

    return <h1>Olá {productID}</h1>
};

export default ProductPage;