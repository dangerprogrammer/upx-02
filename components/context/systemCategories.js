import damagedEletronic from "@/public/imgs/product-1.webp";
import redirect from "@/public/imgs/product-2.webp";
import acessories from "@/public/imgs/product-3.webp";
import others from "@/public/imgs/product-4.webp";

const systemCategories = [
    { name: 'Eletrônico estragado', imageSrc: damagedEletronic, id: 'damaged-eletronic' },
    { name: 'Recondicionar', imageSrc: redirect, id: 'redirect' },
    { name: 'Peças e acessórios', imageSrc: acessories, id: 'acessories' },
    { name: 'Outros', imageSrc: others, id: 'others' },
];

export default systemCategories;