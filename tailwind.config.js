/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				Pale_purple: "#E5D4ED",
				Medium_slate_blue: "#6D72C3",
				Rebecca_purple: "#5941A9",
				Dark_purple: "#1D1128",
			},
			boxShadow: {
				main: "0px 0px 10px 2.5px rgba(109, 114, 195, 0.25)",
				main_inset:
					"inset 0px 0px 10px 2.5px rgba(109, 114, 195, 0.25)",
			},
		},
	},
	plugins: [],
};
