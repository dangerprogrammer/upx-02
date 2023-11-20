function setCart({ add, product }, { setUserCart }) {
    setUserCart(userCart => {
        const cloneCart = [...userCart];

        if (add) cloneCart.push(product);
        else cloneCart.splice(0, 1);

        return cloneCart;
    });
};

export default setCart;