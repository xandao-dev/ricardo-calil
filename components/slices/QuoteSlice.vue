<template>
	<div class="post-part single container">
		<blockquote class="block-quotation">
			{{ $prismic.asText(slice.primary.quote) }}
		</blockquote>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		name: 'QuoteSlice',
		props: {
			slice: {
				type: Object,
				required: true,
			},
		},
	});
</script>

<style scoped>
	.block-quotation {
		margin-bottom: 2rem;
		display: inline-block;
		font-style: italic;
		font-size: 24px;
	}
	.block-quotation::before {
		content: '« ';
	}
	.block-quotation::after {
		content: ' »';
	}
	.block-citation {
		display: inline-block;
		font-style: italic;
		border-left: solid #b4b4b4 4px;
		padding-left: 10px;
	}
	@media screen and (min-width: 975px) {
		.block-quotation {
			font-size: 30px;
			padding: 0;
		}
		.block-citation {
			margin: 20px 0;
		}
	}
</style>
