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
        class="h-screen-minus-navbar fixed z-10 flex w-full flex-col items-center overflow-y-auto bg-gray-100 py-3 md:hidden"
    >
        <div v-for="section in sections" :key="section.target" class="group contents" @click="sidebarStore.toggleOpen">
            <NuxtLink
                class="group flex cursor-pointer items-center px-4 py-3 text-lg font-normal text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                :to="section.target"
            >
                <span v-text="section.title"></span>
            </NuxtLink>
            <hr class="my-3 w-full border-gray-300 group-last:hidden" />
        </div>
    </nav>
</template>
