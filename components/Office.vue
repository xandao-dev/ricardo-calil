<script lang="ts" setup>
import { office } from '~/utils/data/office';
</script>

<template>
    <section id="escritorio" class="grid px-8 py-12 sm:grid-cols-12 lg:px-12">
        <div class="col-span-12 mb-12 text-left sm:col-span-4 sm:mb-0">
            <h2 class="text-3xl font-bold text-black lg:text-4xl">Escritório</h2>
            <span class="text-sm font-bold uppercase tracking-wider">Conheça nossa história</span>
        </div>
        <div class="col-span-12 space-y-8 sm:col-span-8 sm:px-0">
            <div class="flex flex-col">
                <h3 class="text-xl font-semibold tracking-wide">Origem</h3>
                <time class="text-coolGray-600 text-xs uppercase tracking-wide">fev 1992</time>
                <p class="mt-3" v-text="office.origin" />
            </div>
            <div class="flex flex-col">
                <h3 class="text-xl font-semibold tracking-wide">Associação</h3>
                <time class="text-coolGray-600 text-xs uppercase tracking-wide">jan 2015</time>
                <p class="mt-3" v-text="office.association" />
            </div>
            <div class="flex flex-col">
                <h3 class="text-xl font-semibold tracking-wide">Conquistas</h3>
                <time class="text-coolGray-600 text-xs uppercase tracking-wide">Jan 2016</time>
                <p class="mt-3" v-text="office.awards" />
            </div>
        </div>
    </section>
</template>
