import Image from "next/image";

const systemCategories = [
    { name: 'Eletrônico estragado', ImageCategorie: () => <Image alt='' src="@/public/imgs/broken-phone.png"/>, id: 'damaged-phones1' },
    { name: 'Recondicionar', ImageCategorie: () => <Image alt='' src="@/public/imgs/broken-phone.png"/>, id: 'damaged-phones2' },
    { name: 'Peças e acessórios', ImageCategorie: () => <Image alt='' src="@/public/imgs/broken-phone.png"/>, id: 'damaged-phones3' },
    { name: 'Outros', ImageCategorie: () => <Image alt='' src="@/public/imgs/broken-phone.png"/>, id: 'damaged-phones4' },
];

export default systemCategories;