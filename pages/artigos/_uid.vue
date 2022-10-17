<template>
	<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="back">
			<nuxt-link to="./">Voltar</nuxt-link>
		</div>
		<p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
			{{ formattedDate }}
		</p>
		<div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
			<div class="mb-4">
				<span
					aria-label="Article"
					class="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
				>
					{{ $prismic.asText(document.title) }}
				</span>
			</div>
		</div>
		<div>
			<slices-block :slices="slices" />
		</div>
		<div v-if="author" class="flex items-center">
			<img
				class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
				:src="authorImageSrc"
				alt="Foto do escritor do post"
			/>
			<a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{{ author }}</a>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		name: 'Post',
		async asyncData({ $prismic, params, error }) {
			try {
				const post = (await $prismic.api.getByUID('blog_post', params.uid)).data;

				const document = post;
				const slices = post.body;
				const formattedDate = Intl.DateTimeFormat('pt-BR', {
					year: 'numeric',
					month: 'short',
					day: '2-digit',
				}).format(new Date(post.post_date));
				const category = post.post_category;
				let author = post.post_author;
				let authorImageSrc = '';
				if (author === 'Ricardo Calil') {
					author = 'Dr. Ricardo Calil';
					authorImageSrc = '/lawyers/ricardo_small.webp';
				}
				if (author === 'Lucilo Neto') {
					author = 'Dr. Lucilo Neto';
					authorImageSrc = '/lawyers/lucilo_small.webp';
				}
				return {
					document,
					slices,
					formattedDate,
					category,
					author,
					authorImageSrc,
				};
			} catch (e) {
				error({ statusCode: 404, message: 'Artigo não encontrado' });
			}
		},
		head({ $prismic }) {
			// Title with 60 characters max, 44 for post and 16 for site name
			const postTitle = String($prismic.asText(this.document.title)).slice(0, 44) ?? 'Artigo';
			return {
				title: `${postTitle} | Ricardo Calil`,
			};
		},
	});
</script>
