<template>
	<section class="px-8 py-12 flex flex-col gap-12 lg:px-12 lg:pb-12 xl:px-16">
		<div v-for="lawyer in lawyers" :key="lawyer.id" class="grid grid-cols-12">
			<img
				class="col-span-12 object-contain w-full h-64 md:order-2 md:col-span-4 lg:col-span-3 xl:col-span-2"
				:src="lawyer.src"
				:alt="'Foto do Advogado: ' + lawyer.name"
			/>
			<div class="col-span-12 pt-6 md:order-1 md:col-span-8 lg:col-span-9 xl:col-span-10">
				<h1 class="text-4xl font-bold text-gray-800" v-text="lawyer.name"></h1>
				<span class="text-xs tracking-wide uppercase text-coolGray-600">OAB {{ lawyer.oab }}</span>
				<p class="mt-3 text-gray-800" v-text="lawyer.summary"></p>
			</div>	
		</div>
	</section>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	data: () => ({
		lawyers: [
			{
				id: 0,
				src: '/lawyers/ricardo.webp',
				lazyUrl: '/lawyers/ricardo_lqip.webp',
				name: 'Dr. Ricardo Calil',
				oab: '12.120',
				summary:
					'Advogado atuante desde 1992, articulista e com diversos artigos publicados em jornais e revistas especializadas em direito. Também é ex-presidente da OAB de Itaberaí, presidente atual da Academia Itaberina de Letras e Artes (AILA) e sócio-fundador da Confraria Internacional de Literatura e Artes (CILA).',
			},
			{
				id: 1,
				src: '/lawyers/lucilo.webp',
				lazyUrl: '/lawyers/lucilo_lqip.webp',
				name: 'Dr. Lucilo Neto',
				oab: '47.557',
				summary: 'Advogado formado na Puc/GO em 2015, pós-graduado em prática trabalhista e previdenciária.',
			},
		],
	}),
});
</script>
<style scoped>
	.margin-wrapper {
		/* Dynamic Margin */

		/* Center the container and keep adding margin after the width reach 1400px */
    	margin: 0 auto;

		/* Padding from 0.875rem to 2.5rem. 2.5vw in a viewport of 1366 is more or less 34px */
		padding: 0 clamp(0.875rem, 2.5vw, 2.5rem);

		/* After 1200px of pure content the margin starts to act. 
			 min(2.5vw, 2.5rem) * 2 -> Means 2 times the current padding, 
			 with this we can guarantee that the content will have the maximum of 1400px ignoring the padding.
		*/
    	width: min(100%, 1200px + min(2.5vw, 2.5rem) * 2);
	}
	.auto-grid {
		/* Dynamic Grid Columns */

		/* https://blog.logrocket.com/flexible-layouts-without-media-queries/ */
		grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
	}
	.dynamic-img {
		width: clamp(min(200px, 100%), 20vw, 350px);
	}
</style>