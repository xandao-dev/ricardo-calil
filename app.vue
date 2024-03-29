<script lang="ts" setup>
import WhatsappFab from '~/components/WhatsappFab.vue';
import { contacts } from '~/utils/data/contacts';

const appConfig = useAppConfig();

useHead({
    title: appConfig.PAGE_TITLE,
    htmlAttrs: {
        lang: 'pt-BR',
    },
    bodyAttrs: {
        class: 'overflow-hidden',
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appConfig.PAGE_DESCRIPTION },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: appConfig.PAGE_TITLE },
        { name: 'application-name', content: appConfig.PAGE_TITLE },
        { name: 'msapplication-TileColor', content: appConfig.PRIMARY_COLOR },
        { name: 'theme-color', content: appConfig.PRIMARY_COLOR },
        { property: 'og:title', content: appConfig.PAGE_TITLE },
        { name: 'twitter:title', content: appConfig.PAGE_TITLE },
        { name: 'description', content: appConfig.PAGE_DESCRIPTION },
        { property: 'og:description', content: appConfig.PAGE_DESCRIPTION },
        { name: 'twitter:description', content: appConfig.PAGE_DESCRIPTION },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:image', content: `${appConfig.WEBSITE_HOME_DOMAIN}/logo-og.png` },
        { name: 'twitter:image', content: `${appConfig.WEBSITE_HOME_DOMAIN}/logo-og.png` },
        { name: 'facebook-domain-verification', content: appConfig.FACEBOOK_VERIFICATION },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0C75A7' },
    ],
});
</script>

<template>
    <div class="selection:bg-primary selection:text-white">
        <header class="sticky top-0 z-50">
            <Navbar></Navbar>
        </header>
        <aside>
            <Sidebar></Sidebar>
        </aside>
        <main class="h-screen-minus-navbar overflow-y-auto overflow-x-hidden">
            <div class="min-h-full-minus-footbar mx-auto max-w-screen-xl">
                <NuxtPage />
            </div>
            <footer class="mx-auto max-w-screen-xl">
                <Footbar></Footbar>
            </footer>
        </main>
        <whatsapp-fab :whatsapp="contacts.whatsapp"></whatsapp-fab>
    </div>
</template>

<style scoped>
main::before {
    content: '';
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('/textures/grainy.png');
    background-repeat: repeat;
    opacity: 0.1;
}
</style>
