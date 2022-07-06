<template>
	<div class="px-8 py-12 gap-12 lg:px-12">
		<h2 class="text-3xl font-bold mb-10">Estamos prontos para resolver os seguintes problemas</h2>
		<div class="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div v-for="expertise in areas" :key="expertise.id">
				<h6 class="mb-2 font-semibold leading-5" v-text="expertise.title"></h6>
				<p class="mb-3 text-sm line-clamp-3" v-text="expertise.description"></p>
				<a href="/" class="hidden items-center font-semibold">Saiba mais</a>
			</div>
		</div>
	</div>
</template>

<script land="ts">
import Vue from 'vue';
import { areas } from '~/utils/data/expertise';
export default Vue.extend({
	data: () => ({
		areas,
	}),
});
</script>
