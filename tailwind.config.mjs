/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				mint: {
					50: '#f2fbf6',
					100: '#e0f7e9',
					200: '#c2eed3',
					300: '#9fdfba',
					400: '#7bcb9d',
					500: '#57b17f',
					600: '#3f9066',
					700: '#337251',
					800: '#2b5a41',
					900: '#234936',
				},
			},
			boxShadow: {
				glass: '0 8px 32px 0 rgba(20, 60, 40, 0.25)',
			},
		},
	},
	plugins: [],
}
