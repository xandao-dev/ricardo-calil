<script lang="ts" setup>
interface IError {
    statusCode: number;
    message: string;
}
const props = defineProps<{ error: IError }>();
console.error(props.error.message);

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <section
        v-if="error.statusCode === 404"
        class="flex flex-col items-center justify-center px-8 py-12 text-center lg:px-12"
    >
        <h2 class="mb-12 text-9xl font-extrabold"><span class="sr-only">Erro</span>404</h2>
        <p class="mb-12 text-2xl font-semibold md:text-3xl">Desculpe, não encontramos esta página</p>
        <button
            class="mx-auto w-full select-none rounded bg-primary py-3 font-semibold text-white hover:bg-primary-700 focus:outline-none active:bg-primary-800 sm:w-auto sm:px-24 sm:py-4 md:text-xl"
            @click="handleError"
        >
            Início
        </button>
    </section>
    <section v-else class="flex flex-col items-center justify-center px-8 py-12 text-center lg:px-12">
        <h2 class="mb-12 text-9xl font-extrabold"><span class="sr-only">Erro</span></h2>
        <p class="mb-12 text-2xl font-semibold md:text-3xl">Desculpe, esta página está indisponível</p>
        <button
            class="mx-auto w-full select-none rounded bg-primary py-3 font-semibold text-white hover:bg-primary-700 focus:outline-none active:bg-primary-800 sm:w-auto sm:px-24 sm:py-4 md:text-xl"
            @click="handleError"
        >
            Início
        </button>
    </section>
</template>

<style scoped>
section::before {
    content: '';
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('/textures/grainy.png');
    background-repeat: repeat;
    opacity: 0.1;
}
</style>
