/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '960px',
                xl: '1170px',
            },
            spacing: {
                780: '78rem',
                340: '34rem',
            },
        },
    },
    plugins: [],
};
