<template>
	<section class="px-8 py-12 flex flex-col gap-12 lg:px-12">
		<div v-for="lawyer in lawyers" :key="lawyer.id" class="grid grid-cols-12">
			<img
				class="col-span-12 object-contain w-full h-64 md:order-2 md:col-span-4 lg:col-span-3"
				:src="lawyer.src"
				:alt="'Foto do Advogado: ' + lawyer.name"
			/>
			<div class="col-span-12 pt-6 md:order-1 md:col-span-8 lg:col-span-9">
				<h2 class="text-3xl font-bold lg:text-4xl" v-text="lawyer.name"></h2>
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
					summary:
						'Advogado formado na Puc/GO em 2015, pós-graduado em prática trabalhista e previdenciária.',
				},
			],
		}),
	});
</script>
