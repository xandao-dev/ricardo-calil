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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					class="text-primary"
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
				</svg>
			</a>
			<a
				class="ml-3 text-gray-500"
				:href="'https://www.instagram.com/' + social.instagram"
				rel="noopener noreferrer"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					class="text-primary"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
				</svg>
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
		}),
	});
</script>
