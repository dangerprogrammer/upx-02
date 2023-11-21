import damagedEletronic from "@/public/imgs/damaged-eletronic.webp";
import redirect from "@/public/imgs/redirect.jpeg";
import acessories from "@/public/imgs/acessories.jpeg";
import others from "@/public/imgs/others.jpeg";

const systemCategories = [
    { name: 'Eletrônico estragado', imageSrc: damagedEletronic, id: 'damaged-eletronic' },
    { name: 'Recondicionar', imageSrc: redirect, id: 'redirect' },
    { name: 'Peças e acessórios', imageSrc: acessories, id: 'acessories' },
    { name: 'Outros', imageSrc: others, id: 'others' },
];

export default systemCategories;