import product0 from "@/public/imgs/product-0.webp";
import product1 from "@/public/imgs/product-1.webp";
import product2 from "@/public/imgs/product-2.webp";
import product3 from "@/public/imgs/product-3.webp";
import product4 from "@/public/imgs/product-4.webp";
import product5 from "@/public/imgs/product-5.webp";
import product6 from "@/public/imgs/product-6.webp";
import product7 from "@/public/imgs/product-7.webp";
import product8 from "@/public/imgs/product-8.webp";
import product9 from "@/public/imgs/product-9.webp";
import product10 from "@/public/imgs/product-10.webp";
import product11 from "@/public/imgs/product-11.webp";
import product12 from "@/public/imgs/product-12.webp";
import product13 from "@/public/imgs/product-13.webp";
import product14 from "@/public/imgs/product-14.webp";
import product15 from "@/public/imgs/product-15.webp";

const productsList = [
    {
        categorie: 'damaged-eletronic',
        keywords: ['phone'],
        product: {
            name: 'Tablet m8w pkus5 plus',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Este tablet é um tablet híbrido, ele não está funcionando mais altualmente Devido a super aquecimento e o seu conserto ficou inviável por custava mais que a metade do preço original.
            </span>,
            price: 99.9, photo: product0, id: 'product-0'
        },
        user: 'Elena Maria Solsa', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'acessories',
        keywords: [],
        product: {
            name: 'Placa Mãe Dell Optiplex 380 Dt Pn Fr6wh Funcionando Ok',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            PRODUTO TESTADO OTIMO ESTADO 03 MESES DE GARANTIA Placa Mãe Dell Optiplex ORIGINAL.<br/>
            GABINETE 380 DT DESCKTOP E GABINETE TORRE MT.<br/>
            PLACA TESTADA E COM GARANTIA.<br/>
            EMITO NFE PARA EMPRESAS SE PRECISAR.<br/>
            Garantia do vendedor: 90 dias.<br/>
            Garantia do vendedor: 3 meses.
            </span>,
            price: 189.9, photo: product1, id: 'product-1'
        },
        user: 'Marian Lima Carvalho', local: 'Santarém, Para(PA)'
    }, {
        categorie: 'acessories',
        keywords: [],
        product: {
            name: 'Disco sólido interno Western Digital WD Green WDS480G2G0B 480GB verde (seminovo)',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            E útil para salvar programas e documentos com sua capacidade de 480 GB.<br/>
            Resistente aos choques fortes.<br/>
            Mais espaço no seu PC com o fator de forma M.2 2280.<br/>
            E compatível com Windows.<br/>
            Disco externo desktop.<br/>
            Interface de conexão: sata III.<br/>
            Adequado para pc e notebook.<br/>
            Imagens meramente ilustrativas.
            </span>,
            price: 149.9, photo: product2, id: 'product-2'
        },
        user: 'Wellington Silva de Souza', local: 'Balneário Camboriú, Santa Catarina (SC)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['tv'],
        product: {
            name: 'Smart Tv 32 Android Wifi Bluetooth Bivolt Com Pixel Queimado',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Usada<br/>
            Possui pequenos pontos pixel na tela.<br/>
            TV funcionando<br/>
            Realizando a compra vc pode solicitar um video onde iremos detalhar os pontos.<br/>
            Compre somente se concordar com o estado que a TV se encontra.<br/>
            TV possui<br/>
            - Android<br/>
            - Wi-FI<br/>
            - Bluettoth<br/>
            - Apps: Netflix, Youtube, Globoplay, Disney+, Prime Video<br/>
            - Controle com Comando de Voz<br/>
            Todas as funções funcionando.<br/>
            O que acompanha:<br/>
            - TV<br/>
            - Cabo de Força<br/>
            - Controle Remoto com Comando de Voz<br/>
            - Cabo AV/RCA<br/>
            GARANTIA DE 90 DIAS, NECESSÁRIO LEVAR OU ENVIAR EM ASSISTÊNCIA EM GUARULHOS.
            </span>,
            price: 719.9, photo: product3, id: 'product-3'
        },
        user: 'Marcos Augusto da Silva', local: 'Guarulhos, São Paulo (SP)'
    }, {
        categorie: 'redirect',
        keywords: ['notebook'],
        product: {
            name: 'Notebook Positivo',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Notebook positivo com Hdmi Core duo 2.00ghz 4 GB de Ram Hd320 win 10 notebook, usado e revisado.
            </span>,
            price: 699.9, photo: product4, id: 'product-4'
        },
        user: 'Victor Gabriel Santos Silva', local: 'São José, Santa Catarina (SP)'
    }, {
        categorie: 'redirect',
        keywords: ['phone'],
        product: {
            name: 'Smartphone Samsung A22',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            SAMSUNG A22 128GB CELULAR COM POUCAS MARCAS DE USO ACOMPANHADO DE CARREGADOR ORIGINAL.
            </span>,
            price: 699.9, photo: product5, id: 'product-5'
        },
        user: 'Isadora Santos', local: ' São Caetano do Sul, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['phone'],
        product: {
            name: 'IPAD',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            iPad com problema de inicialização e tela totalmente apagada, identificação do defeito desconhecida. Ideal para quem entende de consertos e busca uma oportunidade de compra.
            </span>,
            price: 199.9, photo: product6, id: 'product-6'
        },
        user: 'Maria Eduarda Costa', local: 'Piedade, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['notebook'],
        product: {
            name: 'Notebook Asus ×44c',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Notebook Asus ×44c em condição de uso, liga e opera normalmente. Necessita de substituição de teclado e possivelmente do touchpad. Tela em bom estado, sem marcas visíveis. HD, memória e processador em pleno funcionamento. Carcaça intacta, drive de DVD operacional e porta de carregamento em bom estado. Acompanha carregador.
            </span>,
            price: 449.9, photo: product7, id: 'product-7'
        },
        user: 'Pedro Henrique da Silva Costa', local: 'Recife, Pernambuco (PE)'
    }, {
        categorie: 'acessories',
        keywords: [],
        product: {
            name: 'Vendo Placa Mãe para Notebook Samsung NP275E4E/BA41-02239A.',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            - Processador Integrado: AMD E1-1500<br/>
            - Marca: Samsung<br/>
            - Linha: NP275<br/>
            - Modelo: BA41-02239A<br/>
            - Cor: Azul<br/>
            <br/>
            Outras características:<br/>
            - Plataforma: AMD<br/>
            - Socket: Amd<br/>
            - Fator de forma: Notebook<br/>
            - Slots de expansão: 2<br/>
            - Aplicações: Notebook<br/>
            - Com processador: Sim<br/>
            <br/>
            Especificações de memória RAM:<br/>
            - Tipo: DDR3<br/>
            - Capacidade máxima suportada: 16GB<br/>
            <br/>
            Garanta o pleno funcionamento do seu notebook com esta placa mãe. Ideal para reposição ou upgrades. Entre em contato para mais detalhes.
            </span>,
            price: 399.9, photo: product8, id: 'product-8'
        },
        user: 'Beatriz Gomes', local: 'São Paulo, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['phone'],
        product: {
            name: 'galaxy win duos',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Este galaxy win duos, ele foi o meu segundo celular que eu possui, e ele acabou ficando parado por causa que eu acabei comprando um celular mais recente, pois ele não atendia mais as minhas necessidades. E eu acabei emprestando ele para alguns parentes e ele acabou neste estado, mas eu não arrumei ele por causas... Bem claras eu acho... Ele é um celular muito antigo atualmente e não suporta mais nada hoje em dia. E eu não tenho mais oque fazer com ele atualmente.
            </span>,
            price: 249.9, photo: product9, id: 'product-9'
        },
        user: 'Jordan dos Santos Silva', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['notebook'],
        product: {
            name: 'Pavilion dv7',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Um amigo me deu este notebook de presente mais ele veio com problemas e não segura a carga e não compensa mais fazer a manutenção
            </span>,
            price: 174.9, photo: product10, id: 'product-10'
        },
        user: 'Beatriz da Silva', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'redirect',
        keywords: ['notebook'],
        product: {
            name: 'Dell MT-G90BK',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            cpu amd fx 6300 3.5ghz<br/>
            mem 8gb ddr3<br/>
            vga amd r7 250x 1gb (com defeito, basta levar ao técnico)<br/>
            hd 500gb
            </span>,
            price: 149.9, photo: product11, id: 'product-11'
        },
        user: 'Paulo Machado Rocha Silva', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['phone'],
        product: {
            name: 'Samsung j7',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Tenho este celular que acabei recuperando fui assaltado e foi recuperando porém acabei recuperando ele quebrado e já tinha comprado um novo não sei todos os problemas só a tela mesmo
            </span>,
            price: 149.9, photo: product12, id: 'product-12'
        },
        user: 'Douglas Pereira Ramos', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'damaged-eletronic',
        keywords: ['phone'],
        product: {
            name: 'Tablet Bak 784',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            TABLET DA MARCA BAK, MODELO 784, PRODUTO LIGANDO E COM PROBLEMAS EM SUA FUNCIONALIDADE,  PODE SER UTILIZADO PARA RETIRADA DE PEÇAS NAO TENHO MIAS ENTERSES
            </span>,
            price: 74.9, photo: product13, id: 'product-13'
        },
        user: 'Carol Alves Peres', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'redirect',
        keywords: ['tv'],
        product: {
            name: 'Televisor Philips',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Televisor usado, testado e funcionando perfeitamente, , Entre em contato pelo campo de mensagens que logo retornaremos e resolveremos da forma mais rápida possível.
            </span>,
            price: 199.9, photo: product14, id: 'product-14'
        },
        user: 'Marcos Silva Oliveira', local: 'Sorocaba, São Paulo (SP)'
    }, {
        categorie: 'redirect',
        keywords: ['notebook'],
        product: {
            name: 'Notebook Hp I7 Envy',
            Desc: ({ ...contexts }) => <span { ...contexts }>
            Este é um computador com uma CPU Intel Core i7-7500U, classificada como a número 171 entre as CPUs mais populares, e uma GPU Intel HD Graphics 620, classificada como a número 300 entre as GPUs mais populares.<br/>
            <br/>
            A tela é um display de 15,6 polegadas com resolução 4K UHD (3840 x 2160) e tecnologia IPS.<br/>
            O armazenamento inclui um SSD de 128 GB e um HDD de 1 TB a 5400 rpm, além de um slot M.2 que suporta PCIe NVMe.<br/>
            A memória RAM é de 16 GB DDR4 e o sistema operacional é o Windows 10.<br/>
            <br/>
            O computador tem dimensões de 378 x 255 x 18 mm e pesa 2,23 kg (4,9 lbs).<br/>
            <br/>
            Foi comprado nos EUA em 2017, mas teve pouco uso e esta bem conservado devido ao fato de ser usado principalmente em viagens, das quais não houve muitas.
            </span>,
            price: 629.9, photo: product15, id: 'product-15'
        },
        user: 'Antonio Gonçalves', local: 'Sorocaba, São Paulo (SP)'
    }
];

export default productsList;