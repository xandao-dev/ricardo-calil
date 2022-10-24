<template>
	<div class="selection:bg-primary selection:text-white">
		<header class="sticky top-0 z-50">
			<Navbar></Navbar>
		</header>
		<aside>
			<Sidebar></Sidebar>
		</aside>
		<main class="overflow-y-auto overflow-x-hidden h-screen-minus-navbar">
			<div class="max-w-screen-xl mx-auto min-h-full-minus-footbar">
				<nuxt />
			</div>
			<footer class="max-w-screen-xl mx-auto">
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
