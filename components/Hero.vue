<template>
	<section
		class="
			before:absolute before:inset-0 before:h-full before:w-full
			hero-bg
			px-8
			py-24
			lg:px-12 lg:py-36 lg:flex-row lg:justify-between
		"
	>
		<div class="relative flex flex-col justify-center text-center lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 class="text-4xl font-bold text-white sm:text-6xl md:px-28">
				30 anos de <span class="text-sky-600">advocacia</span> para te ajudar
			</h1>
			<p class="text-gray-200 mt-6 mb-12 sm:px-12 md:text-lg md:px-28">
				Somos altamente qualificados e estamos prontos para resolver seus problemas de maneira eficiente e
				simplificada.
			</p>
			<button
				class="
					text-white
					bg-blue-900
					hover:bg-blue-800
					focus:ring-4 focus:ring-blue-300
					font-semibold
					rounded
					px-6
					py-3
					mx-auto
					focus:outline-none
					sm:px-8 sm:py-4 sm:text-xl
				"
			>
				Fale agora com um advogado
			</button>
		</div>
		<img
			src="/hero/hero.webp"
			alt="hero-escritorio"
			class="hidden object-contain lg:mt-0 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
		/>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-bg {
	position: relative;
}
.hero-bg::before {
	content: '';
	background-image: url('/hero/hero.webp');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	filter: brightness(0.25);
}
</style>
