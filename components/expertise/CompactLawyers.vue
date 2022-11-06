<template>
	<section id="advogados" class="px-8 pb-12 flex flex-col lg:px-12 lg:pb-0">
		<h2 class="text-3xl font-bold mb-6 text-center lg:text-4xl">Advogados</h2>
		<div v-for="lawyer in lawyers" :key="lawyer.id" class="mb-6 last:mb-0">
			<div class="pt-6 text-center">
				<h2 class="text-2xl font-bold lg:text-3xl" v-text="lawyer.name"></h2>
				<span class="text-xs tracking-wide uppercase text-coolGray-600">OAB {{ lawyer.oab }}</span>
				<p class="mt-3 text-gray-800" v-text="lawyer.summary"></p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { lawyers } from '~/utils/data/lawyers';

	export default Vue.extend({
		data: () => ({
			lawyers,
		}),
	});
</script>
