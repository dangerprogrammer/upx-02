import Image from "next/image";
import brokenPhone from "@/public/imgs/broken-phone.png";

const systemCategories = [
    { name: 'Eletrônico estragado', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'damaged-eletronic' },
    { name: 'Recondicionar', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'redirect' },
    { name: 'Peças e acessórios', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'acessories' },
    { name: 'Outros', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'others' },
];

export default systemCategories;