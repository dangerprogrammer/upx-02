'use client';

import CartContainer from "@/components/pages/cart-container/CartContainer";
import { ContextApp } from "@/components/context/ContextApp";
import onLoadedPage from "@/scripts/onLoadedPage";
import { useContext, useEffect } from "react";

function CartPage() {
    const { ...contexts } = useContext(ContextApp);

    useEffect(() => onLoadedPage({ ...contexts }), []);

    return <CartContainer {...contexts}/>
};

export default CartPage;