<template>
	<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="back">
			<NuxtLink to="./">Voltar</NuxtLink>
		</div>
		<full-expertise :area="area"> </full-expertise>
	</div>
</template>

<script land="ts">
	import Vue from 'vue';
	import FullExpertise from '~/components/FullExpertise.vue';
	import { areas } from '~/utils/data/expertise';

	export default Vue.extend({
		name: 'Expertise',
		components: { FullExpertise },
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
