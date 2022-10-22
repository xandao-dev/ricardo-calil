interface IExpertiseAreaHeroInfo {
	title: string;
	description: string;
}

interface IExpertisePageInfo {
	hero: IExpertiseAreaHeroInfo;
}

interface IExpertiseArea {
	id: number;
	title: string;
	description: string;
	src: string;
	target: null | string;
	pageInfo: null | IExpertisePageInfo;
}

const areas: IExpertiseArea[] = [
	{
		id: 0,
		src: '',
		title: 'Trabalhista',
		description: 'Somos especialistas nas causas trabalhistas que ocorrem entre o empregado e o empregador',
		target: '/trabalhista',
		pageInfo: {
			hero: {
				title: 'Direito do Trabalho',
				description:
					'Seu empregador está cometendo irregularidades e você está de alguma forma sendo prejudicado no âmbito profissional?',
			},
		},
	},
	{
		id: 1,
		src: '',
		title: 'Previdenciário',
		description:
			'Garantimos os direitos quanto à assistência e Previdência Social, relacionadas a morte, idade e doenças',
		target: '/previdenciario',
		pageInfo: null,
	},
	{
		id: 2,
		src: '',
		title: 'Cível',
		description: 'Cuidamos dos direitos do cidadão, pessoas físicas ou jurídicas, perante a sociedade',
		target: '/civel',
		pageInfo: null,
	},
	{
		id: 3,
		src: '',
		title: 'Criminal',
		description: 'Prestamos serviços na área criminal com dedicação e excelência em defesa de nossos clientes',
		target: '/criminal',
		pageInfo: null,
	},
	{
		id: 4,
		src: '',
		title: 'Consumidor',
		description: 'Tratamos das relações e problemas entre o consumidor e o fornecedor de bens ou de serviços',
		target: null, // '/consumidor',
		pageInfo: null,
	},
	{
		id: 5,
		src: '',
		title: 'Família',
		description: 'Cuidamos das relações familiares e das obrigações e direitos decorrentes dessas relações',
		target: null, // '/familia',
		pageInfo: null,
	},
	{
		id: 6,
		src: '',
		title: 'Imobiliário',
		description: 'Lidamos com o direito que envolva a compra, venda, doação, sucessão e troca de bens imóveis',
		target: null, // '/imobiliario',
		pageInfo: null,
	},
	{
		id: 7,
		src: '',
		title: 'Contratual',
		description: 'Tratamos das relações que surgem em todos os tipos de contratos para garantir seus direitos',
		target: null, // '/contratual',
		pageInfo: null,
	},
];

export { areas };
export type { IExpertiseArea, IExpertisePageInfo, IExpertiseAreaHeroInfo };
