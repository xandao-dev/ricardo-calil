module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#084D6E',
                    50: '#2EB1F0',
                    100: '#20ACEF',
                    200: '#109DE0',
                    300: '#0E89C4',
                    400: '#0C75A7',
                    500: '#0A618B',
                    600: '#084D6E',
                    700: '#063951',
                    800: '#042535',
                    900: '#021118',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
