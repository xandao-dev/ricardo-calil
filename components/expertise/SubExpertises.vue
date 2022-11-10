<script lang="ts" setup>
defineProps<{
	subExpertises: string[];
}>();
</script>

<template v-if="subExpertises?.length">
	<div class="flex flex-col items-center justify-center">
		<p class="text-center font-semibold">Veja como podemos te ajudar:</p>
		<div
			class="grid xs-grid-cols-1 auto-rows-fr gap-2 py-8 grid-cols-2 md:grid-cols-4 md-grid-cols-5"
		>
			<div
				v-for="subExpertise in subExpertises"
				:key="subExpertise"
				class="last-row-uncompleted-hidden xs-max-6-rows flex items-center justify-center p-2 shadow-lg bg-gray-50 w-40 border-gray-100 border rounded"
			>
				<p class="text-md w-2/3 text-center text-gray-800" v-text="subExpertise"></p>
			</div>
		</div>
	</div>
</template>

<style scoped>
@media (max-width: 400px) {
	.xs-grid-cols-1 {
		grid-template-columns: minmax(0, 1fr);
	}
	.xs-max-6-rows:nth-child(n + 7) {
		display: none;
	}
}
@media (min-width: 400.01px) and (max-width: 768px) {
	.last-row-uncompleted-hidden:nth-child(2n):nth-last-child(-n + 3)
		~ .last-row-uncompleted-hidden:nth-child(odd):last-child {
		display: none;
	}
}

@media (min-width: 870px) {
	.md-grid-cols-5 {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
}
</style>
