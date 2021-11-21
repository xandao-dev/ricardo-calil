<template>
	<div class="contents">
		<img class="w-8" :src="logo" alt="logo escritório advocacia" />
		<img class="w-32" :src="logoText" alt="título da logo do escritório" />
	</div>
</template>

<script>
	export default {
		data: () => ({
			logo: '/logos/logo_sem_fundo2.svg',
			logoText: '/logos/logo_texto_sem_fundo_black.svg',
		}),
	};
</script>
