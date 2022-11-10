import { createGtm } from '@gtm-support/vue-gtm';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const appConfig = useAppConfig();
    const router = useRouter();

    nuxtApp.vueApp.use(
        createGtm({
            id: appConfig.GTM_ID,
            defer: true, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible).
            compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
            nonce: Math.floor(Math.random() * 100000000).toString(), // Will add `nonce` to the script tag
            enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
            debug: config.public.dev, // Whether or not display console logs debugs (optional)
            loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
            vueRouter: router, // Pass the router instance to automatically sync with router (optional)
            trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
        })
    );
});
