'use client';

import CartContainer from "@/components/cart-container/CartContainer";
import { ContextApp } from "@/components/context/ContextApp";
import { useContext } from "react";

function CartPage() {
    const { ...contexts } = useContext(ContextApp);

    return <CartContainer {...contexts}/>
};

export default CartPage;