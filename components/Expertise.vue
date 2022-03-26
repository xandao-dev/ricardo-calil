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
	<!--div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-5 md:-mx-5 lg:-mx-3 xl:-mx-5">
		<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-5 sm:px-5 sm:w-1/2 md:my-5 md:px-5 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">
  		</div>
	</div-->
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
