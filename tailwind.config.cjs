/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "InterVariable", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				smedium: '0.93rem',
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				cupcake: {
					...require("daisyui/src/theming/themes")["cupcake"],
					"base-content": "rgb(41 37 36)",
					"secondary-content": "rgb(68 64 60)"
				},
			},
		],
	},
}
