import Image from "next/image";
import brokenPhone from "@/public/imgs/broken-phone.png";

const systemCategories = [
    { name: 'Eletrônico estragado', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'damaged-phones1' },
    { name: 'Recondicionar', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'damaged-phones2' },
    { name: 'Peças e acessórios', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'damaged-phones3' },
    { name: 'Outros', ImageCategorie: () => <Image alt='' src={brokenPhone}/>, id: 'damaged-phones4' },
];

export default systemCategories;