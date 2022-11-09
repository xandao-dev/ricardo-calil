import { RouterScrollBehavior } from 'vue-router';

const scrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition;
	}

	const findEl = async (hash: any, x = 0) => {
		return (
			document.querySelector(hash) ||
			new Promise((resolve) => {
				if (x > 50) {
					return resolve(document.querySelector('#app'));
				}
				setTimeout(() => {
					resolve(findEl(hash, ++x || 1));
				}, 100);
			})
		);
	};

	if (to.hash) {
		let navbarHeight = (await findEl('#navbar')).offsetHeight || 0;
		const el = await findEl(to.hash);
		const scrollable = document.querySelector('main') || window;
		if ('scrollBehavior' in document.documentElement.style) {
			return scrollable.scrollTo({
				top: el.offsetTop - navbarHeight,
				left: 0,
				behavior: 'smooth',
			});
		} else {
			return scrollable.scrollTo(0, el.offsetTop - navbarHeight);
		}
	}

	return { left: 0, top: 0, behavior: 'smooth' };
};

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.$router.options.scrollBehavior = scrollBehavior;
});
