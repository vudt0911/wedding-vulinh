/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['cursive','Roboto', 'Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')({ nocompatible: true })],
};
