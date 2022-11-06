export default function (doc) {
	if (doc.isBroken) {
		return '/not-found';
	}

	if (doc.type === 'blog_post') {
		return '/artigos/' + doc.uid;
	}

	return '/not-found';
}
