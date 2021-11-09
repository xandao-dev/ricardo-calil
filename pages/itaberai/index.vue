<template>
	<section class="home">
		<h1>Hello from Itaberaí</h1>
	</section>
</template>

<script>
	export default {
		name: 'Home',
		head() {
			return {
				title: 'Ricardo Calil | Advogado em Itaberaí',
				link: [
					{
						rel: 'canonical',
						href: this.$config.websiteHomeDomain,
					},
				],
			};
		},
	};
</script>
