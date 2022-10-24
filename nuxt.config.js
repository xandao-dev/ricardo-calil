export default {
	// Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
	ssr: false,
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Runtime Configs: https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
	publicRuntimeConfig: {
		contactFormEndpoint: process.env.CONTACT_FORM_ENDPOINT,
		gtm: {
			id: process.env.GTM_ID,
		},
	},
	privateRuntimeConfig: {},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Advogado em Itaberaí | Ricardo Calil',
		htmlAttrs: {
			lang: 'pt-BR',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'apple-mobile-web-app-title', content: 'Advogado em Itaberaí | Ricardo Calil' },
			{ name: 'application-name', content: 'Advogado em Itaberaí | Ricardo Calil' },
			{ name: 'msapplication-TileColor', content: '#084D6E' },
			{ name: 'theme-color', content: '#084D6E' },
			{ property: 'og:title', content: 'Advogado em Itaberaí | Ricardo Calil' },
			{ name: 'twitter:title', content: 'Advogado em Itaberaí | Ricardo Calil' },
			{
				name: 'description',
				content:
					'Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e simplificada.',
			},
			{
				property: 'og:description',
				content:
					'Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e simplificada.',
			},
			{
				name: 'twitter:description',
				content:
					'Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e simplificada.',
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{ hid: 'og:image', property: 'og:image', content: `${process.env.WEBSITE_HOME_DOMAIN}/logo-og.png` },
			{ hid: 'twitter:image', name: 'twitter:image', content: `${process.env.WEBSITE_HOME_DOMAIN}/logo-og.png` },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0C75A7' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/prismicLinks', mode: 'client' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://prismic.nuxtjs.org/
		'@nuxtjs/prismic',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://github.com/nuxt-community/gtm-module
		'@nuxtjs/gtm',

		// https://github.com/Maronato/vue-toastification
		'vue-toastification/nuxt',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// extractCSS: process.env.NODE_ENV !== 'development',
	},

	// Generate: https://nuxtjs.org/docs/directory-structure/nuxt-config/#generate
	generate: {
		fallback: '404.html',
	},

	gtm: {
		enabled: true,
		id: process.env.GTM_ID,
		pageTracking: false, // Prevent double events when using with GA
	},

	toast: {
		timeout: 5000,
		position: 'bottom-right',
	},

	prismic: {
		endpoint: process.env.PRISMIC_ENDPOINT,
		modern: true,
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
	},

	typescript: {
		/**
		 * !! WARN !!
		 * Dangerously allow production builds to successfully complete even if
		 * your project has type errors.
		 * !! WARN !!
		 *
		 * This will show us errors on dev, but not stop builds for production
		 */
		typeCheck: process.env.NODE_ENV !== 'production',
	},
};
