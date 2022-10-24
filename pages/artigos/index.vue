<template>
	<section class="px-8 py-12 lg:px-12 flex flex-col items-center">
		<div class="relative flex justify-center w-full md:w-1/2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				class="absolute left-0 top-0 scale-[0.60] -translate-y-1 text-gray-600 fill-current"
			>
				<path
					d="M38.7 40.85 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L40.95 38.7q.45.4.45 1.025 0 .625-.5 1.125-.45.45-1.1.45-.65 0-1.1-.45Zm-19.85-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
				/>
			</svg>
			<input
				v-model.trim="search"
				type="text"
				name="search"
				class="w-full rounded border focus:outline-none focus:ring-1 focus:ring-primary text-base py-1 pr-3 pl-10 leading-8 transition-colors duration-200 ease-in-out mb-12"
				placeholder="Insalubridade"
			/>
		</div>
		<div v-if="posts.length !== 0" class="flex flex-col items-center justify-center gap-8">
			<blog-widget v-for="post in postsFiltered" :key="post.id" :post="post"></blog-widget>
		</div>
		<div v-else class="flex flex-col items-center justify-center text-center px-8 py-12 lg:px-12">
			<h1 class="text-xl font-semibold mb-12 md:text-2xl">Nenhuma conteúdo disponível</h1>
			<NuxtLink draggable="false" to="/" class="w-full sm:w-auto">
				<button
					class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 font-semibold rounded w-full py-3 mx-auto focus:outline-none sm:px-24 sm:py-4 md:text-xl"
				>
					Início
				</button>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		async asyncData({ $prismic, error }) {
			try {
				// Query to get posts content to preview
				const blogPosts = await $prismic.api.query($prismic.predicates.at('document.type', 'blog_post'), {
					orderings: '[my.post.date desc]',
				});

				// Returns data to be used in template
				return {
					posts: blogPosts.results,
				};
			} catch (e) {
				// Returns error page
				console.log(e);
				error({ statusCode: 404, message: 'Page not found' });
			}
		},
		data: () => ({
			search: '',
			posts: [],
		}),
		head() {
			return {
				title: 'Artigos Jurídicos - Advogado em Itaberaí | Ricardo Calil',
			};
		},
		computed: {
			postsFiltered() {
				if (this.search) {
					try {
						return this.posts.filter((post) =>
							post.data.title[0].text.toLowerCase().includes(this.search.toLowerCase()),
						);
					} catch (e) {
						return this.posts;
					}
				}
				return this.posts;
			},
		},
	});
</script>
