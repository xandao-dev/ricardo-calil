<template>
	<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
			<img :src="logo" width="64px" height="64px" alt="Logo Ricardo Calil e Advogados Associados" />
		</a>
		<p
			class="text-sm text-gray-500 text-center sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
		>
			&copy; Copyright {{ new Date().getFullYear() }}. Todos os direitos reservados.
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
	</div>
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
