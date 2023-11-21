'use client';

import { ContextApp } from "@/components/context/ContextApp";
import NewProduct from "@/pages/new-product/NewProduct";
import onLoadedPage from "@/scripts/onLoadedPage";
import { useContext, useEffect } from "react";

function CreateProductPage() {
    const { ...contexts } = useContext(ContextApp);

    useEffect(() => onLoadedPage({ ...contexts }), []);

    return <NewProduct {...contexts}/>
};

export default CreateProductPage;