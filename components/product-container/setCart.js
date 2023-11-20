function setCart({ add, product, product: {id} }, { setUserCart }) {
    setUserCart(userCart => {
        const cloneCart = [...userCart], cartIDs = cloneCart.map(({ id }) => id);

        if (add) cloneCart.push(product);
        else cloneCart.splice(cartIDs.indexOf(id), 1);

        return cloneCart;
    });
};

export default setCart;