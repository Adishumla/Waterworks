/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				atlantic: '#51A3A3',
				mediterranean: '#414288',
				pacific: '#83DBDB',
				salt: '#F5F5F5',
				baltic: '#E0777D',
				abyss: '#000000',
				clear: '#FFFFFF',
			},
		},
	},
	corePlugins: {
    aspectRatio: false,
  },
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
