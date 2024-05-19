/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['/**/*.html'],
    theme: {
        extend: {
            colors: {
                PrimaryDarkCyan: 'hsl(158, 36%, 37%)',
                PrimaryCream: 'hsl(30, 38%, 92%)',
                NeutralDarkBlue: 'hsl(212, 21%, 14%)',
                NeutralDarkGrayishBlue: 'hsl(212, 21%, 14%)',
                NeutralWhite: 'hsl(0, 0%, 100%)',

            },
            fontFamily: {
                primary: ['Montserrat', 'sans-serif'],
                secondary: ['Fraunces', 'serif'],
            },
            screen: {
                mobile: '375px',
                Desktop: '1440px',

            },
        },
    },
    plugins: [],
}