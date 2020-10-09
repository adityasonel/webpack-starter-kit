/*
 * PostCSS is a tool for transforming styles with JS plugins.
 * These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
 * https://github.com/postcss/postcss
 */

const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
	plugins: [
		/*
		 * Remove unused CSS
		 */
		purgecss({
			content: ["./**/*.html"],
		}),
		tailwindcss("./tailwind.config.js"),
		autoprefixer(),
	],
};
