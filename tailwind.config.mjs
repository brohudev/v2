/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Base: '#191724',
				Overlay: '#26233A',
				Text: '#E0DEF4',
				Iris: '#C4A7E7',
				Surface: '#1F1D2E',
				Muted: '#6E6A86',
				Subtle: '#6E6A86',
				Love: '#EB6F92',
				Gold: '#f6c177',
				Rose: '#EBBCBA',
				Pine: '#31748F',
				Foam: '#9CCFD8',
				HighlightLow: '#21202e',
				HighlightMed: '#403D52',
				HighlightHigh: '#524F67',
				About: '#EB6F92',
				Projects: '#f6c177',
				Career: '#31748F',
				Writing: '#C4A7E7',
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
