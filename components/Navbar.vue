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
    <nav id="navbar" class="h-navbar bg-white shadow">
        <div
            class="mx-auto h-full max-w-screen-xl select-none px-4 md:flex md:items-center md:justify-between lg:px-12"
        >
            <div class="flex h-full justify-between">
                <Logo></Logo>
                <button
                    draggable="false"
                    type="button"
                    class="text-gray-700 hover:text-primary-500 focus:outline-none active:text-primary md:hidden"
                    aria-label="Alternar menu lateral"
                    @click="sidebarStore.toggleOpen"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        :class="[!sidebarStore.isOpen ? 'block' : 'hidden', 'h-6 w-6']"
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
                        :class="[sidebarStore.isOpen ? 'block' : 'hidden', 'h-6 w-6']"
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

            <div class="hidden items-center md:flex">
                <div class="flex flex-col items-center md:flex-row md:gap-x-4 lg:gap-x-8">
                    <NuxtLink
                        v-for="section in sections"
                        :key="section.target"
                        draggable="false"
                        class="my-1 text-sm font-medium text-gray-700 hover:text-primary-400 active:text-primary md:my-0 lg:text-base"
                        :to="section.target"
                        >{{ section.title }}</NuxtLink
                    >
                </div>
            </div>
        </div>
    </nav>
</template>
