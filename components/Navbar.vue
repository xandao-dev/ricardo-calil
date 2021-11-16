<template>
	<nav class="bg-white shadow dark:bg-gray-800">
		<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<div>
					<a
						class="
							text-2xl
							font-bold
							text-gray-800
							dark:text-white
							lg:text-3xl
							hover:text-gray-700
							dark:hover:text-gray-300
						"
						href="#"
						>Ricardo Calil & Advogados Associados</a
					>
				</div>

				<!-- Mobile menu button -->
				<div class="flex md:hidden">
					<button
						type="button"
						class="
							text-gray-500
							dark:text-gray-200
							hover:text-gray-600
							dark:hover:text-gray-400
							focus:outline-none focus:text-gray-600
							dark:focus:text-gray-400
						"
						aria-label="toggle menu"
					>
						<img class="h-6 w-6" :src="icons.menu" alt="menu" />
					</button>
				</div>
			</div>

			<div class="items-center hidden md:flex">
				<div class="flex flex-col md:flex-row md:mx-6">
					<NuxtLink
						v-for="section in sections"
						:key="section.target"
						class="
							my-1
							text-sm
							font-medium
							text-gray-700
							dark:text-gray-200
							hover:text-indigo-500
							dark:hover:text-indigo-400
							md:mx-4 md:my-0
						"
						:to="section.target"
						v-text="section.title"
					></NuxtLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data: () => ({
			sections: [
				{
					title: 'Início',
					target: '/itaberai#inicio',
				},
				{
					title: 'Escritório',
					target: '/itaberai#escritorio',
				},
				{
					title: 'Advogados',
					target: '/itaberai#advogados',
				},
				{
					title: 'Atuação',
					target: '/itaberai#atuacao',
				},
				{
					title: 'Contato',
					target: '/itaberai#contato',
				},
				{
					title: 'Perguntas',
					target: '/itaberai#perguntas',
				},
				{
					title: 'Artigos',
					target: '/artigos',
				},
			],
			icons: {
				menu: '/icons/menu.svg',
				menuOpen: '/icons/menu-open.svg',
			},
		}),
	};
</script>
