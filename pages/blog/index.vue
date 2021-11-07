<template>
	<section class="home">
		<article>
			<!-- Check blog posts exist -->
			<div v-if="posts.length !== 0" class="blog-main">
				<!-- Template for blog posts -->
				<section v-for="post in posts" :key="post.id" :post="post" class="blog-post">
					<!-- Here :post="post" passes the data to the component -->
					<blog-widget :post="post"></blog-widget>
				</section>
			</div>
			<!-- If no blog posts return message -->
			<div v-else class="blog-main">
				<p>No Posts published at this time.</p>
			</div>
		</article>
	</section>
</template>

<script>
	// Importing blog posts widget
	import BlogWidget from '@/components/BlogWidget.vue';

	export default {
		name: 'Blog',
		components: {
			BlogWidget,
		},
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
				error({ statusCode: 404, message: 'Page not found' });
			}
		},
		head() {
			return {
				title: 'Prismic Nuxt.js Blog',
			};
		},
	};
</script>

<style scoped>
	.home {
		max-width: 700px;
		margin: auto;
		text-align: center;
	}
	.home .blog-avatar {
		height: 140px;
		width: 140px;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
		margin: 1em auto;
	}
	.home .blog-description {
		font-size: 18px;
		color: #9a9a9a;
		line-height: 30px;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		font-family: 'Lato', sans-serif;
		border-bottom: 1px solid #dadada;
	}
	.blog-main {
		max-width: 700px;
		margin: auto;
		text-align: left;
	}
	.blog-main.single img {
		width: 100%;
		height: auto;
	}
	.blog-main.single a {
		text-decoration: none;
		background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
		background-repeat: repeat-x;
		background-size: 2px 2px;
		background-position: 0 23px;
	}
	.blog-post {
		margin: 0;
		margin-bottom: 3rem;
	}
	@media (max-width: 767px) {
		.home {
			padding: 0 20px;
		}
		.blog-main {
			padding: 0;
			font-size: 18px;
		}
	}
</style>
