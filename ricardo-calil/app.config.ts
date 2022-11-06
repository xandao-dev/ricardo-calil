export default defineAppConfig({
	contactFormEndpoint: process.env.CONTACT_FORM_ENDPOINT,
	gtm: {
		id: process.env.GTM_ID,
	},

	GTM_ID: process.env.GTM_ID,
	WEBSITE_HOME_DOMAIN: process.env.WEBSITE_HOME_DOMAIN,
	CONTACT_FORM_ENDPOINT: process.env.CONTACT_FORM_ENDPOINT,
	PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
	PRIMARY_COLOR: '#084D6E',
	PAGE_TITLE: 'Advogado em Itaberaí | Ricardo Calil',
	PAGE_DESCRIPTION:
		'Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e simplificada.',
});
