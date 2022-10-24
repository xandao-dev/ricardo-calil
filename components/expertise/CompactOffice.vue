<template>
	<section id="escritorio" class="px-8 flex flex-col lg:px-12">
		<h2 class="text-3xl font-bold mb-6 text-center lg:text-4xl">Conheça nossa história</h2>
		<p class="mt-3 text-gray-800 text-center" v-text="office.origin"></p>
		<p class="mt-3 text-gray-800 text-center" v-text="office.association"></p>
		<p class="mt-3 text-gray-800 text-center" v-text="office.awards"></p>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { office } from '~/utils/data/office';

	export default Vue.extend({
		data: () => ({
			office,
		}),
	});
</script>
