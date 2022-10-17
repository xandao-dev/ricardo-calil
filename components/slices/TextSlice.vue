<template>
	<div class="post-part single container">
		<prismic-rich-text class="textslice" :field="slice.primary.post_content" />
	</div>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		name: 'TextSlice',
		props: {
			slice: {
				type: Object,
				required: true,
			},
		},
	});
</script>

<style scoped>
	.textslice a {
		text-decoration: underline;
	}
</style>
