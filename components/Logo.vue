<script lang="ts" setup>
const logo = '/logos/logo_sem_fundo2.svg';
const logoText = '/logos/logo_texto_sem_fundo_black.svg';
</script>

<template>
    <img draggable="false" class="w-8 lg:w-10" :src="logo" alt="logo escritório advocacia" />
    <img
        draggable="false"
        class="w-40 min-w-[8rem] md:ml-2 lg:w-48"
        :src="logoText"
        alt="título da logo do escritório"
    />
</template>
