// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    // target: 'static',

    runtimeConfig: {
        public: {
            dev: process.env.NODE_ENV !== 'production',
        },
    },
    typescript: {
        shim: false,
    },
    modules: [
        // https://tailwindcss.nuxtjs.org/
        '@nuxtjs/tailwindcss',
        // https://prismic.nuxtjs.org/
        // '@nuxtjs/prismic',
        // https://pinia.vuejs.org/
        '@pinia/nuxt',
    ],
    nitro: {
        prerender: {
            routes: ['/trabalhista', '/previdenciario', '/civil', '/criminal'],
        },
    },
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
