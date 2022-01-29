<template>
	<nav v-if="isSidebarOpen" class="absolute min-h-screen min-w-full bg-gray-100 md:hidden">
		<div class="text-sm font-medium text-gray-600">
			<div v-for="section in sections" :key="section.target">
				<NuxtLink
					v-if="!section.hasSubSections"
					class="
						flex
						items-center
						px-4
						py-3
						transition
						cursor-pointer
						group
						hover:bg-gray-100 hover:text-gray-900
					"
					:to="section.target"
				>
					<img v-if="section.icon" :src="section.icon" />
					<span v-text="section.title"></span>
				</NuxtLink>

				<template v-else>
					<div
						class="
							flex
							items-center
							justify-between
							px-4
							py-3
							transition
							cursor-pointer
							group
							hover:bg-gray-100 hover:text-gray-900
						"
						@click="toggleSection(section)"
					>
						<div class="flex items-center">
							<img v-if="section.icon" :src="section.icon" />
							<span v-text="section.title"></span>
						</div>
						<svg
							class="flex-shrink-0 w-4 h-4 ml-2 transition transform"
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
					<div v-show="section.open" class="mb-4">
						<NuxtLink
							v-for="subSection in section.subSections"
							:key="subSection.target"
							class="
								flex
								items-center
								py-2
								pl-12
								pr-4
								transition
								cursor-pointer
								hover:bg-gray-100 hover:text-gray-900
							"
							:to="subSection.target"
						>
							<span v-text="subSection.title"></span>
						</NuxtLink>
					</div>
				</template>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

interface SubSection {
	title: string;
	target: string;
}
interface Section {
	title: string;
	icon: string;
	target?: string;
	hasSubSections: boolean;
	open?: boolean;
	subSections?: SubSection[];
}

export default Vue.extend({
	data: () => ({
		sections: [
			{
				hasSubSections: false,
				title: 'Início',
				target: '/itaberai#inicio',
				icon: '/icons/home.svg',
			},
			{
				hasSubSections: false,
				title: 'Escritório',
				target: '/itaberai#escritorio',
				icon: '/icons/office.svg',
			},
			{
				hasSubSections: false,
				title: 'Advogados',
				target: '/itaberai#advogados',
				icon: '/icons/lawyers.svg',
			},
			{
				hasSubSections: true,
				title: 'Atuação',
				icon: '/icons/expertise.svg',
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
			{
				hasSubSections: false,
				title: 'Contato',
				target: '/itaberai#contato',
				icon: '/icons/contact.svg',
			},
			{
				hasSubSections: false,
				title: 'Perguntas',
				target: '/itaberai#perguntas',
				icon: '/icons/faq.svg',
			},
			{
				hasSubSections: false,
				title: 'Artigos',
				target: '/artigos',
				icon: '/icons/articles.svg',
			},
		],
		icons: {
			menu: '/icons/menu.svg',
			menuOpen: '/icons/menu-open.svg',
		},
	}),
	computed: {
		...mapState('Hamburger', {
			isSidebarOpen: 'isSidebarOpen',
		}),
	},
	methods: {
		toggleSection(section: Section) {
			section.open = !section.open;
		},
	},
});
</script>
