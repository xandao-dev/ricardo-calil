export default function (doc) {
	if (doc.isBroken) {
		return '/'
	}

	if (doc.type === 'blog_post') {
		return '/blog/' + doc.uid
	}

	return '/'
}
