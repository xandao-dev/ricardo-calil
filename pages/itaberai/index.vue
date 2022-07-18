<template>
	<div class="contents">
		<Hero></Hero>
		<Office></Office>
		<Lawyers></Lawyers>
		<Expertise></Expertise>
		<Contact></Contact>
		<FAQ></FAQ>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		name: 'Home',
		head() {
			return {
				title: 'Advogado em Itaberaí | Ricardo Calil',
				link: [
					{
						rel: 'canonical',
						href: this.$config.websiteHomeDomain,
					},
				],
			};
		},
	});
</script>
