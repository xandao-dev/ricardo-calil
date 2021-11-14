<template>
	<div>
		<Hero></Hero>
		<Office></Office>
		<Lawyers></Lawyers>
		<Expertise></Expertise>
		<Contact></Contact>
		<FAQ></FAQ>
	</div>
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
