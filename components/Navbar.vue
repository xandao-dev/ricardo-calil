<template>
	<nav id="navbar" class="bg-white shadow h-16">
		<div class="max-w-screen-xl px-4 py-4 mx-auto md:flex md:justify-between md:items-center lg:px-12">
			<div class="flex justify-between">
				<Logo></Logo>
				<button
					type="button"
					class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 md:hidden"
					aria-label="Alternar menu lateral"
					@click="toggleSidebarStatus"
				>
					<img class="h-6 w-6" :src="icons.menu" alt="Alternar sidebar" />
				</button>
			</div>

			<div class="items-center hidden md:flex">
				<div class="flex flex-col items-center md:flex-row md:gap-x-4 lg:gap-x-8">
					<div v-for="section in sections" :key="section.target" class="contents">
						<NuxtLink
							v-if="!section.hasSubSections"
							class="my-1 text-sm font-medium text-gray-700 hover:text-blue-500 md:my-0 lg:text-base"
							:to="section.target"
							v-text="section.title"
						></NuxtLink>
						<template v-else>
							<div
								class="flex my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:my-0 cursor-pointer"
								@click="toggleSection(section)"
							>
								<span v-text="section.title"></span>
								<svg
									class="w-4 h-4 ml-1 self-end transition origin-center rotate-90"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div v-show="section.open" class="absolute bg-white border-2 my-4">
								<NuxtLink
									v-for="subSection in section.subSections"
									:key="subSection.target"
									class="flex items-center py-1 px-4 transition cursor-pointer hover:bg-gray-100 hover:text-gray-900"
									:to="subSection.target"
									v-text="subSection.title"
								></NuxtLink>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { sidebarEventBus } from '~/utils/events/sidebarEventBus.js';

	interface SubSection {
		title: string;
		target: string;
	}
	interface Section {
		title: string;
		target?: string;
		hasSubSections: boolean;
		open?: boolean;
		subSections?: SubSection[];
	}

	export default Vue.extend({
		data: (vm) => ({
			isSidebarOpen: false,
			sections: [
				{ hasSubSections: false, title: 'Início', target: `${vm.$route.path}#inicio` },
				{ hasSubSections: false, title: 'Escritório', target: `${vm.$route.path}#escritorio` },
				{ hasSubSections: false, title: 'Advogados', target: `${vm.$route.path}#advogados` },
				{ hasSubSections: false, title: 'Atuação', target: `${vm.$route.path}#atuacao` },
				{ hasSubSections: false, title: 'Contato', target: `${vm.$route.path}#contato` },
				{ hasSubSections: false, title: 'Perguntas', target: `${vm.$route.path}#perguntas` },
				{ hasSubSections: false, title: 'Artigos', target: '/artigos' },
			],
			icons: {
				menu: '/icons/menu.svg',
				menuOpen: '/icons/menu-open.svg',
			},
			logo: '/logos/logo_sem_fundo2.svg',
			logoText: '/logos/logo_texto_sem_fundo_black.svg',
		}),
		methods: {
			toggleSidebarStatus() {
				this.isSidebarOpen = !this.isSidebarOpen;
				sidebarEventBus.$emit('isOpen', this.isSidebarOpen);
			},
			toggleSection(section: Section) {
				section.open = !section.open;
			},
		},
	});
</script>
