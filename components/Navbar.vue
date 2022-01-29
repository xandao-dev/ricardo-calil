<template>
	<nav class="bg-white shadow dark:bg-gray-800">
		<div class="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex justify-between">
				<Logo></Logo>
				<button
					type="button"
					class="
						text-gray-500
						dark:text-gray-200
						hover:text-gray-600
						dark:hover:text-gray-400
						focus:outline-none focus:text-gray-600
						dark:focus:text-gray-400
						md:hidden
					"
					aria-label="Alternar menu lateral"
					@click="toggleSidebarStatus"
				>
					<img class="h-6 w-6" :src="icons.menu" alt="Alternar sidebar" />
				</button>
			</div>

			<div class="items-center hidden md:flex">
				<div class="flex flex-col items-center md:flex-row md:mx-6">
					<div v-for="section in sections" :key="section.target">
						<NuxtLink
							v-if="!section.hasSubSections"
							class="
								my-1
								text-sm
								font-medium
								text-gray-700
								dark:text-gray-200
								hover:text-indigo-500
								dark:hover:text-indigo-400
								md:mx-4 md:my-0
							"
							:to="section.target"
							v-text="section.title"
						></NuxtLink>
						<template v-else>
							<div
								class="
									flex
									my-1
									text-sm
									font-medium
									text-gray-700
									dark:text-gray-200
									hover:text-indigo-500
									dark:hover:text-indigo-400
									md:mx-4 md:my-0
									cursor-pointer
								"
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
							<div
								v-show="section.open"
								class="absolute bg-white border-2 my-4 navbar__submenu--position"
							>
								<NuxtLink
									v-for="subSection in section.subSections"
									:key="subSection.target"
									class="
										flex
										items-center
										py-1
										px-4
										transition
										cursor-pointer
										hover:bg-gray-100 hover:text-gray-900
									"
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
import { mapState, mapMutations } from 'vuex';
import { Mutations as HamburgerMutations } from '@/store/Hamburger/types';

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
	data: () => ({
		sections: [
			{ hasSubSections: false, title: 'Início', target: '/itaberai#inicio' },
			{ hasSubSections: false, title: 'Escritório', target: '/itaberai#escritorio' },
			{ hasSubSections: false, title: 'Advogados', target: '/itaberai#advogados' },
			{
				hasSubSections: true,
				title: 'Atuação',
				open: false,
				subSections: [
					{
						title: 'Trabalhista',
						target: '/itaberai/trabalhista',
					},
					{
						title: 'Previdenciário',
						target: '/itaberai/previdenciario',
					},
					{
						title: 'Cívil',
						target: '/itaberai/civil',
					},
					{
						title: 'Consumidor',
						target: '/itaberai/consumidor',
					},
					{
						title: 'Família',
						target: '/itaberai/familia',
					},
					{
						title: 'Imobiliário',
						target: '/itaberai/imobiliario',
					},
					{
						title: 'Contratual',
						target: '/itaberai/contratual',
					},
					{
						title: 'Criminal',
						target: '/itaberai/criminal',
					},
				],
			},
			{ hasSubSections: false, title: 'Contato', target: '/itaberai#contato' },
			{ hasSubSections: false, title: 'Perguntas', target: '/itaberai#perguntas' },
			{ hasSubSections: false, title: 'Artigos', target: '/artigos' },
		],
		icons: {
			menu: '/icons/menu.svg',
			menuOpen: '/icons/menu-open.svg',
		},
		logo: '/logos/logo_sem_fundo2.svg',
		logoText: '/logos/logo_texto_sem_fundo_black.svg',
	}),
	computed: {
		...mapState('Hamburger', {
			isSidebarOpen: 'isSidebarOpen',
		}),
	},
	methods: {
		...mapMutations({
			toggleSidebar: `Hamburger/${HamburgerMutations.TOGGLE_SIDEBAR}`,
		}),
		toggleSidebarStatus() {
			this.toggleSidebar(!this.isSidebarOpen);
		},
		toggleSection(section: Section) {
			section.open = !section.open;
		},
	},
});
</script>

<style>
.navbar__submenu--position {
	transform: translate(-23px);
}
</style>