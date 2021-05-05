/** @type {import('@sveltejs/kit').Config} **/
const sveltePreprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');

module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter(),
		files: {}
		// vite: {
		// 	optimizeDeps: {
		// 		exclude: ['gsap', 'gsap/ScrollTrigger']
		// 	}
		// }
	},
	preprocess: sveltePreprocess({
		// scss: true,
		scss: {
			// prependData: `@import 'src/scss/variables.scss';`
			prependData: `@import 'src/scss/mixin.scss';`
		},
		postcss: {
			plugins: [
				require('autoprefixer')({ cascade: false, grid: 'autoplace' }),
				require('postcss-object-fit-images')
			]
		},
		defaults: {
			style: 'scss',
			template: 'pug'
		},
		babel: {
			presets: [
				[
					'@babel/preset-env',
					{
						loose: true,
						// No need for babel to resolve modules
						modules: false,
						targets: {
							// ! Very important. Target es6+
							esmodules: true
						}
					}
				]
			]
		}
	})
};
