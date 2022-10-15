<template>
	<div>
		<header class="sticky top-0 z-50">
			<Navbar></Navbar>
		</header>
		<aside>
			<Sidebar></Sidebar>
		</aside>
		<main class="max-w-screen-xl mx-auto">
			<nuxt />
		</main>
		<footer>
			<Footbar></Footbar>
		</footer>
		<whatsapp-fab :whatsapp="social.whatsapp"></whatsapp-fab>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { MetaInfo } from 'vue-meta';
	import WhatsappFab from '~/components/WhatsappFab.vue';

	export default Vue.extend({
		components: { WhatsappFab },
		data: () => ({
			social: {
				whatsapp: '556233752216',
				facebook: 'ricardocaliladv',
				instagram: 'dr.ricardocalil',
				phone: '+55 62 3375-2216',
			},
			icons: {
				menu: '/icons/menu.svg',
				menuOpen: '/icons/menu-open.svg',
				phone: '/icons/phone.svg',
				whatsapp: '/icons/whatsapp.svg',
				facebook: '/icons/facebook.svg',
				instagram: '/icons/instagram.svg',
				linkedin: '/icons/linkedin.svg',
				location: '/icons/location.svg',
				map: '/icons/map.svg',
			},
		}),
		head(): MetaInfo {
			return {
				bodyAttrs: {
					class: this.isSidebarOpen ? 'overflow-hidden' : '',
				},
			};
		},
	});
</script>
