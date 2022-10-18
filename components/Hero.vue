<template>
	<section
		id="inicio"
		class="before:absolute before:inset-0 before:h-full before:w-full hero-bg relative px-8 py-24 lg:px-12 lg:pb-12 lg:flex lg:justify-between lg:before:hidden"
	>
		<div class="relative flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
			<h1
				class="text-4xl font-bold text-white selection:bg-primary selection:text-white sm:text-6xl md:px-28 lg:text-primary-900 lg:pr-12 lg:pl-0"
			>
				30 anos de <span class="text-primary lg:text-primary">advocacia</span> para te ajudar
			</h1>
			<p
				class="text-gray-200 pt-6 pb-12 sm:px-12 selection:bg-primary selection:text-white md:text-lg md:px-28 lg:text-primary-900 lg:pr-12 lg:pl-0"
			>
				Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e
				simplificada.
			</p>
			<NuxtLink draggable="false" :to="{ path: $route.path, hash: 'contato' }">
				<button
					class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 font-semibold rounded px-6 py-3 mx-auto whitespace-nowrap focus:outline-hidden sm:px-8 sm:py-4 sm:text-xl md:px-12 lg:mr-12"
				>
					Fale agora com um advogado
				</button>
			</NuxtLink>
		</div>
		<img
			draggable="false"
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
