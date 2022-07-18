<template>
	<section
		class="before:absolute before:inset-0 before:h-full before:w-full hero-bg relative px-8 py-24 lg:px-12 lg:pb-12 lg:flex lg:justify-between lg:align-middle lg:before:hidden"
	>
		<div class="relative flex flex-col justify-center text-center lg:text-left lg:justify-start">
			<h1 class="text-4xl font-bold text-white sm:text-6xl md:px-28 lg:text-blue-900 lg:px-12">
				30 anos de <span class="text-sky-600 lg:text-black">advocacia</span> para te ajudar
			</h1>
			<p class="text-gray-200 pt-6 pb-12 sm:px-12 md:text-lg md:px-28 lg:text-black lg:px-12">
				Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e
				simplificada.
			</p>
			<button
				class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded px-6 py-3 mx-auto focus:outline-none sm:px-8 sm:py-4 sm:text-xl lg:px-12"
			>
				<NuxtLink to="/itaberai#contato">Fale agora com um advogado</NuxtLink>
			</button>
		</div>
		<img
			src="/hero/hero.webp"
			alt="Imagem de um advogado apertando a mão de um cliente"
			class="hidden object-contain h-96 lg:block"
		/>
	</section>
</template>

<style scoped>
	.hero-bg::before {
		content: '';
		background-image: url('/hero/hero.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.25);
	}
</style>
