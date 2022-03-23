<template>
	<section class="body-font relative">
		<form class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					loading="lazy"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7669.849964307218!2d-49.8079523!3d-16.0174202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f2f774f3b2d9abc!2sRicardo%20Calil%20%26%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1636910106771!5m2!1spt-BR!2sbr"
					style="filter: grayscale(1) contrast(1.2) opacity(0.65)"
				></iframe>
				<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
					<div class="lg:w-1/2 px-6">
						<h2 class="title-font font-semibold tracking-widest text-xs">ENDEREÇO</h2>
						<p class="mt-1" v-text="street"></p>
					</div>
					<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
						<h2 class="title-font font-semibold tracking-widest text-xs">EMAIL</h2>
						<a class="leading-relaxed" :href="'mailto:' + social.email" v-text="social.email"></a>
						<h2 class="title-font font-semibold tracking-widest text-xs mt-4">TELEFONE</h2>
						<a
							class="leading-relaxed"
							:href="'tel:' + social.phone"
							rel="noopener noreferrer"
							v-text="social.phone"
						></a>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
				<h2 class="text-lg mb-1 font-medium title-font">Contato</h2>
				<p class="leading-relaxed mb-5">Converse agora com um advogado</p>
				<div class="relative mb-4">
					<label for="name" class="leading-7 text-sm">Nome</label>
					<input
						v-model="contactForm.name"
						type="text"
						name="name"
						class="
							w-full
							bg-white
							rounded
							border
							focus:ring-2
							text-base
							outline-none
							text-gray-700
							py-1
							px-3
							leading-8
							transition-colors
							duration-200
							ease-in-out
						"
						placeholder="Nome"
					/>
				</div>
				<div class="hidden relative mb-4">
					<label for="surname" class="leading-7 text-sm">Sobrenome</label>
					<input
						v-model="contactForm.surname"
						type="text"
						name="surname"
						class="
							w-full
							bg-white
							rounded
							border
							focus:ring-2
							text-base
							outline-none
							text-gray-700
							py-1
							px-3
							leading-8
							transition-colors
							duration-200
							ease-in-out
						"
						placeholder="Nome"
					/>
				</div>
				<div class="relative mb-4">
					<label for="phone" class="leading-7 text-sm">Telefone</label>
					<input
						v-model="contactForm.phone"
						type="tel"
						name="phone"
						class="
							w-full
							rounded
							border
							focus:ring-2
							text-base
							outline-none
							py-1
							px-3
							leading-8
							transition-colors
							duration-200
							ease-in-out
						"
						placeholder="(99) 99999-9999"
					/>
				</div>
				<div class="relative mb-4">
					<label for="email" class="leading-7 text-sm">Email</label>
					<input
						v-model="contactForm.email"
						type="email"
						name="email"
						class="
							w-full
							rounded
							border
							focus:ring-2
							text-base
							outline-none
							py-1
							px-3
							leading-8
							transition-colors
							duration-200
							ease-in-out
						"
						placeholder="nome@gmail.com"
					/>
				</div>
				<div class="relative mb-4">
					<label for="message" class="leading-7 text-sm">Mensagem</label>
					<textarea
						v-model="contactForm.message"
						name="message"
						class="
							w-full
							rounded
							border
							focus:ring-2
							h-32
							text-base
							outline-none
							py-1
							px-3
							resize-none
							leading-6
							transition-colors
							duration-200
							ease-in-out
						"
						placeholder="Gostaria de saber mais sobre ..."
					></textarea>
				</div>
				<button class="border-0 py-2 px-6 focus:outline-none rounded text-lg" @click="submitContactForm">
					Enviar
				</button>
			</div>
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
				const response = await fetch('https://usebasin.com/f/e40dbe79fbce', {
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
