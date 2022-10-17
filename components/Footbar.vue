<template>
	<section
		id="footer"
		class="px-8 pt-12 pb-24 lg:px-12 mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row"
	>
		<img class="hidden sm:block h-12 w-12" :src="logo" alt="Logo Ricardo Calil e Advogados Associados" />
		<p
			class="order-2 text-sm text-gray-500 text-center sm:order-1 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
		>
			&copy; Copyright {{ new Date().getFullYear() }}. Todos os direitos reservados.
		</p>
		<span class="order-1 inline-flex justify-center sm:order-2 sm:ml-auto sm:mt-0 sm:justify-start">
			<a
				class="ml-3 text-gray-500"
				:href="'https://www.facebook.com/' + social.facebook"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img :src="icons.facebook" />
			</a>
			<a
				class="ml-3 text-gray-500"
				:href="'https://www.instagram.com/' + social.instagram"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img :src="icons.instagram" />
			</a>
		</span>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { contacts } from '~/utils/data/contacts';

	export default Vue.extend({
		data: () => ({
			logo: '/logos/logo_sem_fundo2.svg',
			social: contacts,
			icons: {
				facebook: '/icons/facebook.svg',
				instagram: '/icons/instagram.svg',
			},
		}),
	});
</script>
