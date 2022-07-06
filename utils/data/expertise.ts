interface IExpertiseArea {
	id: number;
	title: string;
	description: string;
    src: string;
    target: string;
}

const areas: IExpertiseArea[] =  [
    {
        id: 0,
        src: '',
        title: 'Trabalhista',
        description: 'Somos especialistas nas causas trabalhistas que ocorrem entre o empregado e o empregador',
        target: '/itaberai/trabalhista',
    },
    {
        id: 1,
        src: '',
        title: 'Previdenciário',
        description: 'Garantimos os direitos quanto à assistência e Previdência Social, relacionadas a morte, idade e doenças',
        target: '/itaberai/previdenciario',
    },
    {
        id: 2,
        src: '',
        title: 'Civil',
        description: 'Cuidamos dos direitos do cidadão, pessoas físicas ou jurídicas, perante a sociedade',
        target: '/itaberai/civil',
    },
    {
        id: 3,
        src: '',
        title: 'Consumidor',
        description: 'Tratamos das relações e problemas entre o consumidor e o fornecedor de bens ou de serviços',
        target: '/itaberai/consumidor',
    },
    {
        id: 4,
        src: '',
        title: 'Família',
        description: 'Cuidamos das relações familiares e das obrigações e direitos decorrentes dessas relações',
        target: '/itaberai/familia',
    },
    {
        id: 5,
        src: '',
        title: 'Imobiliário',
        description: 'Lidamos com o direito que envolva a compra, venda, doação, sucessão e troca de bens imóveis',
        target: '/itaberai/imobiliario',
    },
    {
        id: 6,
        src: '',
        title: 'Contratual',
        description: 'Tratamos das relações que surgem em todos os tipos de contratos para garantir seus direitos',
        target: '/itaberai/contratual',
    },
    {
        id: 7,
        src: '',
        title: 'Criminal',
        description: 'Prestamos serviços na área criminal com dedicação e excelência em defesa de nossos clientes',
        target: '/itaberai/criminal',
    },
];

export { areas };
export type { IExpertiseArea };