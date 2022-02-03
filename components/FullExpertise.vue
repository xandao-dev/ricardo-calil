<template>
	<div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
		<h1 v-text="title"></h1>
	</div>
</template>

<script lang="ts">
import { areas, IExpertiseArea } from '~/utils/data/expertise';

export default {
	props: {
		target: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		areas,
		area: null as IExpertiseArea | null,
	}),
	computed: {
		title(): string {
			return this.area?.title || 'Área não encontrada';
		},
	},
	watch: {
		target: {
			immediate: true,
			handler(target: string) {
				this.area = this.areas.find((area) => area.target === target) || null;
			},
		},
	},
};
</script>
