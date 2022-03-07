<template>
	<div>
		<header class="sticky top-0 z-50">
			<Navbar></Navbar>
		</header>
		<aside>
			<Sidebar></Sidebar>
		</aside>
		<main>
			<nuxt />
		</main>
		<footer>
			<Footbar></Footbar>
		</footer>
		<whatsapp-fab :whatsapp="social.whatsapp"></whatsapp-fab>
	</div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { MetaInfo } from 'vue-meta';
import WhatsappFab from '~/components/WhatsappFab.vue';

export default {
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
		isSidebarOpen: false,
	}),
	head(): MetaInfo {
		return {
			bodyAttrs: {
				class: this.isSidebarOpen ? 'overflow-hidden' : '',
			},
		};
	},
	computed: {
		...mapState('Hamburger', {
			isSidebarOpen: 'isSidebarOpen',
		}),
	},
};
</script>
