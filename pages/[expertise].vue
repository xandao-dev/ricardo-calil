<script land="ts" setup>
import FullExpertise from '~/components/expertise/FullExpertise.vue';
import DifferentialCards from '~/components/expertise/DifferentialCards.vue';
import CompactLawyers from '~/components/expertise/CompactLawyers.vue';
import CompactOffice from '~/components/expertise/CompactOffice.vue';
import { areas } from '~/utils/data/expertise';

const route = useRoute();
const target = route.params?.expertise;
const area = areas.find((area) => area.target.includes(target)) || areas[0];
</script>

<template>
	<Head>
		<Title>Advogado {{ area.title }} em Itaberaí | Ricardo Calil</Title>
	</Head>

	<ExpertiseHero :info="area.pageInfo.hero" />
	<DifferentialCards />
	<FullExpertise :area="area" />
	<div class="flex flex-col items-center justify-center lg:flex-row lg:items-start">
		<div class="self-stretch h-0.5 mx-8 mb-4 bg-primary-700 lg:hidden"></div>
		<CompactLawyers />
		<div
			class="self-stretch h-0.5 mx-8 mb-4 bg-primary-700 lg:h-auto lg:w-2 lg:mx-0 lg:mb-0"
		></div>
		<CompactOffice />
		<div class="self-stretch h-0.5 mx-8 mt-4 bg-primary-700 lg:hidden"></div>
	</div>
	<Contact />
</template>
