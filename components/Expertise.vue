<script land="ts" setup>
import { areas } from '~/utils/data/expertise';
</script>

<template>
    <section id="atuacao" class="px-8 py-12 lg:px-12">
        <h2 class="mb-10 text-3xl font-bold lg:text-4xl">Áreas de atuação</h2>
        <div class="row-gap-5 sm:row-gap-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="expertise in areas" :key="expertise.id" class="flex flex-col">
                <h6 class="mb-2 font-semibold leading-5" v-text="expertise.title"></h6>
                <p class="mb-3 text-sm line-clamp-3" v-text="expertise.description"></p>
                <a
                    v-if="expertise.target"
                    :href="expertise.target"
                    class="underline-primary flex flex-1 items-end font-medium underline"
                    ><span>Saiba mais</span></a
                >
            </div>
        </div>
    </section>
</template>
