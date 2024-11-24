/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		container: {
			center: true,
		},

		extend: {
			colors: {
				mainColor: "#2C3E50",
				commonColor: "#1ABC9C",
				darkColor: "#1A252F",
			},

			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1140px",
				"2xl": "1140px",
			},
		},
	},
	plugins: [],
};
