<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength, email, requiredIf, helpers } from '@vuelidate/validators';
import { useToast } from 'vue-toastification';
import { useGtm } from '@gtm-support/vue-gtm';
import { emailEvent, phoneEvent, contactFormEvent } from '~/utils/gtmEvents';
import { contacts } from '~/utils/data/contacts';

const appConfig = useAppConfig();
const toast = useToast();

const street = 'Rua Capitão Caldas, n. 17, Itaberaí - GO, 76630-000';
const social = contacts;
const state = reactive({
    contactForm: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: '',
    },
    contactFormSent: false,
});

const validations = {
    contactForm: {
        name: {
            required: helpers.withMessage('Nome obrigatório', required),
            minLength: helpers.withMessage('No mínimo 3 letras', minLength(3)),
            maxLength: helpers.withMessage('No máximo 50 letras', maxLength(50)),
        },
        phone: {
            required: helpers.withMessage(
                'Telefone ou email obrigatório',
                requiredIf(function () {
                    return !state.contactForm.phone && !state.contactForm.email;
                })
            ),
        },
        email: {
            required: helpers.withMessage(
                'Email ou telefone obrigatório',
                requiredIf(function () {
                    return !state.contactForm.phone && !state.contactForm.email;
                })
            ),
            email: helpers.withMessage('Email inválido', email),
        },
        message: {
            required: helpers.withMessage('Mensagem obrigatória', required),
            maxLength: helpers.withMessage('No máximo 500 letras', maxLength(500)),
        },
    },
};
const v$ = useVuelidate(validations, state);

const gtm = useGtm();
const emailClickEvent = () => gtm?.trackEvent(emailEvent);
const phoneClickEvent = () => gtm?.trackEvent(phoneEvent);
const contactFormSubmitEvent = () => gtm?.trackEvent(contactFormEvent);

async function submitContactForm(e: Event) {
    e.preventDefault();
    v$.value.$touch();
    if (v$.value.$invalid) {
        toast.error('Preencha os campos corretamente');
        return;
    }

    if (state.contactFormSent) {
        toast.error('A mensagem já foi enviada');
        return;
    }

    try {
        const response = await fetch(appConfig.CONTACT_FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state.contactForm),
        });

        if (response.status === 200) {
            toast.success('Mensagem enviada com sucesso!');
            state.contactFormSent = true;
            contactFormSubmitEvent();
        } else {
            toast.error('Erro! Tente outro meio de contato.');
        }
    } catch (error) {
        toast.error('Erro! Tente outro meio de contato.');
    }
}
</script>

