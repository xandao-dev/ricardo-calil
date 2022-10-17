<template>
	<section id="perguntas" class="px-8 py-12 lg:px-12">
		<h2 class="text-3xl font-bold mb-10 lg:text-4xl">Perguntas Frequentes</h2>
		<div class="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
			<div v-for="question in questions" :key="question.id">
				<button
					class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left outline-none hover:text-primary focus:text-primary focus:outline-none"
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
	import Vue from 'vue';
	export default Vue.extend({
		data: () => ({
			questions: [
				{
					id: 'faq-question-0',
					ask: 'O que devo fazer para contratar um advogado?',
					answer: 'Você deve conversar com o advogado, expor seu caso e ele irá te explicar os próximos passos.',
					closed: true,
				},
				{
					id: 'faq-question-1',
					ask: 'Como é feito a cobrança dos honorários?',
					answer: 'Os honorários são calculados caso a caso. Eles podem ser cobrados por hora, em valor fixo por ação ou mensal, no êxito. Dependerá do tipo de caso e dos custos envolvidos.',
					closed: true,
				},
				{
					id: 'faq-question-2',
					ask: 'Tenho um problema jurídico mas não sei se vocês atendem ao caso.',
					answer: 'Entre em contato, ficaremos felizes em lhe atender e te explicar o que fazer.',
					closed: true,
				},
				{
					id: 'faq-question-3',
					ask: 'Em quanto tempo o processo é concluído?',
					answer: 'Não é possível prever quando um processo será finalizado, pois cada caso é diferente, mas é possível acompanhar cada etapa do processo para saber seu andamento e qual será a próxima fase.',
					closed: true,
				},
			],
		}),
		methods: {
			toggleQuestion(question) {
				question.closed = !question.closed;
			},
		},
	});
</script>
