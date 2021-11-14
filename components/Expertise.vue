<template>
	<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<h2 class="text-3xl font-bold mb-10">Estamos prontos para resolver os seguintes problemas</h2>
		<div class="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div v-for="expertise in areas" :key="expertise.id">
				<div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full">
					<svg class="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
						<polygon
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
							points="29 13 14 29 25 29 23 39 38 23 27 23"
						></polygon>
					</svg>
				</div>
				<h6 class="mb-2 font-semibold leading-5" v-text="expertise.title"></h6>
				<p class="mb-3 text-sm">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam.
				</p>
				<a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200"
					>Saiba mais</a
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			areas: [
				{
					id: 0,
					src: '/expertise_areas/trabalhista.svg',
					lazyUrl: '/expertise_areas/trabalhista_lqip.webp',
					title: 'Trabalhista',
					description: '',
				},
				{
					id: 1,
					src: '/expertise_areas/previdenciario.svg',
					lazyUrl: '/expertise_areas/previdenciario_lqip.webp',
					title: 'Previdenciário',
					description: '',
				},
				{
					id: 2,
					src: '/expertise_areas/civil.svg',
					lazyUrl: '/expertise_areas/civil_lqip.webp',
					title: 'Cívil',
					description: '',
				},
				{
					id: 3,
					src: '/expertise_areas/consumidor.svg',
					lazyUrl: '/expertise_areas/consumidor_lqip.webp',
					title: 'Consumidor',
					description: '',
				},
				{
					id: 4,
					src: '/expertise_areas/familia.svg',
					lazyUrl: '/expertise_areas/familia_lqip.webp',
					title: 'Família',
					description: '',
				},
				{
					id: 5,
					src: '/expertise_areas/imobiliario.svg',
					lazyUrl: '/expertise_areas/imobiliario_lqip.webp',
					title: 'Imobiliário',
					description: '',
				},
				{
					id: 6,
					src: '/expertise_areas/contratual.svg',
					lazyUrl: '/expertise_areas/contratual_lqip.webp',
					title: 'Contratual',
					description: '',
				},
				{
					id: 7,
					src: '/expertise_areas/criminal.svg',
					lazyUrl: '/expertise_areas/criminal_lqip.webp',
					title: 'Criminal',
					description: '',
				},
			],
		}),
	};
</script>
