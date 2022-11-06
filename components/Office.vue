<template>
	<section id="escritorio" class="px-8 py-12 grid sm:grid-cols-12 lg:px-12">
		<div class="col-span-12 text-left mb-12 sm:mb-0 sm:col-span-4">
			<h2 class="text-3xl font-bold text-black lg:text-4xl">Escritório</h2>
			<span class="text-sm font-bold tracking-wider uppercase">Conheça nossa história</span>
		</div>
		<div class="col-span-12 space-y-8 sm:col-span-8 sm:px-0">
			<div class="flex flex-col">
				<h3 class="text-xl font-semibold tracking-wide">Origem</h3>
				<time class="text-xs tracking-wide uppercase text-coolGray-600">fev 1992</time>
				<p class="mt-3" v-text="office.origin" />
			</div>
			<div class="flex flex-col">
				<h3 class="text-xl font-semibold tracking-wide">Associação</h3>
				<time class="text-xs tracking-wide uppercase text-coolGray-600">jan 2015</time>
				<p class="mt-3" v-text="office.association" />
			</div>
			<div class="flex flex-col">
				<h3 class="text-xl font-semibold tracking-wide">Conquistas</h3>
				<time class="text-xs tracking-wide uppercase text-coolGray-600">Jan 2016</time>
				<p class="mt-3" v-text="office.awards" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { office } from '~/utils/data/office';

	export default Vue.extend({
		data: () => ({
			office,
		}),
	});
</script>
