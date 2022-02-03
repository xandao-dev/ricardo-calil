<template>
	<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="back">
			<NuxtLink to="./">Voltar</NuxtLink>
		</div>
		<full-expertise :target="target"> </full-expertise>
	</div>
</template>

<script>
import FullExpertise from '~/components/FullExpertise.vue';
export default {
	name: 'Expertise',
	components: { FullExpertise },
	data: () => ({
		target: '',
	}),
	mounted() {
		this.target = this.$route?.path || '';
	},
};
</script>
