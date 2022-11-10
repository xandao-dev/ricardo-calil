<script lang="ts" setup>
import { lawyers } from '~/utils/data/lawyers';
</script>

<template>
    <section id="advogados" class="flex flex-col px-8 py-12 lg:px-12">
        <h2 class="mb-10 text-3xl font-bold lg:text-4xl">Advogados</h2>
        <div v-for="lawyer in lawyers" :key="lawyer.id" class="mb-12 grid grid-cols-12 last:mb-0">
            <img
                class="col-span-12 h-64 w-full object-contain md:order-2 md:col-span-4 lg:col-span-3"
                :src="lawyer.src"
                :alt="'Foto do Advogado: ' + lawyer.name"
            />
            <div class="col-span-12 pt-6 md:order-1 md:col-span-8 md:pt-0 lg:col-span-9">
                <h2 class="text-2xl font-bold lg:text-3xl" v-text="lawyer.name"></h2>
                <span class="text-coolGray-600 text-xs uppercase tracking-wide">OAB {{ lawyer.oab }}</span>
                <p class="mt-3 text-gray-800 md:mr-12 lg:mr-28" v-text="lawyer.summary"></p>
            </div>
        </div>
    </section>
</template>
