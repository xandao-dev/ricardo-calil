<template>
	<div class="flex flex-col items-center justify-center -translate-y-12 sm:flex-row xl:-translate-y-0">
		<div
			v-for="differential in differentials"
			:key="differential.title"
			class="flex flex-col items-center gap-5 w-full py-5 md:w-48 md:mx-2 md:rounded md:shadow-lg"
			:class="[differential.bgColor, differential.textColor]"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" class="text-primary-50 fill-current">
				<path :d="differential.svgPath" />
			</svg>
			<p class="font-semibold w-min text-center" v-text="differential.title"></p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		data: () => ({
			differentials: [
				{
					title: 'Atendimento On-line',
					bgColor: 'bg-primary-900',
					textColor: 'text-white',
					svgPath:
						'M24 44.3q-4.2 0-7.9-1.6t-6.45-4.35Q6.9 35.6 5.3 31.9 3.7 28.2 3.7 24t1.6-7.9q1.6-3.7 4.35-6.45Q12.4 6.9 16.1 5.3q3.7-1.6 7.9-1.6 4.25 0 7.925 1.6t6.425 4.35q2.75 2.75 4.35 6.45 1.6 3.7 1.6 7.9t-1.6 7.9q-1.6 3.7-4.35 6.45-2.75 2.75-6.45 4.35-3.7 1.6-7.9 1.6Zm-2.15-3.45v-4.1q-1.75 0-2.925-1.3-1.175-1.3-1.175-3v-2.2l-10.2-10.2q-.25 1-.35 1.975Q7.1 23 7.1 24q0 6.45 4.2 11.275t10.55 5.575ZM36.5 35.5q1.05-1.2 1.875-2.55.825-1.35 1.4-2.825t.85-3Q40.9 25.6 40.9 24q0-5.25-2.875-9.55-2.875-4.3-7.675-6.3v.9q0 1.7-1.225 3t-2.925 1.3h-4.35v4.3q0 .85-.675 1.4-.675.55-1.525.55h-4.1V24H28.4q.8 0 1.375.65t.575 1.45v6.35h2.1q1.45 0 2.55.85 1.1.85 1.5 2.2Z',
				},
				{
					title: 'Somos Experientes',
					bgColor: 'bg-primary-800',
					textColor: 'text-white',
					svgPath:
						'm16.3 37.5 7.7-4.6 7.7 4.65-2.1-8.7L36.35 23l-8.9-.8L24 14l-3.45 8.15-8.9.8 6.75 5.85Zm7.7-.6-9.3 5.6q-.5.3-1 .275-.5-.025-.9-.325t-.6-.75q-.2-.45-.1-1l2.5-10.65-8.25-7.15q-.45-.4-.55-.875-.1-.475.05-.975.1-.45.5-.775t.95-.375l10.9-.95 4.2-10q.25-.55.7-.8.45-.25.9-.25t.9.25q.45.25.7.8l4.2 10 10.9.95q.55.05.95.375.4.325.5.775.15.5.05.975-.1.475-.55.875l-8.25 7.15 2.5 10.65q.1.55-.1 1-.2.45-.6.75-.4.3-.9.325-.5.025-1-.275Zm0-10.65Z',
				},
				{
					title: 'Agimos Rápido',
					bgColor: 'bg-primary-700',
					textColor: 'text-white',
					svgPath:
						'M21.15 42.3q-.55 0-.85-.35-.3-.35-.2-.9l1.85-13.1h-7.4q-.6 0-.85-.5t.05-.95l12-20.15q.15-.25.525-.45T27 5.7q.55 0 .85.35.3.35.2.9L26.2 20h7.3q.55 0 .85.5.3.5 0 .95L22.4 41.65q-.15.25-.525.45t-.725.2Z',
				},
			],
		}),
	});
</script>
