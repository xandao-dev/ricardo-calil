<template>
	<div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
		<div class="flex items-center justify-between">
			<span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ formattedDate }}</span>
			<span
				class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
				>{{ category }}</span
			>
		</div>

		<div class="mt-2">
			<nuxt-link :to="link">
				<h2
					class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
				>
					{{ $prismic.asText(post.data.title) }}
				</h2>
				<p class="mt-2 text-gray-600 dark:text-gray-300">
					{{ getFirstParagraph(post) }}
				</p>
			</nuxt-link>
		</div>

		<div class="flex items-center justify-between mt-4">
			<nuxt-link :to="link" class="text-blue-600 dark:text-blue-400 hover:underline">Ler mais</nuxt-link>
			<div v-if="author" class="flex items-center">
				<img
					class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
					:src="authorImageSrc"
					alt="Foto do escritor do post"
				/>
				<a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{{ author }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import LinkResolver from '~/plugins/link-resolver.js';

	export default Vue.extend({
		name: 'BlogWidget',
		props: {
			post: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				link: '',
				formattedDate: '',
				category: '',
				author: '',
				authorImageSrc: '',
			};
		},
		created() {
			this.link = LinkResolver(this.post);
			this.formattedDate = Intl.DateTimeFormat('pt-BR', {
				year: 'numeric',
				month: 'short',
				day: '2-digit',
			}).format(new Date(this.post.data.post_date));
			this.category = this.post.data.post_category;
			this.author = this.post.data.post_author;
			if (this.author === 'Ricardo Calil') {
				this.author = 'Dr. Ricardo Calil';
				this.authorImageSrc = '/lawyers/ricardo_small.webp';
			}
			if (this.author === 'Lucilo Neto') {
				this.author = 'Dr. Lucilo Neto';
				this.authorImageSrc = '/lawyers/lucilo_small.webp';
			}
		},
		methods: {
			// Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
			getFirstParagraph(post) {
				const textLimit = 300;
				const slices = post.data.body;
				let firstParagraph = '';
				let haveFirstParagraph = false;

				slices.forEach((slice) => {
					if (!haveFirstParagraph && slice.slice_type === 'post_content') {
						slice.primary.post_content.forEach(function (block) {
							if (block.type === 'paragraph' && !haveFirstParagraph) {
								firstParagraph += block.text;
								haveFirstParagraph = true;
							}
						});
					}
				});

				const limitedText = firstParagraph.substr(0, textLimit);

				if (firstParagraph.length > textLimit) {
					return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
				} else {
					return firstParagraph;
				}
			},
		},
	});
</script>
