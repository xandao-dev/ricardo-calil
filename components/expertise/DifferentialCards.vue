<template>
	<div class="flex items-center"></div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		props: {
			icon: {
				type: String,
				required: true,
			},
			bgColor: {
				type: String,
				required: true,
			},
			message: {
				type: String,
				required: true,
			},
		},
		data: () => ({
			differentials: [
				{ id: 0, icon: '', title: 'Atendimento On-line', bgColor: 'bg-primary-700' },
				{ id: 1, icon: '', title: 'Somos Experientes', bgColor: 'bg-primary' },
				{ id: 2, icon: '', title: 'Agimos Rápido', bgColor: 'bg-primary-500' },
			],
		}),
	});
</script>
