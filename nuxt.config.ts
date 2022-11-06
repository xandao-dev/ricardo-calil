// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	// target: 'static',

	typescript: {
		shim: false,
		/**
		 * !! WARN !!
		 * Dangerously allow production builds to successfully complete even if
		 * your project has type errors.
		 *
		 * This will show us errors on dev, but not stop builds for production
		 */
		// typeCheck: process.env.NODE_ENV !== 'production',
	},

	modules: [
		// https://github.com/Maronato/vue-toastification
		// 'vue-toastification/nuxt',
		// https://tailwindcss.nuxtjs.org/
		'@nuxtjs/tailwindcss',
		// https://prismic.nuxtjs.org/
		// '@nuxtjs/prismic',
	],

	nitro: {
		prerender: {
			routes: ['/trabalhista', '/previdenciario', '/civil', '/criminal'],
		},
	},

	/*
	BY HAND
	gtm: {
		pageTracking: false, // Prevent double events when using with GA
	},
	toast: {
		timeout: 5000,
		position: 'bottom-right',
	},
	*/

	/*
	LATER
	https://v3.nuxtjs.org/migration/plugins-and-middleware

	prismic: {
		endpoint: process.env.PRISMIC_ENDPOINT,
		modern: true,
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
	},
	plugins: [{ src: '~/plugins/prismicLinks', mode: 'client' }],
	*/
});
