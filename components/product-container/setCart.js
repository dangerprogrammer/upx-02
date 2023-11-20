function setCart({ add, product, product: {id} }, { setUserCart }) {
    setUserCart(userCart => {
        const cloneCart = [...userCart], cartIDs = cloneCart.map(({ id }) => id);

        if (add) {
            if (cartIDs.indexOf(id) === -1) cloneCart.push(product);
        } else cloneCart.splice(cartIDs.indexOf(id), 1);

        console.log(cloneCart);
        return cloneCart;
    });
};

export default setCart;