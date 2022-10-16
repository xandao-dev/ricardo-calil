<template>
	<nav id="navbar" class="bg-white shadow h-navbar">
		<div class="max-w-screen-xl px-4 h-full mx-auto md:flex md:justify-between md:items-center lg:px-12">
			<div class="flex justify-between h-full">
				<Logo></Logo>
				<button
					type="button"
					class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 md:hidden"
					aria-label="Alternar menu lateral"
					@click="toggleSidebarStatus"
				>
					<img class="h-6 w-6" :src="currentMenuIcon" alt="Alternar sidebar" />
				</button>
			</div>

			<div class="items-center hidden md:flex">
				<div class="flex flex-col items-center md:flex-row md:gap-x-4 lg:gap-x-8">
					<NuxtLink
						v-for="section in sections"
						:key="section.target"
						class="my-1 text-sm font-medium text-gray-700 hover:text-blue-500 md:my-0 lg:text-base"
						:to="section.target"
						v-text="section.title"
					></NuxtLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { sidebarEventBus } from '~/utils/events/sidebarEventBus.js';

	export default Vue.extend({
		data: (vm) => ({
			isSidebarOpen: false,
			sections: [
				{ title: 'Início', target: `${vm.$route.path}#inicio` },
				{ title: 'Escritório', target: `${vm.$route.path}#escritorio` },
				{ title: 'Advogados', target: `${vm.$route.path}#advogados` },
				{ title: 'Atuação', target: `${vm.$route.path}#atuacao` },
				{ title: 'Contato', target: `${vm.$route.path}#contato` },
				{ title: 'Perguntas', target: `${vm.$route.path}#perguntas` },
				{ title: 'Artigos', target: '/artigos' },
			],
			icons: {
				hamburger: '/icons/menu.svg',
				close: '/icons/close.svg',
			},
			logo: '/logos/logo_sem_fundo2.svg',
			logoText: '/logos/logo_texto_sem_fundo_black.svg',
		}),
		computed: {
			currentMenuIcon() {
				return this.isSidebarOpen ? this.icons.close : this.icons.hamburger;
			},
		},
		mounted() {
			sidebarEventBus.$on('isOpen', (isSidebarOpen: boolean) => {
				this.isSidebarOpen = isSidebarOpen;
			});
		},
		methods: {
			toggleSidebarStatus() {
				sidebarEventBus.$emit('isOpen', !this.isSidebarOpen);
			},
		},
	});
</script>
