<template>
	<div class="contents">
		<!--NuxtLink draggable="false" to="./">
			<button
				class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 font-semibold rounded px-6 py-3 mx-auto whitespace-nowrap focus:outline-none sm:px-8 sm:py-4 sm:text-xl md:px-12 lg:mr-12"
			>
				Voltar
			</button>
		</NuxtLink-->
		<ExpertiseHero :info="area.pageInfo.hero" />
		<DifferentialCards />
		<FullExpertise :area="area" />
		<div class="flex flex-col items-center justify-center lg:flex-row lg:items-start">
			<div class="self-stretch h-0.5 mx-8 mb-4 bg-primary-700 lg:hidden"></div>
			<CompactLawyers />
			<div class="self-stretch h-0.5 mx-8 mb-4 bg-primary-700 lg:h-auto lg:w-2 lg:mx-0 lg:mb-0"></div>
			<CompactOffice />
			<div class="self-stretch h-0.5 mx-8 mt-4 bg-primary-700 lg:hidden"></div>
		</div>
		<Contact />
	</div>
</template>

<script land="ts">
	import Vue from 'vue';
	import FullExpertise from '~/components/expertise/FullExpertise.vue';
	import DifferentialCards from '~/components/expertise/DifferentialCards.vue';
	import CompactLawyers from '~/components/expertise/CompactLawyers.vue';
	import CompactOffice from '~/components/expertise/CompactOffice.vue';
	import { areas } from '~/utils/data/expertise';

	export default Vue.extend({
		components: { FullExpertise, DifferentialCards, CompactLawyers, CompactOffice },
		data: () => ({
			area: areas[0],
		}),
		head() {
			return {
				title: `Advogado ${this.area.title} em Itaberaí | Ricardo Calil`,
			};
		},
		created() {
			const target = this.$route.params?.expertise;
			this.area = areas.find((area) => area.target.includes(target)) || areas[0];
		},
	});
</script>
