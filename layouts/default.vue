<template>
	<div class="contents">
		<header class="sticky top-0 z-50">
			<Navbar></Navbar>
		</header>
		<aside>
			<Sidebar></Sidebar>
		</aside>
		<main class="overflow-y-auto overflow-x-hidden h-screen-minus-navbar">
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
	import { contacts } from '~/utils/data/contacts';

	export default Vue.extend({
		components: { WhatsappFab },
		data: () => ({
			isSidebarOpen: false,
			social: contacts,
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
