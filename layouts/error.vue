<template>
	<section
		v-if="error.statusCode === 404 && false"
		class="flex flex-col items-center justify-center text-center px-8 py-12 lg:px-12"
	>
		<h2 class="mb-12 font-extrabold text-9xl"><span class="sr-only">Erro</span>404</h2>
		<p class="text-2xl font-semibold mb-12 md:text-3xl">Desculpe, não encontramos essa página</p>
		<NuxtLink draggable="false" to="/" class="w-full sm:w-auto">
			<button
				class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 font-semibold rounded w-full py-3 mx-auto focus:outline-none sm:px-24 sm:py-4 md:text-xl"
			>
				Início
			</button>
		</NuxtLink>
	</section>
	<section v-else class="flex flex-col items-center justify-center text-center px-8 py-12 lg:px-12">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-40 h-40 mb-12">
			<path
				fill="currentColor"
				d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
			></path>
			<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
			<polygon
				fill="currentColor"
				points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
			></polygon>
			<polygon
				fill="currentColor"
				points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
			></polygon>
		</svg>
		<p class="text-2xl font-semibold md:text-3xl mb-12">Desculpe, ocorreu um erro</p>
		<NuxtLink draggable="false" to="/" class="w-full sm:w-auto">
			<button
				class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 font-semibold rounded w-full py-3 mx-auto focus:outline-none sm:px-24 sm:py-4 md:text-xl"
			>
				Início
			</button>
		</NuxtLink>
	</section>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		layout: 'error',
		props: {
			error: {
				type: Object,
				required: true,
			},
		},
	});
</script>
