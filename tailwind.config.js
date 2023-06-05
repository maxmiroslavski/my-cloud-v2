/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				White: '#ffffff',
				Black: '#000',
				Gray: '#717171',
				LightGray: '#eeeeee',
				Primary: '#8f92f6',
				PrimaryHover: '7b7ff7',
				Red: '#ff7c7c',
				LightRed: '#ffe5e5',
				ErrorLightRed: '#ff9494',
			},
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
