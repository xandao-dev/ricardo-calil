<template>
	<section
		id="footer"
		class="h-footbar px-8 pt-12 pb-24 lg:px-12 mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row"
	>
		<img class="hidden sm:block h-12 w-12" :src="logo" alt="Logo Ricardo Calil e Advogados Associados" />
		<p
			class="order-2 text-sm text-gray-500 text-center sm:order-1 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
		>
			&copy; Copyright {{ new Date().getFullYear() }}. Todos os direitos reservados.
		</p>
		<div class="order-1 sm:order-2 sm:ml-auto sm:mt-0">
			<SocialMedia facebook instagram />
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';

	export default Vue.extend({
		data: () => ({
			logo: '/logos/logo_sem_fundo2.svg',
		}),
	});
</script>
