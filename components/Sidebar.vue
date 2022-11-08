<script lang="ts" setup>
import { useSidebar } from '~/stores/sidebar';

const sidebarStore = useSidebar();
const sections = [
	{ title: 'Início', target: '/#inicio' },
	{ title: 'Atuação', target: '/#atuacao' },
	{ title: 'Escritório', target: '/#escritorio' },
	{ title: 'Advogados', target: '/#advogados' },
	{ title: 'Contato', target: '/#contato' },
	{ title: 'Perguntas', target: '/#perguntas' },
	{ title: 'Artigos', target: '/artigos' },
];
</script>

<template>
	<nav
		v-if="sidebarStore.isOpen"
		class="fixed z-10 h-screen-minus-navbar overflow-y-auto w-full bg-gray-100 flex flex-col items-center py-3 md:hidden"
	>
		<div
			v-for="section in sections"
			:key="section.target"
			class="contents group"
			@click="sidebarStore.toggleOpen"
		>
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
