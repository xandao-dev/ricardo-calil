<template>
	<section id="contato" class="px-8 py-12 lg:grid lg:grid-cols-12 lg:px-12 lg:gap-10">
		<div class="flex flex-col relative lg:col-span-6">
			<div class="bg-white flex flex-wrap py-6 rounded shadow-md mb-10 lg:order-2 lg:mb-16 lg:z-10">
				<div class="px-6 lg:w-1/2">
					<h3 class="title-font font-semibold tracking-widest text-xs">ENDEREÇO</h3>
					<p class="mt-1" v-text="street"></p>
				</div>
				<div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
					<h3 class="title-font font-semibold tracking-widest text-xs">EMAIL</h3>
					<a class="leading-relaxed underline" :href="'mailto:' + social.email" v-text="social.email"></a>
					<h3 class="title-font font-semibold tracking-widest text-xs mt-4">TELEFONE</h3>
					<a
						class="leading-relaxed underline"
						:href="'tel:' + social.phone"
						rel="noopener noreferrer"
						v-text="social.phone"
					></a>
				</div>
			</div>
			<iframe
				width="100%"
				height="100%"
				class="rounded h-60 lg:h-full"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				loading="lazy"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7669.849964307218!2d-49.8079523!3d-16.0174202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f2f774f3b2d9abc!2sRicardo%20Calil%20%26%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1636910106771!5m2!1spt-BR!2sbr"
				style="filter: grayscale(1) contrast(1.2) opacity(0.65)"
			></iframe>
		</div>
		<form class="hidden lg:col-span-6 lg:order-1 lg:flex lg:flex-col">
			<h2 class="text-3xl font-bold mb-1 lg:text-4xl">Contato</h2>
			<p class="mb-5">Converse com um advogado</p>
			<div class="relative mb-4">
				<label for="name" class="leading-7 text-sm">Nome</label>
				<input
					v-model="contactForm.name"
					type="text"
					name="name"
					class="w-full bg-white rounded border focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="Nome"
				/>
			</div>
			<div class="hidden relative mb-4">
				<label for="surname" class="leading-7 text-sm">Sobrenome</label>
				<input
					v-model="contactForm.surname"
					type="text"
					name="surname"
					class="w-full bg-white rounded border focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="Nome"
				/>
			</div>
			<div class="relative mb-4">
				<label for="phone" class="leading-7 text-sm">Telefone</label>
				<input
					v-model="contactForm.phone"
					type="tel"
					name="phone"
					class="w-full rounded border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="(99) 99999-9999"
				/>
			</div>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm">Email</label>
				<input
					v-model="contactForm.email"
					type="email"
					name="email"
					class="w-full rounded border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="nome@gmail.com"
				/>
			</div>
			<div class="relative mb-4">
				<label for="message" class="leading-7 text-sm">Mensagem</label>
				<textarea
					v-model="contactForm.message"
					name="message"
					class="w-full rounded border focus:ring-2 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					placeholder="Gostaria de saber mais sobre ..."
				></textarea>
			</div>
			<button
				class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 py-2 px-8 focus:outline-none rounded text-lg self-end w-48"
				@click="submitContactForm"
			>
				Enviar
			</button>
		</form>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	export default Vue.extend({
		data: () => ({
			street: 'Rua Capitão Caldas, n. 17, Itaberaí - GO, 76630-000',
			social: {
				whatsapp: '556233752216',
				facebook: 'ricardocaliladv',
				instagram: 'dr.ricardocalil',
				phone: '+55 62 3375-2216',
				email: 'ricardocalil@hotmail.com',
			},
			contactForm: {
				name: '',
				surname: '',
				phone: '',
				email: '',
				message: '',
			},
		}),
		mounted() {},
		methods: {
			async submitContactForm(e: Event) {
				e.preventDefault();
				try {
					const response = await fetch(this.$config.contactFormEndpoint, {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(this.contactForm),
					});

					if (response.status === 200) {
						console.log('success');
					} else {
						console.log('fail');
					}
				} catch (error) {
					console.log(error);
				}
			},
		},
	});
</script>
