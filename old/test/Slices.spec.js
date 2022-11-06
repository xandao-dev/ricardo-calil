import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import PrismicVue from '@prismicio/vue';
import TextSlice from '@/components/slices/TextSlice.vue';
import QuoteSlice from '@/components/slices/QuoteSlice.vue';
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue';

const localVue = createLocalVue();
localVue.use(PrismicVue, {
	endpoint: process.env.PRISMIC_ENDPOINT,
});

describe('TextSlice', () => {
	const propsData = {
		slice: {
			primary: {
				post_content: ['This is a test', 'This is another test'],
			},
		},
	};
	let wrapper;
	beforeEach(() => (wrapper = shallowMount(TextSlice, { propsData, localVue })));

	test('is a Vue instance', () => expect(wrapper.vm).toBeTruthy());
	test('Prismic rich text component exists', () => {
		const richTextEl = wrapper.find('prismic-rich-text-stub');
		expect(richTextEl.exists()).toBe(true);
	});
	test('Prismic rich text component receive prop that contains post_content', () => {
		const richTextEl = wrapper.find('prismic-rich-text-stub');
		propsData.slice.primary.post_content.forEach((content) =>
			expect(richTextEl.attributes().field).toContain(content),
		);
	});
});

describe('QuoteSlice', () => {
	const propsData = {
		slice: {
			primary: {
				quote: 'This is a test',
			},
		},
	};
	const mocks = {
		$prismic: { asText: (str) => str },
	};
	let wrapper;
	beforeEach(() => (wrapper = mount(QuoteSlice, { propsData, mocks })));

	test('is a Vue instance', () => expect(wrapper.vm).toBeTruthy());
	test('Blockquote exists', () => expect(wrapper.find('blockquote').exists()).toBe(true));
	test('Blockquote contains text equal to prop', () => {
		const blockquote = wrapper.find('blockquote');
		expect(blockquote.text()).toContain(propsData.slice.primary.quote);
	});
});

describe('ImageCaptionSlice', () => {
	describe('Full (Banner) Image', () => {
		const propsData = {
			slice: {
				primary: {
					image: { url: 'url_example' },
					image_caption: 'This is a test',
				},
				slice_label: 'full',
			},
		};
		const mocks = {
			$prismic: { asText: (str) => str },
		};
		let wrapper;
		beforeEach(() => (wrapper = shallowMount(ImageCaptionSlice, { propsData, mocks, localVue })));

		test('is a Vue instance', () => expect(wrapper.vm).toBeTruthy());
		test('Div with background image exists', () => {
			const image = wrapper.find('.blog-header.single');
			expect(image.exists()).toBe(true);
		});
		test('Div with background with same url as prop has', () => {
			const image = wrapper.find('.blog-header.single');
			expect(image.attributes().style).toContain(propsData.slice.primary.image.url);
		});
		test('Image caption exists (as title)', () => expect(wrapper.find('h1').exists()).toBe(true));
		test('Image caption equals to props', () => {
			const caption = wrapper.find('h1');
			expect(caption.text()).toBe(propsData.slice.primary.image_caption);
		});
		test('Omitted Image caption does not exists', () => {
			const propsDataWithOmittedCaption = {
				slice: {
					primary: {
						image: { url: 'url_example' },
					},
					slice_label: 'full',
				},
			};
			wrapper = shallowMount(ImageCaptionSlice, { propsData: propsDataWithOmittedCaption, mocks, localVue });
			const caption = wrapper.find('h1');
			expect(caption.exists()).toBe(false);
		});
	});
	describe('Emphasized or Default Image', () => {
		// #FIXME: This test is passing only if we stringify the props data.
		const propsData = {
			slice: {
				primary: {
					image: JSON.stringify({ url: 'url_example' }),
					image_caption: 'This is a test',
				},
				slice_label: 'emphasized',
			},
		};
		const mocks = {
			$prismic: { asText: (str) => str },
		};
		let wrapper;
		beforeEach(() => (wrapper = shallowMount(ImageCaptionSlice, { propsData, mocks, localVue })));

		test('is a Vue instance', () => expect(wrapper.vm).toBeTruthy());
		test('Prismic image component exists', () => {
			const image = wrapper.find('prismic-image-stub');
			expect(image.exists()).toBe(true);
		});
		test('Prismic image component receive prop that contains image url', () => {
			const image = wrapper.find('prismic-image-stub');
			expect(image.attributes().field).toBe(propsData.slice.primary.image);
		});
		test('Image caption exists', () => expect(wrapper.find('span').exists()).toBe(true));
		test('Image caption equals to props', () => {
			const caption = wrapper.find('span');
			expect(caption.text()).toBe(propsData.slice.primary.image_caption);
		});
		test('Omitted Image caption does not exists', () => {
			const propsDataWithOmittedCaption = {
				slice: {
					primary: {
						image: { url: 'url_example' },
					},
					slice_label: 'emphasized',
				},
			};
			wrapper = shallowMount(ImageCaptionSlice, { propsData: propsDataWithOmittedCaption, mocks, localVue });
			const caption = wrapper.find('span');
			expect(caption.exists()).toBe(false);
		});
		test('Image emphasized has emphasized class and default image does not', () => {
			const emphasized = wrapper.find('.emphasized');
			expect(emphasized.exists()).toBe(true);
			const propsDataOmittedLabel = {
				slice: {
					primary: {
						image: { url: 'url_example' },
					},
					slice_label: '',
				},
			};
			wrapper = shallowMount(ImageCaptionSlice, { propsData: propsDataOmittedLabel, mocks, localVue });
			const defaultImage = wrapper.find('.emphasized');
			expect(defaultImage.exists()).toBe(false);
		});
	});
});
