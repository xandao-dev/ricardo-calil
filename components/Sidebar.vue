<template>
	<nav
		v-if="isSidebarOpen"
		class="fixed z-10 h-screen-minus-navbar overflow-y-auto w-full bg-gray-100 flex flex-col items-center py-3 md:hidden"
	>
		<div v-for="section in sections" :key="section.target" class="contents group" @click="action">
			<NuxtLink
				class="flex items-center text-lg font-normal text-gray-600 px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
				:to="section.target"
			>
				<span v-text="section.title"></span>
			</NuxtLink>
			<hr class="w-full border-gray-300 my-3 group-last:hidden" />
		</div>
	</nav>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { sidebarEventBus } from '~/utils/events/sidebarEventBus';

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
		}),
		mounted() {
			sidebarEventBus.$on('isOpen', (isSidebarOpen: boolean) => {
				this.isSidebarOpen = isSidebarOpen;
			});
		},
		methods: {
			action() {
				sidebarEventBus.$emit('isOpen', false);
			},
		},
	});
</script>
