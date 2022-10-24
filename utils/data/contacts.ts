interface IContacts {
	whatsapp: string;
	facebook: string;
	instagram: string;
	phone: string;
	email: string;
}

const contacts: IContacts = {
	whatsapp:
		'https://wa.me/556233752216?text=Ol%C3%A1%2C%20como%20vai%3F%20Peguei%20seu%20contato%20atrav%C3%A9s%20do%20site.',
	facebook: 'https://www.facebook.com/ricardocaliladv',
	instagram: 'https://www.instagram.com/calilfonsecaadvogados',
	phone: '+55 62 3375-2216',
	email: 'ricardocalil@hotmail.com',
};

export { contacts };
export type { IContacts };
