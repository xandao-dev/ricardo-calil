<script>
	export default {
		name: 'Home',
		middleware: [
			function ({ redirect }) {
				redirect('/itaberai');
			},
		],
	};
</script>
