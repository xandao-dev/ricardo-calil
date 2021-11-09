import { mount } from '@vue/test-utils';
import TextSlice from '@/components/slices/TextSlice.vue';
import QuoteSlice from '@/components/slices/QuoteSlice.vue';
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue';

describe('TextSlice', () => {
	const propsMock = {
		slice: {
			primary: {
				post_content: 'This is a test',
			},
		},
	};
	let wrapper;
	beforeEach(() => {
		wrapper = mount(TextSlice, { propsData: propsMock });
	});

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy();
	});

	test('Prismic component exists', () => {
		const richTextEl = wrapper.find('prismic-rich-text');
		expect(richTextEl.exists()).toBe(true);
	});

	test('Prismic component contains text equal to prop', () => {
		const richTextEl = wrapper.find('prismic-rich-text');
		expect(richTextEl.html()).toContain(propsMock.slice.primary.post_content);
	});
});

describe('QuoteSlice', () => {
	const propsMock = {
		slice: {
			primary: {
				quote: 'This is a test',
			},
		},
	};
	let wrapper;
	beforeEach(() => {
		wrapper = mount(QuoteSlice, { propsData: propsMock });
	});

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy();
	});
});

describe('ImageCaptionSlice', () => {
	const propsMock = {
		slice: {
			primary: {
				image: { url: 'url_example' },
				image_caption: 'This is a test',
			},
			slice_label: 'emphasized',
		},
	};
	let wrapper;
	beforeEach(() => {
		wrapper = mount(ImageCaptionSlice, { propsData: propsMock });
	});

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy();
	});
});
