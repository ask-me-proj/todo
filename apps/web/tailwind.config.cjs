/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"original-dark-50": "#CBCDD3",
				"original-dark-100": "#979AA7",
				"original-dark-200": "#868998",
				"original-dark-300": "#757989",
				"original-dark-400": "#666978",
				"original-dark-500": "#575A66",
				"original-dark-600": "#484B55",
				"original-dark-700": "#3A3C44",
				"original-dark-800": "#2B2C32",
				"original-dark-900": "#1C1D21",
			},
			boxShadow: {
				focus: "0 0 0 2px rgba(99, 102, 241, .4)",
				"danger-focus": "0 0 0 2px rgba(239, 68, 68, .4)",
			},
		},
	},
	plugins: [],
};
