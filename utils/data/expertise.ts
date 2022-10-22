interface IExpertiseAreaHeroInfo {
	title: string;
	description: string;
}

interface IExpertiseFullDescription {
	beginningTexts: string[];
	endingTexts: string[];
}

interface IExpertisePageInfo {
	hero: IExpertiseAreaHeroInfo;
	subExpertises: string[];
	fullDescription: IExpertiseFullDescription;
}

interface IExpertiseArea {
	id: number;
	title: string;
	description: string;
	target: null | string;
	pageInfo: null | IExpertisePageInfo;
}

const areas: IExpertiseArea[] = [
	{
		id: 0,
		title: 'Trabalhista',
		description: 'Somos especialistas nas causas trabalhistas que ocorrem entre o empregado e o empregador',
		target: '/trabalhista',
		pageInfo: {
			hero: {
				title: 'Direito do Trabalho',
				description:
					'Seu empregador está cometendo irregularidades e você está de alguma forma sendo prejudicado no âmbito profissional?',
			},
			subExpertises: [
				'Trabalho sem carteira assinada',
				'Falta de pagamento',
				'Direitos de gestantes',
				'Horas extras irregulares',
				'Insalubridade e periculosidade',
				'Doença ocupacional',
				'Acidentes de Trabalho',
				'Demissão com ou sem justa causa',
				'Desvio de Função',
				'Rescisão Indireta',
			],
			fullDescription: {
				beginningTexts: [
					'Você tem todo direito de exigir os cumprimentos dos seus direitos como colaborador!',
					'Ricardo Calil & Advogados Associados , pode amparar você judicialmente e fazer com que você encontre reparação.',
				],
				endingTexts: [
					'A lei trabalhista garante a todos os trabalhadores diversos direitos, que infelizmente algumas empresas deixam de cumprir em sua totalidade.',
					'Além do pagamento pelos serviços prestados, a empresa tem outras obrigações com os seus funcionários e o descumprimento abre margem para processos trabalhistas.',
					'Nosso escritório já atuou em diversos casos como o seu e com nossa expertise conhecemos as melhores estratégias de defesa para você tenha o desfecho mais favorável possível, de acordo com o seu caso garantindo todo processo judicial trabalhista.',
				],
			},
		},
	},
	{
		id: 1,
		title: 'Previdenciário',
		description:
			'Garantimos os direitos quanto à assistência e Previdência Social, relacionadas a morte, idade e doenças',
		target: '/previdenciario',
		pageInfo: {
			hero: {
				title: 'Direito Previdenciário',
				description:
					'Solicitação de aposentadoria e acompanhamento administrativo, cálculo do valor do benefício, Auxilio-doença, LOAS, Auxílio-Acidente entre outros',
			},
			subExpertises: [
				'Aposentadoria por Idade',
				'Falta de pagamento',
				'Aposentadoria por Invalidez',
				'Aposentadoria Especial',
				'Aposentadoria do Professor',
				'Aposentadoria de PCD',
				'Revisão de Benefícios',
				'BPC & LOAS',
				'Auxílio Doença',
				'Auxílio Acidente',
			],
			fullDescription: {
				beginningTexts: [
					'Nossa equipe cinta com especialistas altamente capacitados para garanti o recebimento do seu benefício!',
					'Ricardo Calil & Advogados Associados , pode amparar você judicialmente e fazer com que você encontre reparação.',
				],
				endingTexts: [
					'O Direito Previdenciário tem como objetivo garantir o seu direito quanto à assistência e Previdência Social, relacionadas à idade, doença e morte.',
					'Com o passar do tempo, ocorre muitas mudanças da Previdência Social que impacta diretamente à você contribuinte.',
					'São alterações em vários aspectos, principalmente na maneira que rege cada lei e como isso impacta nos cálculos de benefícios. ',
				],
			},
		},
	},
	{
		id: 2,
		title: 'Civil',
		description: 'Cuidamos dos direitos do cidadão, pessoas físicas ou jurídicas, perante a sociedade',
		target: '/civil',
		pageInfo: {
			hero: {
				title: 'Direito Civil',
				description:
					'Conte com a nossa vasta experiência na áreas de cobranças, inventários, divórcios, indenizações e direitos do consumidor',
			},
			subExpertises: [
				'Direito à heranças e inventários',
				'Cobranças de dívidas',
				'Imobiliário',
				'Código Defesa do Consumidor',
				'Seguros e Resseguros',
			],
			fullDescription: {
				beginningTexts: [
					'Você tem todo direito de exigir os cumprimentos dos seus direitos como civil!',
					'Ricardo Calil & Advogados Associados , pode amparar você judicialmente e fazer com que você encontre reparação.',
				],
				endingTexts: [
					'A Advocacia Cível é uma área de atuação que engloba todas as questões de relacionamento civil. Nossa equipe está constantemente buscando soluções para trazer o devido amparo para nossos clientes.',
					'O escritório de advocacia Ricardo Calil & Advogados Associados atua mais de 30 anos e conta com uma grande expertise e estratégias em soluções legais que contribuem para o desenvolvimento de seus clientes.',
				],
			},
		},
	},
	{
		id: 3,
		title: 'Criminal',
		description: 'Prestamos serviços na área criminal com dedicação e excelência em defesa de nossos clientes',
		target: '/criminal',
		pageInfo: {
			hero: {
				title: 'Direito Criminal',
				description:
					'Conte com uma equipe especializada para defender seus direitos! Estamos comprometidos com as garantias e com o devido processo legal',
			},
			subExpertises: [
				'Crimes Comuns',
				'Flagrante',
				'Inquérito Policial',
				'Execução Penal',
				'Recursos',
				'Prisões',
				'Tráfico de drogas',
				'Crimes Patrimoniais',
				'Violência doméstica',
				'Crimes Contra a Vida',
			],
			fullDescription: {
				beginningTexts: [
					'Visamos uma defesa ampla, contínua e comprometida em todas as fases do processo!',
					'Ricardo Calil & Advogados Associados , pode amparar você judicialmente e fazer com que você encontre reparação.',
				],
				endingTexts: [
					'A área de Direito Criminal ou Direito Penal, tem como objetivo principal à realização de defesas contra acusações de prática de crime contra pessoa física e/ou jurídicas, tanto na esfera Estadual quando federal.',
					'Além da defesa, nosso escritório também tem forte atuação na representação de vítimas de crimes.',
					'Para maiores informações, entre em contato com nossos advogados.',
				],
			},
		},
	},
	{
		id: 4,
		title: 'Consumidor',
		description: 'Tratamos das relações e problemas entre o consumidor e o fornecedor de bens ou de serviços',
		target: null, // '/consumidor',
		pageInfo: null,
	},
	{
		id: 5,
		title: 'Família',
		description: 'Cuidamos das relações familiares e das obrigações e direitos decorrentes dessas relações',
		target: null, // '/familia',
		pageInfo: null,
	},
	{
		id: 6,
		title: 'Imobiliário',
		description: 'Lidamos com o direito que envolva a compra, venda, doação, sucessão e troca de bens imóveis',
		target: null, // '/imobiliario',
		pageInfo: null,
	},
	{
		id: 7,
		title: 'Contratual',
		description: 'Tratamos das relações que surgem em todos os tipos de contratos para garantir seus direitos',
		target: null, // '/contratual',
		pageInfo: null,
	},
];

export { areas };
export type { IExpertiseArea, IExpertisePageInfo, IExpertiseAreaHeroInfo, IExpertiseFullDescription };
