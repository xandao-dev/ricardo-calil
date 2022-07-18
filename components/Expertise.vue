<template>
	<section class="px-8 py-12 lg:px-12">
		<h2 class="text-3xl font-bold mb-10 text-center lg:text-4xl">Áreas de atuação</h2>
		<div class="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div v-for="expertise in areas" :key="expertise.id">
				<h6 class="mb-2 font-semibold leading-5" v-text="expertise.title"></h6>
				<p class="mb-3 text-sm line-clamp-3" v-text="expertise.description"></p>
				<!--a :href="expertise.target" class="font-medium">Saiba mais</a-->
			</div>
		</div>
	</section>
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
