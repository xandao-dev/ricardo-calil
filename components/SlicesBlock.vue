<template>
	<section>
		<!-- Slice section template -->
		<section v-for="(slice, index) in slices" :key="'slice-' + index">
			<!-- Text slice template -->
			<template v-if="slice.slice_type === 'post_content'">
				<!-- Here :slice="slice" passes the data to the component -->
				<text-slice :slice="slice"></text-slice>
			</template>
			<!-- Quote slice template -->
			<template v-else-if="slice.slice_type === 'citacao'">
				<quote-slice :slice="slice"></quote-slice>
			</template>
			<!-- Image with caption slice template -->
			<template v-else-if="slice.slice_type === 'imagem_com_legenda'">
				<image-caption-slice :slice="slice"></image-caption-slice>
			</template>
		</section>
	</section>
</template>

<script>
	import Vue from 'vue';
	const QuoteSlice = () => import('../components/slices/QuoteSlice.vue');
	const TextSlice = () => import('../components/slices/TextSlice.vue');
	const ImageCaptionSlice = () => import('../components/slices/ImageCaptionSlice.vue');

	export default Vue.extend({
		name: 'SlicesBlock',
		components: {
			QuoteSlice,
			TextSlice,
			ImageCaptionSlice,
		},
		props: {
			slices: {
				type: Array,
				required: true,
			},
		},
	});
</script>
