const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const partialProcess = require('postcss-partial-process');
const prependSelector = require('postcss-prepend-selector');
const glob = require('glob-all');
const path = require('path');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
  .js('src/js/app.js', 'public/js/app.js')
  .extract([
    'jquery',
  ], 'public/js/vendor.js');

if (process.env.MIX_JS_ONLY !== 'true') {
  mix.sass('src/css/app.scss', 'public/css/app.css')
    .options({
      processCssUrls: false,
      postCss: [
        tailwindcss('src/css/tailwind.js'),
        partialProcess({
          plugins: [
            prependSelector({ selector: '#a ' }),
          ],
        }),
      ],
    })
    .purgeCss({
      paths: glob.sync([
        path.join(__dirname, 'public/**/*.html'),
        path.join(__dirname, 'src/js/**/*.js'),
      ]),
      extensions: ['html', 'js', 'vue'],
    });
  /*
    .styles([
      'node_modules/flickity/css/flickity.css',
    ], 'public/css/vendor.css');
  */
}
