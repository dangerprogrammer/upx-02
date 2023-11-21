import damagedEletronic from "@/public/imgs/damaged-eletronic.webp";
import redirect from "@/public/imgs/redirect.webp";
import acessories from "@/public/imgs/acessories.webp";
import others from "@/public/imgs/others.webp";

const systemCategories = [
    { name: 'Eletrônico estragado', imageSrc: damagedEletronic, id: 'damaged-eletronic' },
    { name: 'Recondicionar', imageSrc: redirect, id: 'redirect' },
    { name: 'Peças e acessórios', imageSrc: acessories, id: 'acessories' },
    { name: 'Outros', imageSrc: others, id: 'others' },
];

export default systemCategories;