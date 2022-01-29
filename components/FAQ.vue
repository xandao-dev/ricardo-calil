<template>
	<section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
		<h2 class="mb-6 text-xl font-bold md:text-3xl">Perguntas Frequentes</h2>
		<div class="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
			<div v-for="question in questions" :key="question.id">
				<button
					class="
						flex
						items-center
						justify-between
						w-full
						py-4
						pr-1
						font-semibold
						text-left
						outline-none
						hover:text-primary
						focus:text-primary focus:outline-none
					"
					role="button"
					@click="toggleQuestion(question)"
				>
					{{ question.ask }}
					<svg
						:class="{ 'rotate-45': !question.closed }"
						class="flex-none w-4 h-4 ml-4 transition transform"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				</button>
				<div
					x-cloak
					class="pb-5 pr-0 md:pr-40"
					:class="{ hidden: question.closed }"
					v-text="question.answer"
				></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		questions: [
			{
				id: 'faq-question-0',
				ask: 'Fui demitido por justa causa, tenho algum direito?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat quam elit, id sodales felis eleifend at. Phasellus auctor pellentesque sem, rutrum rhoncus nisl ultricies gravida. Vestibulum luctus risus tortor, quis rutrum arcu fermentum id. Duis commodo pretium libero finibus venenatis.',
				closed: true,
			},
			{
				id: 'faq-question-1',
				ask: 'Como é feito a cobrança dos honorários?',
				answer: 'Os honorários são calculados caso a caso. Existem várias formas para se mensurar honorários: por hora, em valor fixo por ação ou mensal, no êxito. Dependerá do tipo de caso e dos custos envolvidos.',
				closed: true,
			},
		],
	}),
	methods: {
		toggleQuestion(question) {
			question.closed = !question.closed;
		},
	},
};
</script>