<template>
    <section id="contato" class="px-8 py-12 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-12">
        <h2 class="mb-10 text-3xl font-bold lg:hidden">Contato</h2>
        <div class="relative flex flex-col lg:col-span-6">
            <div class="mb-10 flex flex-wrap rounded bg-gray-50 py-6 shadow-md lg:z-10 lg:order-2 lg:mb-16">
                <div class="flex flex-col justify-between px-6 lg:w-1/2">
                    <div>
                        <h3 class="title-font text-xs font-semibold tracking-widest">ENDEREÇO</h3>
                        <p class="mt-1" v-text="street"></p>
                    </div>
                    <SocialMedia class="mt-4 hidden lg:flex" whatsapp facebook instagram />
                </div>
                <div class="mt-4 flex w-full flex-col px-6 lg:mt-0 lg:w-1/2">
                    <h3 class="title-font text-xs font-semibold tracking-widest">EMAIL</h3>
                    <a
                        class="leading-relaxed underline"
                        :href="'mailto:' + social.email"
                        rel="noopener noreferrer"
                        target="_blank"
                        @click="emailClickEvent"
                        v-text="social.email"
                    ></a>
                    <h3 class="title-font mt-4 text-xs font-semibold tracking-widest">TELEFONE</h3>
                    <a
                        class="leading-relaxed underline"
                        :href="'tel:' + social.phone"
                        rel="noopener noreferrer"
                        @click="phoneClickEvent"
                        v-text="social.phone"
                    ></a>
                    <SocialMedia class="mt-4 self-end lg:hidden" whatsapp facebook instagram />
                </div>
            </div>
            <iframe
                width="100%"
                height="100%"
                class="h-60 rounded lg:h-full"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7669.849964307218!2d-49.8079523!3d-16.0174202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f2f774f3b2d9abc!2sRicardo%20Calil%20%26%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1636910106771!5m2!1spt-BR!2sbr"
            ></iframe>
        </div>
        <form class="hidden lg:order-1 lg:col-span-6 lg:flex lg:flex-col">
            <h2 class="mb-1 text-3xl font-bold lg:text-4xl">Contato</h2>
            <p class="mb-5">Converse com um advogado</p>
            <div class="relative mb-4" :class="{ 'input-error': v$.contactForm.name.$error }">
                <label for="name" class="text-sm leading-7">Nome</label>
                <input
                    v-model.trim="v$.contactForm.name.$model"
                    type="text"
                    name="name"
                    class="w-full rounded border bg-white py-1 px-3 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary"
                    :class="{ 'focus:ring-red-600': v$.contactForm.name.$error }"
                    placeholder="Nome"
                />
                <div
                    v-if="v$.contactForm.name.$error"
                    class="error-message"
                    v-text="v$.contactForm.name.$errors?.[0]?.$message"
                ></div>
            </div>

            <div class="relative mb-4 hidden">
                <label for="surname" class="text-sm leading-7">Sobrenome</label>
                <input
                    v-model="state.contactForm.surname"
                    type="text"
                    name="surname"
                    class="w-full rounded border bg-white py-1 px-3 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Sobrenome"
                />
            </div>
            <div class="relative mb-4" :class="{ 'input-error': v$.contactForm.phone.$error }">
                <label for="phone" class="text-sm leading-7">Telefone</label>
                <input
                    v-model.trim="v$.contactForm.phone.$model"
                    type="tel"
                    name="phone"
                    class="w-full rounded border py-1 px-3 text-base leading-8 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary"
                    :class="{ 'focus:ring-red-600': v$.contactForm.phone.$error }"
                    placeholder="(99) 99999-9999"
                />
                <div
                    v-if="v$.contactForm.phone.$error"
                    class="error-message"
                    v-text="v$.contactForm.phone.$errors?.[0]?.$message"
                ></div>
            </div>
            <div class="relative mb-4" :class="{ 'input-error': v$.contactForm.email.$error }">
                <label for="email" class="text-sm leading-7">Email</label>
                <input
                    v-model.trim="v$.contactForm.email.$model"
                    type="email"
                    name="email"
                    class="w-full rounded border py-1 px-3 text-base leading-8 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary"
                    :class="{ 'focus:ring-red-600': v$.contactForm.email.$error }"
                    placeholder="nome@gmail.com"
                />
                <div
                    v-if="v$.contactForm.email.$error"
                    class="error-message"
                    v-text="v$.contactForm.email.$errors?.[0]?.$message"
                ></div>
            </div>
            <div class="relative mb-4" :class="{ 'input-error': v$.contactForm.message.$error }">
                <label for="message" class="text-sm leading-7">Mensagem</label>
                <textarea
                    v-model.trim="v$.contactForm.message.$model"
                    name="message"
                    class="h-32 w-full resize-none rounded border py-1 px-3 text-base leading-6 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary"
                    :class="{ 'focus:ring-red-600': v$.contactForm.message.$error }"
                    placeholder="Gostaria de saber mais sobre ..."
                ></textarea>
                <div
                    v-if="v$.contactForm.message.$error"
                    class="error-message"
                    v-text="v$.contactForm.message.$errors?.[0]?.$message"
                ></div>
            </div>
            <button
                class="w-48 select-none self-end rounded bg-primary py-2 px-8 text-lg text-white hover:bg-primary-700 focus:outline-none active:bg-primary-800"
                @click="submitContactForm"
            >
                Enviar
            </button>
        </form>
    </section>
</template>

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
