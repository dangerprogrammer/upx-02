import Image from "next/image";
import damagedEletronic from "@/public/imgs/damaged-eletronic.webp";
import redirect from "@/public/imgs/redirect.webp";
import acessories from "@/public/imgs/acessories.webp";
import others from "@/public/imgs/others.webp";

const systemCategories = [
    { name: 'Eletrônico estragado', ImageCategorie: () => <Image alt='' src={damagedEletronic}/>, id: 'damaged-eletronic' },
    { name: 'Recondicionar', ImageCategorie: () => <Image alt='' src={redirect}/>, id: 'redirect' },
    { name: 'Peças e acessórios', ImageCategorie: () => <Image alt='' src={acessories}/>, id: 'acessories' },
    { name: 'Outros', ImageCategorie: () => <Image alt='' src={others}/>, id: 'others' },
];

export default systemCategories;