function setCart() {
    return;
    setUserCart(userCart => {
        const cartIDs = userCart.map(({ id }) => id);

        if (add) {
            if (cartIDs.indexOf(id) === -1) userCart.push(product);
        } else userCart.splice(cartIDs.indexOf(id), 1);

        localStorage.setItem('user-cart', JSON.stringify(userCart));
        return userCart;
    });
};

export default setCart;