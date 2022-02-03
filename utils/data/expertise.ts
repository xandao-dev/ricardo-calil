interface IExpertiseArea {
	id: number;
	title: string;
	description: string;
    src: string;
    iconSrc: string;
    target: string;
}

const areas: IExpertiseArea[] =  [
    {
        id: 0,
        iconSrc: '/expertise-areas/icon-trabalhista.svg',
        src: '',
        title: 'Trabalhista',
        description: '',
        target: '/itaberai/trabalhista',
    },
    {
        id: 1,
        iconSrc: '/expertise-areas/icon-previdenciario.svg',
        src: '',
        title: 'Previdenciário',
        description: '',
        target: '/itaberai/previdenciario',
    },
    {
        id: 2,
        iconSrc: '/expertise-areas/icon-civil.svg',
        src: '',
        title: 'Cívil',
        description: '',
        target: '/itaberai/civil',
    },
    {
        id: 3,
        iconSrc: '/expertise-areas/icon-consumidor.svg',
        src: '',
        title: 'Consumidor',
        description: '',
        target: '/itaberai/consumidor',
    },
    {
        id: 4,
        iconSrc: '/expertise-areas/icon-familia.svg',
        src: '',
        title: 'Família',
        description: '',
        target: '/itaberai/familia',
    },
    {
        id: 5,
        iconSrc: '/expertise-areas/icon-imobiliario.svg',
        src: '',
        title: 'Imobiliário',
        description: '',
        target: '/itaberai/imobiliario',
    },
    {
        id: 6,
        iconSrc: '/expertise-areas/icon-contratual.svg',
        src: '',
        title: 'Contratual',
        description: '',
        target: '/itaberai/contratual',
    },
    {
        id: 7,
        iconSrc: '/expertise-areas/icon-criminal.svg',
        src: '',
        title: 'Criminal',
        description: '',
        target: '/itaberai/criminal',
    },
];

export { areas };
export type { IExpertiseArea };