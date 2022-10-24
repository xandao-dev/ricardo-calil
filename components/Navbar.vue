<template>
	<nav id="navbar" class="bg-white shadow h-navbar">
		<div
			class="max-w-screen-xl px-4 h-full mx-auto select-none md:flex md:justify-between md:items-center lg:px-12"
		>
			<div class="flex justify-between h-full">
				<Logo></Logo>
				<button
					draggable="false"
					type="button"
					class="text-gray-700 hover:text-primary-500 active:text-primary focus:outline-none md:hidden"
					aria-label="Alternar menu lateral"
					@click="toggleSidebarStatus"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						:class="[!isSidebarOpen ? 'block' : 'hidden', 'h-6 w-6']"
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox="0 0 24 24"
						width="24px"
						height="24px"
					>
						<path
							d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						:class="[isSidebarOpen ? 'block' : 'hidden', 'h-6 w-6']"
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						height="24"
						width="24"
						viewBox="0 0 24 24"
					>
						<path
							d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"
						/>
					</svg>
				</button>
			</div>

			<div class="items-center hidden md:flex">
				<div class="flex flex-col items-center md:flex-row md:gap-x-4 lg:gap-x-8">
					<NuxtLink
						v-for="section in sections"
						:key="section.target"
						draggable="false"
						class="my-1 text-sm font-medium text-gray-700 hover:text-primary-400 active:text-primary md:my-0 lg:text-base"
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
		data: () => ({
			isSidebarOpen: false,
			sections: [
				{ title: 'Início', target: '/#inicio' },
				{ title: 'Escritório', target: '/#escritorio' },
				{ title: 'Advogados', target: '/#advogados' },
				{ title: 'Atuação', target: '/#atuacao' },
				{ title: 'Contato', target: '/#contato' },
				{ title: 'Perguntas', target: '/#perguntas' },
				{ title: 'Artigos', target: '/artigos' },
			],
			logo: '/logos/logo_sem_fundo2.svg',
			logoText: '/logos/logo_texto_sem_fundo_black.svg',
		}),
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
