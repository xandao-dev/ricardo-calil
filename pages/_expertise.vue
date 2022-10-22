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
		<CompactLawyers />
		<CompactOffice />
		<Contact />
	</div>
</template>

<script land="ts">
	import Vue from 'vue';
	import FullExpertise from '~/components/expertise/FullExpertise.vue';
	import DifferentialCards from '~/components/expertise/DifferentialCards.vue';
	import { areas } from '~/utils/data/expertise';

	export default Vue.extend({
		name: 'Expertise',
		components: { FullExpertise, DifferentialCards },
		data: () => ({
			area: areas[0],
		}),
		head() {
			return {
				title: `Advogado ${this.area.title} em Itaberaí | Ricardo Calil`,
			};
		},
		created() {
			const target = this.$route?.path || '';
			this.area = areas.find((area) => area.target === target) || areas[0];
		},
	});
</script>
