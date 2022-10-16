<template>
	<div class="contents">
		<header class="sticky top-0 z-50">
			<Navbar></Navbar>
		</header>
		<aside>
			<Sidebar></Sidebar>
		</aside>
		<main class="overflow-y-auto h-screen-minus-navbar">
			<div class="max-w-screen-xl mx-auto">
				<nuxt />
			</div>
			<footer>
				<Footbar></Footbar>
			</footer>
		</main>
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
			isSidebarOpen: false,
			social: {
				whatsapp: '556233752216',
				facebook: 'ricardocaliladv',
				instagram: 'dr.ricardocalil',
				phone: '+55 62 3375-2216',
			},
		}),
		head(): MetaInfo {
			return {
				bodyAttrs: {
					class: 'overflow-hidden',
				},
			};
		},
	});
</script>
