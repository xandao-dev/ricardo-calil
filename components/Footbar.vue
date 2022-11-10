<script lang="ts" setup>
const logo = '/logos/logo_sem_fundo2.svg';
</script>

<template>
    <section
        id="footer"
        class="h-footbar mx-auto flex flex-col items-center justify-center gap-4 px-8 pt-12 pb-24 sm:flex-row lg:px-12"
    >
        <img class="hidden h-12 w-12 sm:block" :src="logo" alt="Logo Ricardo Calil e Advogados Associados" />
        <p
            class="order-2 text-center text-sm text-gray-500 sm:order-1 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4"
        >
            &copy; Copyright {{ new Date().getFullYear() }}. Todos os direitos reservados. <br />
            Desenvolvido por
            <a class="text-primary" href="https://xandao.dev/" target="_blank" rel="noopener noreferrer">xandao.dev</a>
        </p>
        <div class="order-1 sm:order-2 sm:ml-auto sm:mt-0">
            <SocialMedia facebook instagram />
        </div>
    </section>
</template>
