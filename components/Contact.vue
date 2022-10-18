<template>
	<section id="contato" class="px-8 py-12 lg:grid lg:grid-cols-12 lg:px-12 lg:gap-10">
		<div class="flex flex-col relative lg:col-span-6">
			<div class="bg-gray-50 flex flex-wrap py-6 rounded shadow-md mb-10 lg:order-2 lg:mb-16 lg:z-10">
				<div class="px-6 lg:w-1/2">
					<h3 class="title-font font-semibold tracking-widest text-xs">ENDEREÇO</h3>
					<p class="mt-1" v-text="street"></p>
				</div>
				<div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
					<h3 class="title-font font-semibold tracking-widest text-xs">EMAIL</h3>
					<a
						class="leading-relaxed underline"
						:href="'mailto:' + social.email"
						rel="noopener noreferrer"
						target="_blank"
						v-text="social.email"
					></a>
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
			></iframe>
		</div>
		<form class="hidden lg:col-span-6 lg:order-1 lg:flex lg:flex-col">
			<h2 class="text-3xl font-bold mb-1 lg:text-4xl">Contato</h2>
			<p class="mb-5">Converse com um advogado</p>
			<div class="relative mb-4" :class="{ 'input-error': $v.contactForm.name.$error }">
				<label for="name" class="leading-7 text-sm">Nome</label>
				<input
					v-model.trim="$v.contactForm.name.$model"
					type="text"
					name="name"
					class="w-full bg-white rounded border focus:outline-none focus:ring-1 focus:ring-primary text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="Nome"
				/>
				<div v-if="!$v.contactForm.name.required" class="error-message">Nome obrigatório</div>
				<div v-if="!$v.contactForm.name.minLength" class="error-message">
					No mínimo {{ $v.contactForm.name.$params.minLength.min }} letras.
				</div>
				<div v-if="!$v.contactForm.name.maxLength" class="error-message">
					No máximo {{ $v.contactForm.name.$params.maxLength.max }} letras.
				</div>
			</div>

			<div class="hidden relative mb-4">
				<label for="surname" class="leading-7 text-sm">Sobrenome</label>
				<input
					v-model="contactForm.surname"
					type="text"
					name="surname"
					class="w-full bg-white rounded border focus:outline-none focus:ring-1 focus:ring-primary text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="Sobrenome"
				/>
			</div>
			<div class="relative mb-4" :class="{ 'input-error': $v.contactForm.phone.$error }">
				<label for="phone" class="leading-7 text-sm">Telefone</label>
				<input
					v-model.trim="$v.contactForm.phone.$model"
					type="tel"
					name="phone"
					class="w-full rounded border focus:outline-none focus:ring-1 focus:ring-primary text-base py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="(99) 99999-9999"
				/>
				<div v-if="!$v.contactForm.phone.required" class="error-message">Telefone ou email obrigatório</div>
			</div>
			<div class="relative mb-4" :class="{ 'input-error': $v.contactForm.email.$error }">
				<label for="email" class="leading-7 text-sm">Email</label>
				<input
					v-model.trim="$v.contactForm.email.$model"
					type="email"
					name="email"
					class="w-full rounded border focus:outline-none focus:ring-1 focus:ring-primary text-base py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="nome@gmail.com"
				/>
				<div v-if="!$v.contactForm.email.required" class="error-message">Email ou telefone obrigatório</div>
				<div v-if="!$v.contactForm.email.email" class="error-message">Email inválido</div>
			</div>
			<div class="relative mb-4" :class="{ 'input-error': $v.contactForm.message.$error }">
				<label for="message" class="leading-7 text-sm">Mensagem</label>
				<textarea
					v-model.trim="$v.contactForm.message.$model"
					name="message"
					class="w-full rounded border focus:outline-none focus:ring-1 focus:ring-primary h-32 text-base py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					placeholder="Gostaria de saber mais sobre ..."
				></textarea>
				<div v-if="!$v.contactForm.message.required" class="error-message">Mensagem obrigatório</div>
				<div v-if="!$v.contactForm.message.maxLength" class="error-message">
					No máximo {{ $v.contactForm.message.$params.maxLength.max }} letras.
				</div>
			</div>
			<button
				class="text-white select-none bg-primary hover:bg-primary-700 active:bg-primary-800 py-2 px-8 focus:outline-none rounded text-lg self-end w-48"
				@click="submitContactForm"
			>
				Enviar
			</button>
		</form>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { validationMixin } from 'vuelidate';
	import { required, minLength, maxLength, email, requiredIf } from 'vuelidate/lib/validators';
	import { contacts } from '~/utils/data/contacts';

	export default Vue.extend({
		mixins: [validationMixin],
		data: () => ({
			street: 'Rua Capitão Caldas, n. 17, Itaberaí - GO, 76630-000',
			social: contacts,
			contactForm: {
				name: '',
				surname: '',
				phone: '',
				email: '',
				message: '',
			},
			contactFormSent: false,
		}),
		mounted() {},
		methods: {
			async submitContactForm(e: Event) {
				e.preventDefault();

				this.$v.$touch();
				if (this.$v.$invalid) {
					this.$toast.error('Preencha os campos corretamente');
					return;
				}

				if (this.contactFormSent) {
					this.$toast.error('A mensagem já foi enviada');
					return;
				}

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
						this.$toast.success('Mensagem enviada com sucesso!');
						this.contactFormSent = true;
					} else {
						this.$toast.error('Erro! Tente outro meio de contato.');
					}
				} catch (error) {
					this.$toast.error('Erro! Tente outro meio de contato.');
				}
			},
		},
		validations: {
			contactForm: {
				name: {
					required,
					minLength: minLength(3),
					maxLength: maxLength(50),
				},
				phone: {
					required: requiredIf(function () {
						return !this.contactForm.phone && !this.contactForm.email;
					}),
				},
				email: {
					required: requiredIf(function () {
						return !this.contactForm.phone && !this.contactForm.email;
					}),
					email,
				},
				message: {
					required,
					maxLength: maxLength(500),
				},
			},
		},
	});
</script>

<style scoped>
	.input-error {
		animation-name: shakeError;
		animation-duration: 0.2s;
		animation-iteration-count: 3;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in-out;
	}

	.input-error input,
	.input-error textarea,
	.input-error pre {
		border-color: var(--red-600);
	}

	.input-error label,
	.input-error div.error-message {
		color: var(--red-600);
		display: block;
	}

	.error-message {
		display: none;
		font-size: 0.8rem;
	}

	@keyframes shakeError {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(0.375rem);
		}
		100% {
			transform: translateX(-0.375rem);
		}
	}
</style>
