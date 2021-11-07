export default function (doc) {
	if (doc.isBroken) {
		return '/not-found'
	}

	if (doc.type === 'blog_post') {
		return '/blog/' + doc.uid
	}

	return '/not-found'
}
