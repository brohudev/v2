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
				Subtle: '#908caa',
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
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 200ms ease-in-out forwards',
				fadeInDown: 'fadeInDown 200ms ease-in-out forwards',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
