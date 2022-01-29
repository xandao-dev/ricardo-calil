<template>
	<div class="post-part single container">
		<prismic-rich-text class="textslice" :field="slice.primary.post_content" />
	</div>
</template>

<script>
export default {
	name: 'TextSlice',
	props: {
		slice: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.textslice a {
	text-decoration: underline;
}
</style>
