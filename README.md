# 🚀 Webpack starter kit feat. Bootstrap-v4, JQuery or TailwindCSS

![Webpack](https://img.shields.io/npm/v/webpack?label=webpack&style=flat-square)
![TailwindCSS](https://img.shields.io/npm/v/tailwindcss?label=tailwindcss&style=flat-square)
![Bootstrap-v4](https://img.shields.io/npm/v/bootstrap?label=bootstrap-v4&style=flat-square)
![Jquery](https://img.shields.io/npm/v/jquery?label=jquery&style=flat-square)

![GitHub stars](https://img.shields.io/github/stars/adityasonel/webpack-starter-kit?style=social)
![GitHub forks](https://img.shields.io/github/forks/adityasonel/webpack-starter-kit?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/adityasonel/webpack-starter-kit?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/SonelAditya?label=Follow&style=social)

A simple and reliable webpack starter kit for your web adventures needs, feat. Bootstrap-v4, JQuery or TailwindCSS

## Features

-   Separated development and production webpack settings you can understand
-   Sass
-   ES6
-   Asset loading
-   CSS Vendor prefixing
-   Development server
-   Sourcemaps
-   Favicons generation
-   Production optimizations
-   Mobile browser header color

## Requirements

-   [Node](https://nodejs.org) > 7.6

## Usage

Substitute `PROJECT-NAME` for your project name.

Clone the repository

```sh
 git clone https://github.com/adityasonel/webpack-starter-kit PROJECT-NAME
 cd PROJECT-NAME
```

Or you can head-start with pre setuped tailwindcss kit as

```sh
 git clone --single-branch --branch tailwind-kit  https://github.com/adityasonel/webpack-starter-kit PROJECT-NAME
 cd PROJECT-NAME
```

Or you can also start with bootstrap-jquery setup kit as

```sh
 git clone --single-branch --branch bootstrap-kit  https://github.com/adityasonel/webpack-starter-kit PROJECT-NAME
 cd PROJECT-NAME
```

Install npm dependencies

```sh
 npm install or yarn
```

To start the development server

```sh
npm start
```

To build for production

```sh
npm run build
```

To preview the production build

```sh
npm run preview
```

### How to load fonts

If you don't support Opera Mini, browsers support the .woff format. Its newer version .woff2, is widely supported by modern browsers and can be a good alternative.

If you decide to use only this format you can load the fonts in a similar manner to images.

In your `webpack.dev.js` and `webpack.prod.js` add the following

```js
module.exports = {
	// ..
	module: {
		rules: [
			// ..
			{
				test: /\.woff$/,
				loader: "url-loader",
				options: {
					// Limit at 50k. Above that it emits separate files
					limit: 50000,
					// url-loader sets mimetype if it's passed.
					// Without this it derives it from the file extension
					mimetype: "application/font-woff",
					// Output below fonts directory
					name: "./fonts/[name].[ext]",
				},
			},
			// ..
		],
	},
	// ..
};
```

And let's say your font is in the folder `assets` with the name `pixel.woff`

You can add it and use it in `index.scss` as

```scss
@font-face {
	font-family: "Pixel";
	src: url("./../assets/pixel.woff") format("woff");
}

.body {
	font-family: "Pixel", sans-serif;
}
```

If you would like to support all kinds of font types, remove the woff rule we previously added to `webpack.dev.js` and `webpack.prod.js` and add the following

```js
module.exports = {
	// ..
	module: {
		rules: [
			// ..
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[ext]",
				},
			},
			// ..
		],
	},
	// ..
};
```

And assuming you have your fonts in the directory `assets` with names `pixel.woff`, `pixel.ttf`, `pixel.eot` , etc.

You can add it and use it in `index.scss` as

```scss
@font-face {
	font-family: "Pixel";
	src: url("./../assets/pixel.woff2") format("woff2"), url("./../assets/pixel.woff") format("woff"),
		url("./../assets/pixel.eot") format("embedded-opentype"), url("./../assets/pixel.ttf")
			format("truetype");
	/* Add other formats as you see fit */
}
```

### How to load images

#### In JavaScript

You can require an image from JavaScript like

```js
const myImage = require("./assets/icon.png");
```

If the image size in bytes is smaller than `8192`you, `myImage` will be a string with the encoded image path such as

```
data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJhc3NldHMvaW1hZ2VzL3RpY2stQ3lydkhSdi5zdmciOw==
```

If the image size is larger than `8192` it will be a string with the url to the image such as

```
src/assets/icon.png?hash=5b1f36bc41ab31f5b801
```

This limit is set so images like icons are not loaded through a request but you can force the loader to give you image urls always by doing the following but should not be necessary. The limit works 90% of the time.

```js
const myImage = require("!!url!/assets/icon.png");
```

#### In `index.html`

If you would like to include an image on your `index.html` file, place the path of the image in a webpack require statement`<%= require(imagePath) %>`.

```html
  <img class="splash-title__img"
                     src="<%= require('./src/assets/logo-on-dark-bg.png') %>"
                     alt="webpack logo"></a>
```

Start the development server and `voilà`.

```sh
npm start
```

To build for production

```sh
npm run build
```

To preview the production build

```sh
npm run preview
```

---

Author [Aditya Sonel](https://github.com/adityasonel)
