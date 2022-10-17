<template>
	<div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
		<h1 v-text="title"></h1>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import type { PropType } from 'vue';
	import { IExpertiseArea } from '~/utils/data/expertise';

	export default Vue.extend({
		props: {
			area: {
				type: Object as PropType<IExpertiseArea>,
				required: true,
			},
		},
		computed: {
			title(): string {
				return (this as any).area.title;
			},
		},
	});
</script>
